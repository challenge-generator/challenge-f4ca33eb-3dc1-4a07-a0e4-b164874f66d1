import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { CartComponent } from './features/cart/cart.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { UserProfileComponent } from './features/user/user-profile/user-profile.component';
import { OrderHistoryComponent } from './features/user/order-history/order-history.component';
import { WishlistComponent } from './features/user/wishlist/wishlist.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ForbiddenComponent } from './shared/components/forbidden/forbidden.component';
import { ServerErrorComponent } from './shared/components/server-error/server-error.component';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';
import { adminGuard } from './core/guards/admin.guard';
import { cartNotEmptyGuard } from './core/guards/cart-not-empty.guard';
import { resolveProductDetail } from './features/products/product-detail/product-detail.resolver';
import { resolveCategories } from './features/home/home.resolver';
import { resolveUserProfile } from './features/user/user-profile/user-profile.resolver';
import { resolveCart } from './features/cart/cart.resolver';

const defaultTitle = 'Mi Tienda Online';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: `Inicio | ${defaultTitle}`,
    resolve: {
      categories: resolveCategories
    },
    data: {
      breadcrumb: 'Inicio',
      meta: {
        description: 'Bienvenido a nuestra tienda online. Encuentra los mejores productos con precios competitivos.',
        keywords: 'tienda online, ecommerce, productos, compras'
      }
    }
  },
  {
    path: 'products',
    title: `Productos | ${defaultTitle}`,
    children: [
      {
        path: '',
        component: ProductListComponent,
        title: `Catálogo de Productos | ${defaultTitle}`,
        data: {
          breadcrumb: 'Productos',
          meta: {
            description: 'Explora nuestro catálogo completo de productos.',
            keywords: 'productos, catalogo, tienda'
          }
        }
      },
      {
        path: 'category/:categoryId',
        component: ProductListComponent,
        title: `Categoría | ${defaultTitle}`,
        data: {
          breadcrumb: 'Categoría',
          meta: {
            description: 'Productos por categoría.',
            keywords: 'categoria, productos'
          }
        }
      },
      {
        path: ':productId',
        component: ProductDetailComponent,
        title: `Detalle del Producto | ${defaultTitle}`,
        resolve: {
          product: resolveProductDetail
        },
        data: {
          breadcrumb: 'Detalle',
          meta: {
            description: 'Ver detalles del producto.',
            keywords: 'producto, detalle, compra'
          }
        }
      }
    ]
  },
  {
    path: 'cart',
    component: CartComponent,
    title: `Carrito de Compras | ${defaultTitle}`,
    resolve: {
      cart: resolveCart
    },
    data: {
      breadcrumb: 'Carrito',
      meta: {
        description: 'Revisa los productos en tu carrito de compras.',
        keywords: 'carrito, compras, ecommerce'
      }
    }
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [authGuard, cartNotEmptyGuard],
    title: `Finalizar Compra | ${defaultTitle}`,
    data: {
      breadcrumb: 'Checkout',
      meta: {
        description: 'Completa tu compra de forma segura.',
        keywords: 'checkout, compra, pago'
      }
    }
  },
  {
    path: 'auth',
    canActivate: [guestGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: `Iniciar Sesión | ${defaultTitle}`,
        data: {
          breadcrumb: 'Iniciar Sesión',
          meta: {
            description: 'Inicia sesión en tu cuenta.',
            keywords: 'login, sesion, acceso'
          }
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: `Registrarse | ${defaultTitle}`,
        data: {
          breadcrumb: 'Registrarse',
          meta: {
            description: 'Crea una cuenta nueva.',
            keywords: 'registro, cuenta, nuevo usuario'
          }
        }
      }
    ]
  },
  {
    path: 'user',
    canActivate: [authGuard],
    children: [
      {
        path: 'profile',
        component: UserProfileComponent,
        title: `Mi Perfil | ${defaultTitle}`,
        resolve: {
          user: resolveUserProfile
        },
        data: {
          breadcrumb: 'Mi Perfil',
          meta: {
            description: 'Gestiona tu perfil de usuario.',
            keywords: 'perfil, usuario, cuenta'
          }
        }
      },
      {
        path: 'orders',
        component: OrderHistoryComponent,
        title: `Historial de Pedidos | ${defaultTitle}`,
        data: {
          breadcrumb: 'Pedidos',
          meta: {
            description: 'Consulta el historial de tus pedidos.',
            keywords: 'pedidos, historial, compras'
          }
        }
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
        title: `Lista de Deseos | ${defaultTitle}`,
        data: {
          breadcrumb: 'Wishlist',
          meta: {
            description: 'Tu lista de productos deseados.',
            keywords: 'wishlist, deseos, favoritos'
          }
        }
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES),
    data: {
      breadcrumb: 'Administración'
    }
  },
  {
    path: '404',
    component: NotFoundComponent,
    title: `Página No Encontrada | ${defaultTitle}`,
    data: {
      meta: {
        description: 'La página que buscas no existe.',
        keywords: '404, no encontrada'
      }
    }
  },
  {
    path: '403',
    component: ForbiddenComponent,
    title: `Acceso Denegado | ${defaultTitle}`,
    data: {
      meta: {
        description: 'No tienes permiso para acceder a esta página.',
        keywords: '403, prohibido, acceso'
      }
    }
  },
  {
    path: '500',
    component: ServerErrorComponent,
    title: `Error del Servidor | ${defaultTitle}`,
    data: {
      meta: {
        description: 'Ha ocurrido un error en el servidor.',
        keywords: '500, error, servidor'
      }
    }
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

export class RouteHelper {
  private static router: Router | null = null;

  static setRouter(router: Router): void {
    this.router = router;
  }

  static navigate(commands: any[], extras?: any): void {
    if (this.router) {
      this.router.navigate(commands, extras);
    }
  }

  static getCurrentRoute(): string | null {
    return this.router?.url || null;
  }

  static isActive(path: string): boolean {
    return this.router?.url.startsWith(path) || false;
  }
}