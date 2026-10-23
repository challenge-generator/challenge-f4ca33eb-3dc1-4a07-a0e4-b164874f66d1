import { Component, OnInit, OnDestroy, signal, computed, effect, inject, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Subject, takeUntil, filter, debounceTime, fromEvent, merge } from 'rxjs';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CartService } from './core/services/cart.service';
import { AuthService } from './core/services/auth.service';
import { ThemeService } from './core/services/theme.service';
import { SeoService } from './core/services/seo.service';
import { NotificationService } from './core/services/notification.service';
import { LoadingService } from './core/services/loading.service';
import { Cart } from './core/models/cart.model';
import { User } from './core/models/user.model';
import { BreakpointService } from './core/services/breakpoint.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly ngZone = inject(NgZone);
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);
  
  private readonly cartService = inject(CartService);
  private readonly authService = inject(AuthService);
  private readonly themeService = inject(ThemeService);
  private readonly seoService = inject(SeoService);
  private readonly notificationService = inject(NotificationService);
  private readonly loadingService = inject(LoadingService);
  private readonly breakpointService = inject(BreakpointService);

  private destroy$ = new Subject<void>();
  private routeChangeSubscription: Subscription | null = null;
  private resizeSubscription: Subscription | null = null;

  readonly isLoading = this.loadingService.isLoading;
  readonly currentUser = this.authService.currentUser;
  readonly cartItemCount = this.cartService.itemCount;
  readonly isAuthenticated = this.authService.isAuthenticated;
  readonly isMobile = this.breakpointService.isMobile;
  readonly isTablet = this.breakpointService.isTablet;
  readonly isDesktop = this.breakpointService.isDesktop;
  readonly currentTheme = this.themeService.currentTheme;
  readonly onlineUsers = signal<number>(0);
  readonly serverStatus = signal<'online' | 'offline' | 'degraded'>('online');

  readonly cartTotal = computed(() => {
    const cart = this.cartService.getCart();
    return cart?.total || 0;
  });

  readonly pageTitle = signal<string>('');
  readonly breadcrumbs = signal<Array<{ label: string; url?: string }>>([]);

  readonly appVersion = '1.0.0';
  readonly currentYear = new Date().getFullYear();

  private readonly onlineStatusEffect = effect(() => {
    const status = this.serverStatus();
    if (status === 'offline') {
      this.showOfflineNotification();
    }
  });

  constructor() {
    this.initializeGlobalErrorHandling();
    this.initializeRouteTracking();
    this.initializeOnlineStatusPolling();
  }

  ngOnInit(): void {
    this.initializeAuthState();
    this.initializeCartSync();
    this.initializeNotifications();
    this.initializeSeoMeta();
    this.initializeResizeListener();
    this.loadInitialData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    
    if (this.routeChangeSubscription) {
      this.routeChangeSubscription.unsubscribe();
    }
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  private initializeGlobalErrorHandling(): void {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('error', (event) => {
        this.handleGlobalError(event);
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.handleUnhandledRejection(event);
      });
    });
  }

  private handleGlobalError(event: ErrorEvent): void {
    console.error('Error global capturado:', event.message, event.filename, event.lineno);
    
    this.ngZone.run(() => {
      this.notificationService.error('Ha ocurrido un error inesperado. Por favor, recarga la página.');
      this.cdr.detectChanges();
    });
  }

  private handleUnhandledRejection(event: PromiseRejectionEvent): void {
    console.error('Promesa rechazada no manejada:', event.reason);
    
    this.ngZone.run(() => {
      if (event.reason?.status === 500) {
        this.router.navigate(['/500']);
      } else {
        this.notificationService.error('Ha ocurrido un error de conexión. Verifica tu internet.');
      }
      this.cdr.detectChanges();
    });
  }

  private initializeRouteTracking(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loadingService.show();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (event instanceof NavigationEnd) {
        this.loadingService.hide();
        this.updatePageMetadata(event.urlAfterRedirects);
      }
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationError || event instanceof NavigationCancel),
      takeUntil(this.destroy$)
    ).subscribe(event => {
      this.loadingService.hide();
      if (event instanceof NavigationError) {
        console.error('Error de navegación:', event.error);
      }
    });
  }

  private updatePageMetadata(url: string): void {
    this.router.routerState.snapshot.root.data?.['meta'];
    const metaData = this.router.routerState.snapshot.root.data?.['meta'];
    
    if (metaData) {
      this.seoService.updateMetaTags(metaData);
    }
  }

  private initializeOnlineStatusPolling(): void {
    setInterval(() => {
      this.checkServerStatus();
    }, 30000);
    
    this.checkServerStatus();
  }

  private async checkServerStatus(): Promise<void> {
    try {
      const healthCheck = await fetch('/api/health', { method: 'HEAD' });
      if (healthCheck.ok) {
        this.serverStatus.set('online');
      } else {
        this.serverStatus.set('degraded');
      }
    } catch {
      this.serverStatus.set('offline');
    }
  }

  private showOfflineNotification(): void {
    this.snackBar.open('Estás sin conexión. Algunos funciones pueden no estar disponibles.', 'OK', {
      duration: 5000,
      panelClass: ['offline-notification']
    });
  }

  private initializeAuthState(): void {
    this.authService.initializeAuth();
    
    this.authService.currentUser.pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => {
      if (user) {
        this.authService.syncUserPreferences(user.id);
      }
    });
  }

  private initializeCartSync(): void {
    this.cartService.loadCartFromStorage();
    
    this.cartService.cart$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(cart => {
      this.cartService.saveCartToStorage(cart);
    });
  }

  private initializeNotifications(): void {
    this.notificationService.notifications$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(notification => {
      this.showNotification(notification);
    });
  }

  private showNotification(notification: { type: 'success' | 'error' | 'info' | 'warning'; message: string }): void {
    const panelClass = `snackbar-${notification.type}`;
    this.snackBar.open(notification.message, 'Cerrar', {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [panelClass]
    });
  }

  private initializeSeoMeta(): void {
    this.seoService.setDefaultMetaTags();
  }

  private initializeResizeListener(): void {
    this.resizeSubscription = fromEvent(window, 'resize').pipe(
      debounceTime(250),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.breakpointService.updateBreakpoints();
      this.cdr.detectChanges();
    });
  }

  private loadInitialData(): void {
    this.breakpointService.updateBreakpoints();
    this.themeService.initializeTheme();
    this.loadTranslations();
    this.preloadCriticalAssets();
  }

  private loadTranslations(): void {
    const savedLang = localStorage.getItem('app_language');
    if (savedLang) {
      console.log('Cargando idioma guardado:', savedLang);
    }
  }

  private preloadCriticalAssets(): void {
    const criticalImages = [
      '/assets/images/logo.png',
      '/assets/images/hero-bg.jpg'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
    this.notificationService.success('Sesión cerrada correctamente.');
  }

  onActivate(event: any): void {
    window.scrollTo(0, 0);
  }
}