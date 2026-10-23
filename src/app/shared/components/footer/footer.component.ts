import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

interface FooterLink {
  label: string;
  route: string;
  icon?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  currentYear = signal(new Date().getFullYear());

  companyInfo = signal({
    name: 'ShopOnline',
    description: 'Tu tienda online de confianza para encontrar los mejores productos.',
    email: 'contacto@shoponline.com',
    phone: '+34 900 123 456'
  });

  sections = signal<FooterSection[]>([
    {
      title: 'Comprar',
      links: [
        { label: 'Todos los productos', route: '/products', icon: 'shopping_bag' },
        { label: 'Ofertas', route: '/products?discount=true', icon: 'local_offer' },
        { label: 'Novedades', route: '/products?sort=newest', icon: 'new_releases' },
        { label: 'Categorías', route: '/categories', icon: 'category' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre nosotros', route: '/about', icon: 'business' },
        { label: 'Trabaja con nosotros', route: '/careers', icon: 'work' },
        { label: 'Prensa', route: '/press', icon: 'article' },
        { label: 'Sostenibilidad', route: '/sustainability', icon: 'eco' }
      ]
    },
    {
      title: 'Ayuda',
      links: [
        { label: 'Centro de ayuda', route: '/help', icon: 'help' },
        { label: 'Envíos', route: '/shipping', icon: 'local_shipping' },
        { label: 'Devoluciones', route: '/returns', icon: 'replay' },
        { label: 'Preguntas frecuentes', route: '/faq', icon: 'quiz' }
      ]
    }
  ]);

  socialLinks = signal([
    { name: 'facebook', icon: 'facebook', url: 'https://facebook.com/shoponline' },
    { name: 'twitter', icon: 'twitter', url: 'https://twitter.com/shoponline' },
    { name: 'instagram', icon: 'instagram', url: 'https://instagram.com/shoponline' },
    { name: 'youtube', icon: 'youtube', url: 'https://youtube.com/shoponline' }
  ]);

  footerColumns = computed(() => {
    const sectionsData = this.sections();
    const columns: FooterSection[][] = [];
    const columnSize = Math.ceil(sectionsData.length / 2);
    
    for (let i = 0; i < sectionsData.length; i += columnSize) {
      columns.push(sectionsData.slice(i, i + columnSize));
    }
    
    return columns;
  });

  onLinkClick(event: Event, link: FooterLink): void {
    console.log(`Navegando a: ${link.route}`);
  }

  onSocialClick(event: Event, url: string): void {
    event.preventDefault();
    console.log(`Abriendo redes sociales: ${url}`);
  }

  onContactClick(type: 'email' | 'phone'): void {
    const info = this.companyInfo();
    if (type === 'email') {
      window.location.href = `mailto:${info.email}`;
    } else {
      window.location.href = `tel:${info.phone}`;
    }
  }
}