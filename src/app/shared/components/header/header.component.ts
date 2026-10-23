import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';

interface NavItem {
  label: string;
  route: string;
  icon?: string;
}

interface UserMenuItem {
  label: string;
  icon: string;
  action: string;
}

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly isMobileMenuOpen = signal(false);
  readonly isUserMenuOpen = signal(false);
  readonly cartItemCount = signal(3);
  readonly isScrolled = signal(false);

  readonly navigationItems: NavItem[] = [
    { label: 'Inicio', route: '/', icon: 'home' },
    { label: 'Productos', route: '/products', icon: 'inventory_2' },
    { label: 'Categorías', route: '/categories', icon: 'category' },
    { label: 'Ofertas', route: '/offers', icon: 'local_offer' }
  ];

  readonly userMenuItems: UserMenuItem[] = [
    { label: 'Mi Perfil', icon: 'person', action: 'profile' },
    { label: 'Mis Pedidos', icon: 'receipt_long', action: 'orders' },
    { label: 'Lista de Deseos', icon: 'favorite', action: 'wishlist' }
  ];

  readonly mobileNavItems: NavItem[] = [
    { label: 'Inicio', route: '/', icon: 'home' },
    { label: 'Productos', route: '/products', icon: 'inventory_2' },
    { label: 'Categorías', route: '/categories', icon: 'category' },
    { label: 'Ofertas', route: '/offers', icon: 'local_offer' },
    { label: 'Mi Cuenta', route: '/account', icon: 'account_circle' },
    { label: 'Carrito', route: '/cart', icon: 'shopping_cart' }
  ];

  readonly cartBadgeVisible = computed(() => this.cartItemCount() > 0);

  constructor() {
    this.initScrollListener();
  }

  private initScrollListener(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 50);
      });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen.update(open => !open);
  }

  closeUserMenu(): void {
    this.isUserMenuOpen.set(false);
  }

  onMenuItemClick(action: string): void {
    this.closeMobileMenu();
    this.closeUserMenu();
    console.log(`Acción ejecutada: ${action}`);
  }

  onSearchSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const searchInput = form.querySelector('input') as HTMLInputElement;
    const searchTerm = searchInput?.value?.trim();
    
    if (searchTerm) {
      console.log(`Búsqueda ejecutada: ${searchTerm}`);
      searchInput.value = '';
    }
  }

  onCartClick(): void {
    console.log('Navegando al carrito de compras');
  }

  onLogoClick(): void {
    console.log('Navegando al inicio');
  }

  trackByNavItem(index: number, item: NavItem): string {
    return item.route;
  }

  trackByUserMenuItem(index: number, item: UserMenuItem): string {
    return item.action;
  }