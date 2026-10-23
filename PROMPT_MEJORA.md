# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Archivos que la arquitectura del reto declara y no estan

Creálos con implementacion real, en la capa que les corresponde:

- `src/app/app.component.scss`
- `src/app/features/home/home.component.ts`

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `src/app/shared/components/footer/footer.component.ts` — `FooterSection.push`: Se invoca `push` sobre `FooterSection`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Trainee

### Brecha de conocimiento
Aplica técnicas de maquetación responsive: al menos un sistema de rejilla (Bootstrap, Material) y propiedades CSS orientadas a responsive (Flexbox, Grid).

### Misión / candidato
Candidato con experiencia en Backend (Node, Advanced) que está iniciando su ruta en Frontend (Angular, Trainee).

### Reto
- Tema: Técnicas de maquetación responsive en CSS
- Seniority: trainee-l1
- Tipo: practical
- Título: Implementación de maquetación responsive en una página web
- Tiempo estimado: 4 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición de la estructura de la página — objetivo: Definir la estructura básica de la página utilizando un sistema de rejilla. — entregable (NO resolver): Estructura básica de la página con sistema de rejilla aplicado.
- Fase 2: Aplicación de propiedades CSS para responsive — objetivo: Aplicar propiedades CSS orientadas a responsive (Flexbox, Grid) para mejorar la adaptabilidad de la página. — entregable (NO resolver): Página con propiedades CSS aplicadas para mejorar la adaptabilidad.
- Fase 3: Pruebas y ajustes finales — objetivo: Realizar pruebas y ajustes finales para asegurar que la página se adapta correctamente en todos los dispositivos. — entregable (NO resolver): Página completamente responsive y lista para producción.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "angular-responsive-layout",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~20.2.0",
    "@angular/cdk": "~20.2.0",
    "@angular/common": "~20.2.0",
    "@angular/compiler": "~20.2.0",
    "@angular/core": "~20.2.0",
    "@angular/forms": "~20.2.0",
    "@angular/material": "~20.2.0",
    "@angular/platform-browser": "~20.2.0",
    "@angular/platform-browser-dynamic": "~20.2.0",
    "@angular/router": "~20.2.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~20.2.0",
    "@angular/cli": "~20.2.0",
    "@angular/compiler-cli": "~20.2.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.1.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.4.2"
  }
}

// === ARCHIVO: angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "angular-responsive-layout": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:application": {
          "strict": true,
          "style": "scss"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/angular-responsive-layout",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "browserTarget": "angular-responsive-layout:build:production"
            },
            "development": {
              "browserTarget": "angular-responsive-layout:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "angular-responsive-layout:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
            ],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "tsconfig.app.json",
              "tsconfig.spec.json",
              "e2e/tsconfig.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  },
  "cli": {
    "analytics": false
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom",
      "dom.iterable"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

// === ARCHIVO: src/main.ts ===
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Configuración inicial de la aplicación Angular.
 * Incluye providers para routing, HTTP client, animaciones y módulos de Material Design.
 * También define los módulos principales que serán utilizados en toda la aplicación.
 */
const appProviders = [
  provideRouter(routes),
  provideHttpClient(),
  provideAnimationsAsync(),
  importProvidersFrom(
    BrowserModule,
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  )
];

/**
 * Inicializa la aplicación Angular con el componente principal y la configuración definida.
 * Maneja errores durante el bootstrap para evitar que la aplicación quede en estado inconsistente.
 */
bootstrapApplication(AppComponent, {
  providers: [...appProviders, ...appConfig.providers]
}).catch(err => {
  console.error('Error durante el bootstrap de la aplicación:', err);
  // En un entorno de producción, aquí se podría integrar con un servicio de monitoreo
  // para reportar errores críticos durante el arranque.
});

// === ARCHIVO: src/index.html ===
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Tienda online con productos de alta calidad - Tu destino de compras en línea">
  <meta name="keywords" content="tienda online, ecommerce, productos, compras">
  <meta name="author" content="Equipo de Desarrollo">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="Tienda Online - Tu Destino de Compras">
  <meta property="og:description" content="Descubre los mejores productos en nuestra tienda online">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <base href="/">
  <title>Tienda Online</title>
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <meta name="theme-color" content="#3f51b5">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
</head>
<body>
  <app-root>
    <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: 'Roboto', sans-serif; background-color: #f5f5f5;">
      <div style="text-align: center; padding: 2rem;">
        <div style="width: 48px; height: 48px; margin: 0 auto 16px; border: 4px solid #3f51b5; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <p style="color: #666; font-size: 1rem; margin: 0;">Cargando aplicación...</p>
        <style>
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      </div>
    </div>
  </app-root>
  <noscript>
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif; background: #fff3e0; border: 1px solid #ff9800; margin: 10px;">
      <h2 style="color: #e65100; margin: 0 0 10px;">JavaScript requerido</h2>
      <p style="color: #5d4037; margin: 0;">Esta aplicación requiere JavaScript para funcionar. Por favor, habilita JavaScript en tu navegador.</p>
    </div>
  </noscript>
</body>
</html>

// === ARCHIVO: src/app/app.config.ts ===
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouterTransition } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DatePipe, DecimalPipe, CurrencyPipe } from '@angular/common';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions()
    ),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: errorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: loadingInterceptor,
      multi: true
    },
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    provideStore({}),
    provideEffects([]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    }),
    {
      provide: 'BASE_URL',
      useValue: environment.apiUrl
    },
    {
      provide: 'DEFAULT_LANGUAGE',
      useValue: 'es-ES'
    },
    {
      provide: 'SUPPORTED_LANGUAGES',
      useValue: ['es-ES', 'en-US', 'pt-BR']
    }
  ]
};

// === ARCHIVO: src/app/app.routes.ts ===
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

// === ARCHIVO: src/app/app.component.ts ===
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

// === ARCHIVO: src/app/app.component.html ===
<app-header></app-header>

<main class="main-content">
  <div class="page-container">
    <div class="grid-container">
      <div class="grid-row">
        <div class="grid-col-12 grid-col-md-8 grid-col-lg-9">
          <router-outlet></router-outlet>
        </div>
        <aside class="sidebar grid-col-12 grid-col-md-4 grid-col-lg-3">
          <div class="sidebar-content">
            <h3 class="sidebar-title">Categorías</h3>
            <nav class="category-nav">
              <ul class="category-list">
                <li><a href="#" class="category-link">Electrónica</a></li>
                <li><a href="#" class="category-link">Ropa</a></li>
                <li><a href="#" class="category-link">Hogar</a></li>
                <li><a href="#" class="category-link">Deportes</a></li>
                <li><a href="#" class="category-link">Libros</a></li>
              </ul>
            </nav>
          </div>
          <div class="sidebar-content">
            <h3 class="sidebar-title">Ofertas</h3>
            <p class="sidebar-text">¡Descuentos de hasta 50% en selected items!</p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</main>

<app-footer></app-footer>
"// === ARCHIVO: src/app/app.component.scss ===
@import '../shared/styles/variables';
@import '../shared/styles/mixins';
@import '../shared/styles/responsive';

:host {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.main-content {
  flex: 1;
  padding: $spacing-md;
  background-color: $background-color;
  margin-top: $header-height;

  @include respond-to(mobile) {
    padding: $spacing-sm;
    margin-top: $header-height-mobile;
  }
}

.page-container {
  max-width: $max-content-width;
  margin: 0 auto;
  width: 100%;
}

.grid-container {
  width: 100%;
}

.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -$spacing-xs;
  margin-right: -$spacing-xs;

  @include respond-to(mobile) {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
}

.grid-col-12,
.grid-col-md-8,
.grid-col-lg-9,
.sidebar {
  padding-left: $spacing-xs;
  padding-right: $spacing-xs;
  box-sizing: border-box;
}

.grid-col-12 {
  flex: 0 0 100%;
  max-width: 100%;

  @include respond-to(mobile) {
    padding-left: 0;
    padding-right: 0;
  }
}

.grid-col-md-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;

  @include respond-to(tablet) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @include respond-to(mobile) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.grid-col-lg-9 {
  flex: 0 0 75%;
  max-width: 75%;

  @include respond-to(desktop) {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  @include respond-to(tablet) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @include respond-to(mobile) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.sidebar {
  flex: 0 0 25%;
  max-width: 25%;

  @include respond-to(desktop) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  @include respond-to(tablet) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: $spacing-md;
    order: -1;
  }

  @include respond-to(mobile) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: $spacing-sm;
    order: -1;
  }
}

.sidebar-content {
  background-color: $card-background;
  border-radius: $border-radius;
  padding: $spacing-md;
  margin-bottom: $spacing-md;
  box-shadow: $box-shadow;
  transition: box-shadow $transition-duration ease;

  &:hover {
    box-shadow: $box-shadow-hover;
  }

  @include respond-to(mobile) {
    padding: $spacing-sm;
    margin-bottom: $spacing-sm;
  }
}

.sidebar-title {
  font-size: $font-size-h3;
  font-weight: $font-weight-bold;
  color: $text-primary;
  margin: 0 0 $spacing-sm 0;
  padding-bottom: $spacing-xs;
  border-bottom: 2px solid $primary-color;

  @include respond-to(mobile) {
    font-size: $font-size-h4;
  }
}

.sidebar-text {
  font-size: $font-size-body;
  color: $text-secondary;
  margin: 0;
  line-height: $line-height;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-link {
  display: block;
  padding: $spacing-sm $spacing-xs;
  color: $text-primary;
  text-decoration: none;
  border-radius: $border-radius-small;
  transition: background-color $transition-duration ease,
              color $transition-duration ease;
  font-size: $font-size-body;

  &:hover {
    background-color: $hover-background;
    color: $primary-color;
  }

  &:active {
    background-color: $active-background;
    color: $primary-color-dark;
  }

  @include respond-to(mobile) {
    padding: $spacing-xs $spacing-xs;
    font-size: $font-size-small;
  }
}

router-outlet + * {
  display: block;
}

::ng-deep .mat-drawer-container {
  background-color: transparent !important;
}

::ng-deep .mat-sidenav-content {
  padding: 0 !important;
}
"// === ARCHIVO: src/app/features/home/home.component.ts ===
import { Component, OnInit, signal, computed, effect, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  discount?: number;
}

interface GridConfig {
  cols: number;
  rowHeight: string;
  gutterSize: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatChipsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private breakpointSubject = new BehaviorSubject<string>('desktop');
  
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(true);
  currentBreakpoint = this.breakpointSubject.asObservable();
  
  gridConfig = computed<GridConfig>(() => {
    const breakpoint = this.breakpointSubject.value;
    return this.calculateGridConfig(breakpoint);
  });
  
  featuredProducts = computed(() => {
    return this.products()
      .filter(p => p.discount && p.discount > 0)
      .slice(0, 4);
  });
  
  categories = [
    { name: 'Electrónica', icon: 'devices', count: 150 },
    { name: 'Ropa', icon: 'checkroom', count: 320 },
    { name: 'Hogar', icon: 'home', count: 200 },
    { name: 'Deportes', icon: 'sportsBasketball', count: 80 },
    { name: 'Libros', icon: 'menu_book', count: 450 }
  ];
  
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
    
    this.isTablet$ = this.breakpointObserver.observe([Breakpoints.Tablet])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
    
    this.isWeb$ = this.breakpointObserver.observe([Breakpoints.Web])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
    
    effect(() => {
      const config = this.gridConfig();
      console.log('Grid config updated:', config);
    });
  }

  ngOnInit(): void {
    this.loadProducts();
    this.setupResponsiveObserver();
  }

  private setupResponsiveObserver(): void {
    combineLatest([
      this.breakpointObserver.observe([
        Breakpoints.Handset,
        Breakpoints.Tablet,
        Breakpoints.Web,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
    ]).pipe(
      map(results => {
        const result = results[0];
        if (result.breakpoints[Breakpoints.Handset]) return 'handset';
        if (result.breakpoints[Breakpoints.Tablet]) return 'tablet';
        if (result.breakpoints[Breakpoints.XLarge]) return 'xlarge';
        if (result.breakpoints[Breakpoints.Large]) return 'large';
        if (result.breakpoints[Breakpoints.Web]) return 'web';
        return 'desktop';
      })
    ).subscribe(breakpoint => {
      this.breakpointSubject.next(breakpoint);
    });
  }

  private loadProducts(): void {
    const mockProducts: Product[] = [
      { id: 1, name: 'Smartphone Pro Max', price: 999.99, image: 'assets/products/phone.jpg', category: 'Electrónica', inStock: true, discount: 15 },
      { id: 2, name: 'Laptop Gaming 15"', price: 1499.99, image: 'assets/products/laptop.jpg', category: 'Electrónica', inStock: true },
      { id: 3, name: 'Auriculares Wireless', price: 249.99, image: 'assets/products/headphones.jpg', category: 'Electrónica', inStock: true, discount: 20 },
      { id: 4, name: 'Smartwatch Series 8', price: 399.99, image: 'assets/products/watch.jpg', category: 'Electrónica', inStock: false },
      { id: 5, name: 'Camiseta Algodón', price: 29.99, image: 'assets/products/tshirt.jpg', category: 'Ropa', inStock: true },
      { id: 6, name: 'Jeans Slim Fit', price: 79.99, image: 'assets/products/jeans.jpg', category: 'Ropa', inStock: true, discount: 25 },
      { id: 7, name: 'Zapatillas Running', price: 119.99, image: 'assets/products/sneakers.jpg', category: 'Deportes', inStock: true },
      { id: 8, name: 'Bola de Basketball', price: 34.99, image: 'assets/products/basketball.jpg', category: 'Deportes', inStock: true, discount: 10 }
    ];
    
    setTimeout(() => {
      this.products.set(mockProducts);
      this.isLoading.set(false);
    }, 500);
  }

  private calculateGridConfig(breakpoint: string): GridConfig {
    const configs: Record<string, GridConfig> = {
      handset: { cols: 1, rowHeight: '280px', gutterSize: '8px' },
      tablet: { cols: 2, rowHeight: '320px', gutterSize: '12px' },
      web: { cols: 3, rowHeight: '350px', gutterSize: '16px' },
      large: { cols: 4, rowHeight: '380px', gutterSize: '20px' },
      xlarge: { cols: 4, rowHeight: '400px', gutterSize: '24px' },
      desktop: { cols: 4, rowHeight: '360px', gutterSize: '16px' }
    };
    return configs[breakpoint] || configs.desktop;
  }

  getDiscountedPrice(product: Product): number {
    if (product.discount) {
      return Math.round(product.price * (1 - product.discount / 100) * 100) / 100;
    }
    return product.price;
  }

  onProductClick(product: Product): void {
    console.log('Product clicked:', product.name);
  }

  onAddToCart(product: Product, event: Event): void {
    event.stopPropagation();
    console.log('Added to cart:', product.name);
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}

// === ARCHIVO: src/app/features/home/home.component.html ===
<header-component></header-component>

<main class="home-container">
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Bienvenido a Nuestra Tienda Online</h1>
      <p class="hero-subtitle">
        Descubre los mejores productos con descuentos exclusivos
      </p>
      <button mat-raised-button color="primary" class="hero-cta-button" aria-label="Ver productos">
        <mat-icon>shopping_bag</mat-icon>
        Ver Productos
      </button>
    </div>
    <div class="hero-image-container">
      <img 
        src="assets/hero-image.jpg" 
        alt="Productos destacados" 
        class="hero-image"
        loading="eager"
      />
    </div>
  </section>

  <section class="categories-section">
    <h2 class="section-title">Categorías Populares</h2>
    <mat-grid-list 
      [cols]="breakpoint" 
      rowHeight="200px" 
      (window:resize)="onResize($event)"
      class="categories-grid"
      role="list"
      aria-label="Categorías de productos"
    >
      <mat-grid-tile *ngFor="let category of categories">
        <mat-card class="category-card">
          <mat-card-header>
            <mat-card-title>{{ category.name }}</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>{{ category.description }}</p>
            <span class="product-count">{{ category.productCount }} productos</span>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary" [attr.aria-label]="'Ver productos de ' + category.name">
              EXPLORAR
            </button>
          </mat-card-actions>
        </mat-card>
      </mat-grid-tile>
    </mat-grid-list>
  </section>

  <section class="featured-products-section">
    <h2 class="section-title">Productos Destacados</h2>
    <div class="products-grid" role="list" aria-label="Productos destacados">
      <article 
        *ngFor="let product of featuredProducts" 
        class="product-card"
        role="listitem"
      >
        <div class="product-image-wrapper">
          <img 
            [src]="product.image" 
            [alt]="product.name" 
            class="product-image"
            loading="lazy"
          />
          <span *ngIf="product.discount" class="discount-badge">
            -{{ product.discount }}%
          </span>
        </div>
        <div class="product-details">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-price-container">
            <span class="original-price" *ngIf="product.originalPrice">
              {{ product.originalPrice | currency }}
            </span>
            <span class="current-price">{{ product.price | currency }}</span>
          </div>
          <div class="product-actions">
            <button 
              mat-mini-fab 
              color="warn" 
              aria-label="Añadir a favoritos"
              class="action-button"
            >
              <mat-icon>favorite</mat-icon>
            </button>
            <button 
              mat-raised-button 
              color="primary" 
              aria-label="Añadir al carrito"
              class="add-to-cart-button"
            >
              <mat-icon>add_shopping_cart</mat-icon>
              Añadir
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="promotional-banner-section">
    <div class="promotional-banner">
      <div class="banner-content">
        <h2 class="banner-title">Oferta Especial</h2>
        <p class="banner-text">
          Envío gratuito en pedidos superiores a $50
        </p>
        <button mat-stroked-button color="accent" class="banner-button">
          Ver Condiciones
        </button>
      </div>
      <div class="banner-decoration">
        <mat-icon class="banner-icon">local_shipping</mat-icon>
      </div>
    </div>
  </section>

  <section class="newsletter-section">
    <div class="newsletter-container">
      <h2 class="newsletter-title">Suscríbete a nuestro Newsletter</h2>
      <p class="newsletter-text">
        Recibe las últimas ofertas y novedades directamente en tu correo
      </p>
      <form class="newsletter-form" (submit)="onNewsletterSubmit($event)">
        <mat-form-field appearance="outline" class="newsletter-input">
          <mat-label>Tu correo electrónico</mat-label>
          <input 
            matInput 
            type="email" 
            placeholder="ejemplo@correo.com"
            required
            aria-label="Correo electrónico"
          />
          <mat-icon matSuffix>email</mat-icon>
        </mat-form-field>
        <button 
          mat-raised-button 
          color="primary" 
          type="submit"
          class="subscribe-button"
        >
          Suscribirse
        </button>
      </form>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-section">
      <h3 class="footer-heading">Sobre Nosotros</h3>
      <p class="footer-text">
        Somos una tienda online líder en productos de calidad.
      </p>
    </div>
    <div class="footer-section">
      <h3 class="footer-heading">Enlaces Rápidos</h3>
      <nav class="footer-nav" aria-label="Enlaces del pie de página">
        <a mat-button href="/products">Productos</a>
        <a mat-button href="/about">Acerca de</a>
        <a mat-button href="/contact">Contacto</a>
      </nav>
    </div>
    <div class="footer-section">
      <h3 class="footer-heading">Contacto</h3>
      <p class="footer-text">
        <mat-icon>phone</mat-icon> +1 234 567 890
      </p>
      <p class="footer-text">
        <mat-icon>email</mat-icon> info@tiendaonline.com
      </p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Tienda Online. Todos los derechos reservados.</p>
  </div>
</footer>

// === ARCHIVO: src/app/features/home/home.component.scss ===
@import '../shared/styles/variables';
@import '../shared/styles/mixins';
@import '../shared/styles/responsive';

.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $background-color;
}

.hero-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: $spacing-xl $spacing-xxl;
  background: linear-gradient(135deg, $primary-color 0%, $primary-light 100%);
  min-height: 500px;
  gap: $spacing-xl;

  @include respond-to(mobile) {
    flex-direction: column;
    padding: $spacing-lg $spacing-md;
    text-align: center;
    min-height: auto;
  }

  @include respond-to(tablet) {
    padding: $spacing-xl $spacing-lg;
    flex-wrap: wrap;
  }
}

.hero-content {
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;

  @include respond-to(mobile) {
    max-width: 100%;
    align-items: center;
  }
}

.hero-title {
  font-size: $font-size-hero;
  font-weight: 700;
  color: $text-light;
  margin: 0;
  line-height: 1.2;

  @include respond-to(mobile) {
    font-size: $font-size-h1-mobile;
  }

  @include respond-to(tablet) {
    font-size: $font-size-h1-tablet;
  }
}

.hero-subtitle {
  font-size: $font-size-h3;
  color: $text-light;
  opacity: 0.9;
  margin: 0;

  @include respond-to(mobile) {
    font-size: $font-size-body;
  }
}

.hero-cta-button {
  align-self: flex-start;
  padding: $spacing-sm $spacing-xl;
  font-size: $font-size-button;
  font-weight: 600;
  border-radius: $border-radius-button;

  @include respond-to(mobile) {
    align-self: center;
    width: 100%;
    max-width: 280px;
  }

  mat-icon {
    margin-right: $spacing-xs;
  }
}

.hero-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @include respond-to(mobile) {
    width: 100%;
    margin-top: $spacing-lg;
  }
}

.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: $border-radius-image;
  box-shadow: $shadow-hero;
  object-fit: cover;

  @include respond-to(mobile) {
    max-width: 80%;
  }
}

.section-title {
  font-size: $font-size-h2;
  font-weight: 600;
  color: $text-primary;
  text-align: center;
  margin: 0 0 $spacing-xl 0;
  position: relative;
  padding-bottom: $spacing-md;

  @include respond-to(mobile) {
    font-size: $font-size-h2-mobile;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: $accent-color;
    border-radius: 2px;
  }
}

.categories-section {
  padding: $spacing-xxl $spacing-xl;
  background-color: $background-light;

  @include respond-to(mobile) {
    padding: $spacing-xl $spacing-md;
  }
}

.categories-grid {
  width: 100%;
}

.category-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border-radius: $border-radius-card;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-hover;
  }

  mat-card-header {
    padding-bottom: $spacing-sm;
  }

  mat-card-title {
    font-size: $font-size-h4;
    font-weight: 600;
  }

  mat-card-content {
    padding: $spacing-sm 0;
    flex: 1;

    p {
      color: $text-secondary;
      margin: 0 0 $spacing-xs 0;
      font-size: $font-size-small;
    }
  }

  .product-count {
    display: inline-block;
    background-color: $primary-light;
    color: $primary-color;
    padding: $spacing-xs $spacing-sm;
    border-radius: $border-radius-small;
    font-size: $font-size-small;
    font-weight: 500;
  }

  mat-card-actions {
    padding: $spacing-sm;
    border-top: 1px solid $border-color;
  }
}

.featured-products-section {
  padding: $spacing-xxl $spacing-xl;
  background-color: $background-color;

  @include respond-to(mobile) {
    padding: $spacing-xl $spacing-md;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $spacing-xl;
  max-width: $max-width-container;
  margin: 0 auto;

  @include respond-to(mobile) {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
  }

  @include respond-to(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.product-card {
  background-color: $background-light;
  border-radius: $border-radius-card;
  overflow: hidden;
  box-shadow: $shadow-card;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: $shadow-hover;
  }
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: $background-gray;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  .product-card:hover & {
    transform: scale(1.05);
  }
}

.discount-badge {
  position: absolute;
  top: $spacing-sm;
  right: $spacing-sm;
  background-color: $accent-color;
  color: $text-light;
  padding: $spacing-xs $spacing-sm;
  border-radius: $border-radius-small;
  font-size: $font-size-small;
  font-weight: 700;
}

.product-details {
  padding: $spacing-lg;
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
  flex: 1;
}

.product-name {
  font-size: $font-size-h4;
  font-weight: 600;
  color: $text-primary;
  margin: 0;
}

.product-description {
  font-size: $font-size-small;
  color: $text-secondary;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price-container {
  display: flex;
  align-items: baseline;
  gap: $spacing-sm;
  margin-top: auto;
}

.original-price {
  font-size: $font-size-small;
  color: $text-secondary;
  text-decoration: line-through;
}

.current-price {
  font-size: $font-size-h3;
  font-weight: 700;
  color: $primary-color;
}

.product-actions {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  margin-top: $spacing-sm;
}

.action-button {
  flex-shrink: 0;
}

.add-to-cart-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-xs;

  mat-icon {
    font-size: 18px;
    width: 18px;
    height: 18px;
  }
}

.promotional-banner-section {
  padding: $spacing-xxl $spacing-xl;
  background-color: $primary-dark;

  @include respond-to(mobile) {
    padding: $spacing-xl $spacing-md;
  }
}

.promotional-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: $max-width-container;
  margin: 0 auto;
  background: linear-gradient(135deg, $primary-color 0%, lighten($primary-color, 10%) 100%);
  border-radius: $border-radius-banner;
  padding: $spacing-xxl;
  box-shadow: $shadow-banner;

  @include respond-to(mobile) {
    flex-direction: column;
    text-align: center;
    padding: $spacing-xl;
  }

  @include respond-to(tablet) {
    flex-wrap: wrap;
    gap: $spacing-lg;
  }
}

.banner-content {
  flex: 1;
}

.banner-title {
  font-size: $font-size-h2;
  font-weight: 700;
  color: $text-light;
  margin: 0 0 $spacing-sm 0;

  @include respond-to(mobile) {
    font-size: $font-size-h2-mobile;
  }
}

.banner-text {
  font-size: $font-size-h4;
  color: $text-light;
  opacity: 0.95;
  margin: 0 0 $spacing-lg 0;

  @include respond-to(mobile) {
    font-size: $font-size-body;
  }
}

.banner-button {
  border-color: $text-light;
  color: $text-light;
  font-weight: 600;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.banner-decoration {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @include respond-to(mobile) {
    display: none;
  }
}

.banner-icon {
  font-size: 80px;
  width: 80px;
  height: 80px;
  color: $text-light;
  opacity: 0.3;
}

.newsletter-section {
  padding: $spacing-xxl $spacing-xl;
  background-color: $background-light;

  @include respond-to(mobile) {
    padding: $spacing-xl $spacing-md;
  }
}

.newsletter-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.newsletter-title {
  font-size: $font-size-h2;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-sm 0;

  @include respond-to(mobile) {
    font-size: $font-size-h2-mobile;
  }
}

.newsletter-text {
  font-size: $font-size-body;
  color: $text-secondary;
  margin: 0 0 $spacing-xl 0;
}

.newsletter-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: $spacing-md;

  @include respond-to(mobile) {
    flex-direction: column;
    width: 100%;
  }
}

.newsletter-input {
  flex: 1;
  max-width: 350px;

  @include respond-to(mobile) {
    width: 100%;
    max-width: 100%;
  }
}

.subscribe-button {
  height: 56px;
  padding: 0 $spacing-xl;
  font-weight: 600;

  @include respond-to(mobile) {
    width: 100%;
  }
}

.site-footer {
  background-color: $footer-background;
  color: $text-light;
  padding: $spacing-xxl $spacing-xl $spacing-lg;

  @include respond-to(mobile) {
    padding: $spacing-xl $spacing-md $spacing-md;
  }
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-xl;
  max-width: $max-width-container;
  margin: 0 auto $spacing-xl;

  @include respond-to(mobile) {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
    text-align: center;
  }

  @include respond-to(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
}

.footer-heading {
  font-size: $font-size-h4;
  font-weight: 600;
  margin: 0 0 $spacing-xs 0;
  color: $text-light;
}

.footer-text {
  font-size: $font-size-small;
  color: $text-light;
  opacity: 0.8;
  margin: 0;
  display: flex;
  align-items: center;
  gap: $spacing-xs;

  @include respond-to(mobile) {
    justify-content: center;
  }

  mat-icon {
    font-size: 16px;
    width: 16px;
    height: 16px;
  }
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;

  @include respond-to(mobile) {
    align-items: center;
  }

  a {
    color: $text-light;
    opacity: 0.8;
    text-decoration: none;
    font-size: $font-size-small;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
      background-color: transparent;
    }
  }
}

.footer-bottom {
  text-align: center;
  padding-top: $spacing-lg;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    font-size: $font-size-small;
    color: $text-light;
    opacity: 0.6;
    margin: 0;
  }
}

// === ARCHIVO: src/app/shared/components/header/header.component.ts ===
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

// === ARCHIVO: src/app/shared/components/header/header.component.html ===
<header class="header">
  <mat-toolbar class="header__toolbar" color="primary">
    <div class="header__container">
      <div class="header__brand">
        <a routerLink="/" class="header__logo-link">
          <span class="header__logo-text">ShopOnline</span>
        </a>
      </div>
      
      <nav class="header__nav" role="navigation" aria-label="Navegación principal">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a mat-button 
               routerLink="/" 
               routerLinkActive="header__link--active"
               [routerLinkActiveOptions]="{exact: true}"
               class="header__link">
              Inicio
            </a>
          </li>
          <li class="header__nav-item">
            <a mat-button 
               routerLink="/products" 
               routerLinkActive="header__link--active"
               class="header__link">
              Productos
            </a>
          </li>
          <li class="header__nav-item">
            <a mat-button 
               routerLink="/about" 
               routerLinkActive="header__link--active"
               class="header__link">
              Nosotros
            </a>
          </li>
          <li class="header__nav-item">
            <a mat-button 
               routerLink="/contact" 
               routerLinkActive="header__link--active"
               class="header__link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      
      <div class="header__actions">
        <button mat-icon-button 
                class="header__action-btn" 
                aria-label="Buscar productos">
          <mat-icon>search</mat-icon>
        </button>
        <button mat-icon-button 
                class="header__action-btn" 
                aria-label="Ver carrito de compras">
          <mat-icon>shopping_cart</mat-icon>
        </button>
        <button mat-icon-button 
                class="header__action-btn header__action-btn--menu"
                aria-label="Abrir menú"
                (click)="toggleMenu()">
          <mat-icon>menu</mat-icon>
        </button>
      </div>
    </div>
  </mat-toolbar>
  
  <mat-sidenav-container class="header__sidenav-container">
    <mat-sidenav #sidenav 
                 [mode]="sidenavMode" 
                 [opened]="sidenavOpened"
                 class="header__sidenav"
                 role="dialog"
                 aria-label="Menú de navegación móvil">
      <mat-nav-list class="header__sidenav-list">
        <a mat-list-item 
           routerLink="/" 
           routerLinkActive="header__sidenav-link--active"
           [routerLinkActiveOptions]="{exact: true}"
           class="header__sidenav-link"
           (click)="closeSidenav()">
          <mat-icon matListItemIcon>home</mat-icon>
          <span matListItemTitle>Inicio</span>
        </a>
        <a mat-list-item 
           routerLink="/products" 
           routerLinkActive="header__sidenav-link--active"
           class="header__sidenav-link"
           (click)="closeSidenav()">
          <mat-icon matListItemIcon>store</mat-icon>
          <span matListItemTitle>Productos</span>
        </a>
        <a mat-list-item 
           routerLink="/about" 
           routerLinkActive="header__sidenav-link--active"
           class="header__sidenav-link"
           (click)="closeSidenav()">
          <mat-icon matListItemIcon>info</mat-icon>
          <span matListItemTitle>Nosotros</span>
        </a>
        <a mat-list-item 
           routerLink="/contact" 
           routerLinkActive="header__sidenav-link--active"
           class="header__sidenav-link"
           (click)="closeSidenav()">
          <mat-icon matListItemIcon>contact_mail</mat-icon>
          <span matListItemTitle>Contacto</span>
        </a>
      </mat-nav-list>
    </mat-sidenav>
    
    <mat-sidenav-content class="header__sidenav-content">
    </mat-sidenav-content>
  </mat-sidenav-container>
</header>

// === ARCHIVO: src/app/shared/components/header/header.component.scss ===
@use '../../styles/variables' as vars;
@use '../../styles/mixins' as mix;
@use '../../styles/responsive' as responsive;

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: vars.$container-max-width;
    margin: 0 auto;
    padding: 0 vars.$spacing-md;

    @include mix.flex-breakpoint-down(sm) {
      padding: 0 vars.$spacing-sm;
    }
  }

  &__toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: vars.$primary-color;
    color: vars.$text-light;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0;
    min-height: 64px;

    @include mix.flex-breakpoint-down(sm) {
      min-height: 56px;
    }
  }

  &__brand {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  &__logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.85;
    }

    &:focus {
      outline: 2px solid vars.$accent-color;
      outline-offset: 2px;
    }
  }

  &__logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;

    @include mix.flex-breakpoint-down(sm) {
      font-size: 1.25rem;
    }
  }

  &__nav {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;

    @include responsive.breakpoint-down(lg) {
      display: none;
    }
  }

  &__nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: vars.$spacing-xs;
  }

  &__nav-item {
    display: flex;
    align-items: center;
  }

  &__link {
    color: vars.$text-light;
    font-weight: 500;
    text-decoration: none;
    padding: vars.$spacing-sm vars.$spacing-md;
    border-radius: 4px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    &:focus {
      outline: 2px solid vars.$accent-color;
      outline-offset: 2px;
    }

    &--active {
      background-color: rgba(255, 255, 255, 0.15);
      font-weight: 600;
    }
  }

  &__actions {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: vars.$spacing-xs;
  }

  &__action-btn {
    color: vars.$text-light;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    &:focus {
      outline: 2px solid vars.$accent-color;
      outline-offset: 2px;
    }

    &--menu {
      display: none;

      @include responsive.breakpoint-down(lg) {
        display: flex;
      }
    }
  }

  &__sidenav-container {
    height: 0;
  }

  &__sidenav {
    width: 280px;
    background-color: vars.$background-color;
    padding-top: vars.$spacing-md;

    @include mix.flex-breakpoint-up(lg) {
      display: none;
    }
  }

  &__sidenav-list {
    padding: 0;
  }

  &__sidenav-link {
    color: vars.$text-dark;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    &--active {
      background-color: rgba(63, 81, 181, 0.08);
      color: vars.$primary-color;
    }
  }

  &__sidenav-content {
    background-color: transparent;
  }
}

// === ARCHIVO: src/app/shared/components/footer/footer.component.ts ===
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

// === ARCHIVO: src/app/shared/components/footer/footer.component.html ===
<footer class="footer">
  <div class="footer__container">
    <div class="footer__section footer__section--brand">
      <h3 class="footer__title">Tienda Online</h3>
      <p class="footer__description">
        Tu destino favorito para compras en línea. Calidad garantizada y entrega rápida a todo el país.
      </p>
    </div>

    <div class="footer__section footer__section--links">
      <h4 class="footer__subtitle">Enlaces Rápidos</h4>
      <nav class="footer__nav" aria-label="Enlaces del pie de página">
        <a href="/home" class="footer__link">Inicio</a>
        <a href="/products" class="footer__link">Productos</a>
        <a href="/about" class="footer__link">Nosotros</a>
        <a href="/contact" class="footer__link">Contacto</a>
        <a href="/faq" class="footer__link">Preguntas Frecuentes</a>
      </nav>
    </div>

    <div class="footer__section footer__section--categories">
      <h4 class="footer__subtitle">Categorías</h4>
      <nav class="footer__nav" aria-label="Categorías del pie de página">
        <a href="/category/electronics" class="footer__link">Electrónica</a>
        <a href="/category/clothing" class="footer__link">Ropa</a>
        <a href="/category/home" class="footer__link">Hogar</a>
        <a href="/category/sports" class="footer__link">Deportes</a>
        <a href="/category/books" class="footer__link">Libros</a>
      </nav>
    </div>

    <div class="footer__section footer__section--contact">
      <h4 class="footer__subtitle">Contacto</h4>
      <address class="footer__address">
        <p class="footer__contact-item">
          <span class="footer__contact-icon">📍</span>
          Av. Principal 123, Ciudad, País
        </p>
        <p class="footer__contact-item">
          <span class="footer__contact-icon">📞</span>
          <a href="tel:+1234567890" class="footer__link">+1 (234) 567-890</a>
        </p>
        <p class="footer__contact-item">
          <span class="footer__contact-icon">✉️</span>
          <a href="mailto:info@tiendaonline.com" class="footer__link">info@tiendaonline.com</a>
        </p>
      </address>
    </div>

    <div class="footer__section footer__section--social">
      <h4 class="footer__subtitle">Síguenos</h4>
      <div class="footer__social-links">
        <a href="https://facebook.com" class="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <span class="footer__social-icon">f</span>
        </a>
        <a href="https://twitter.com" class="footer__social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <span class="footer__social-icon">t</span>
        </a>
        <a href="https://instagram.com" class="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <span class="footer__social-icon">i</span>
        </a>
        <a href="https://linkedin.com" class="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <span class="footer__social-icon">in</span>
        </a>
      </div>
    </div>
  </div>

  <div class="footer__bottom">
    <div class="footer__bottom-container">
      <p class="footer__copyright">
        © 2024 Tienda Online. Todos los derechos reservados.
      </p>
      <nav class="footer__legal" aria-label="Enlaces legales">
        <a href="/privacy" class="footer__legal-link">Política de Privacidad</a>
        <a href="/terms" class="footer__legal-link">Términos y Condiciones</a>
        <a href="/cookies" class="footer__legal-link">Política de Cookies</a>
      </nav>
    </div>
  </div>
</footer>

// === ARCHIVO: src/app/shared/components/footer/footer.component.scss ===
@use '../../styles/variables' as v;
@use '../../styles/mixins' as m;
@use '../../styles/responsive' as r;

.footer {
  background-color: v.$footer-bg-color;
  color: v.$footer-text-color;
  font-family: v.$font-family-base;
  margin-top: auto;
  width: 100%;

  &__container {
    @include m.container;
    display: grid;
    grid-template-columns: 1fr;
    gap: v.$spacing-lg;
    padding: v.$spacing-xl v.$spacing-md;

    @media (min-width: r.$breakpoint-sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: r.$breakpoint-md) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: r.$breakpoint-lg) {
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      gap: v.$spacing-xl;
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: v.$spacing-md;

    &--brand {
      @media (min-width: r.$breakpoint-lg) {
        grid-column: span 1;
      }
    }

    &--links,
    &--categories {
      @media (min-width: r.$breakpoint-md) {
        justify-self: center;
      }
    }

    &--contact {
      @media (min-width: r.$breakpoint-md) and (max-width: r.$breakpoint-lg - 1) {
        grid-column: span 2;
      }
    }

    &--social {
      @media (min-width: r.$breakpoint-sm) and (max-width: r.$breakpoint-md - 1) {
        grid-column: span 2;
      }
    }
  }

  &__title {
    font-size: v.$font-size-h3;
    font-weight: v.$font-weight-bold;
    color: v.$footer-heading-color;
    margin: 0;
    padding-bottom: v.$spacing-sm;
    border-bottom: 2px solid v.$footer-accent-color;
    display: inline-block;
  }

  &__subtitle {
    font-size: v.$font-size-h4;
    font-weight: v.$font-weight-semibold;
    color: v.$footer-heading-color;
    margin: 0;
  }

  &__description {
    font-size: v.$font-size-base;
    line-height: v.$line-height-base;
    margin: v.$spacing-sm 0 0;
    color: v.$footer-text-muted;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: v.$spacing-sm;
  }

  &__link {
    color: v.$footer-link-color;
    text-decoration: none;
    font-size: v.$font-size-base;
    transition: color v.$transition-fast, padding-left v.$transition-fast;
    padding: v.$spacing-xs 0;
    display: inline-block;

    &:hover,
    &:focus {
      color: v.$footer-link-hover-color;
      padding-left: v.$spacing-sm;
    }

    &:focus {
      outline: 2px solid v.$footer-accent-color;
      outline-offset: 2px;
    }
  }

  &__address {
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: v.$spacing-sm;
  }

  &__contact-item {
    display: flex;
    align-items: flex-start;
    gap: v.$spacing-sm;
    font-size: v.$font-size-base;
    line-height: v.$line-height-base;
    margin: 0;
  }

  &__contact-icon {
    flex-shrink: 0;
    font-size: v.$font-size-lg;
  }

  &__social-links {
    display: flex;
    gap: v.$spacing-md;
    flex-wrap: wrap;
  }

  &__social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: v.$footer-social-bg;
    color: v.$footer-social-color;
    text-decoration: none;
    font-size: v.$font-size-base;
    font-weight: v.$font-weight-bold;
    transition: background-color v.$transition-fast, transform v.$transition-fast;

    &:hover,
    &:focus {
      background-color: v.$footer-social-hover-bg;
      transform: scale(1.1);
    }

    &:focus {
      outline: 2px solid v.$footer-accent-color;
      outline-offset: 2px;
    }
  }

  &__social-icon {
    text-transform: uppercase;
  }

  &__bottom {
    background-color: v.$footer-bottom-bg;
    border-top: 1px solid v.$footer-border-color;
    padding: v.$spacing-md v.$spacing-md;
  }

  &__bottom-container {
    @include m.container;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: v.$spacing-md;
    text-align: center;

    @media (min-width: r.$breakpoint-md) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }

  &__copyright {
    font-size: v.$font-size-sm;
    color: v.$footer-text-muted;
    margin: 0;
  }

  &__legal {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: v.$spacing-md;
  }

  &__legal-link {
    color: v.$footer-text-muted;
    text-decoration: none;
    font-size: v.$font-size-sm;
    transition: color v.$transition-fast;

    &:hover,
    &:focus {
      color: v.$footer-link-hover-color;
    }

    &:focus {
      outline: 2px solid v.$footer-accent-color;
      outline-offset: 2px;
    }
  }
}

// === ARCHIVO: src/app/shared/styles/_variables.scss ===
// ===========================================
// Variables globales del sistema de diseño
// ===========================================

// Colores del tema
$primary-color: #3f51b5;
$primary-dark: #303f9f;
$primary-light: #7986cb;
$accent-color: #ff4081;
$accent-dark: #c51162;
$accent-light: #ff80ab;

$text-primary: #212121;
$text-secondary: #757575;
$text-disabled: #9e9e9e;
$text-hint: #bdbdbd;

$background-default: #ffffff;
$background-paper: #fafafa;
$background-hover: #f5f5f5;

$divider-color: #e0e0e0;
$border-color: #e0e0e0;

// Colores de estado
$success-color: #4caf50;
$warning-color: #ff9800;
$error-color: #f44336;
$info-color: #2196f3;

// Colores del footer
$footer-bg-color: #263238;
$footer-bottom-bg: #1a2327;
$footer-text-color: #eceff1;
$footer-text-muted: #b0bec5;
$footer-heading-color: #ffffff;
$footer-link-color: #cfd8dc;
$footer-link-hover-color: $accent-light;
$footer-accent-color: $accent-color;
$footer-border-color: #37474f;
$footer-social-bg: #37474f;
$footer-social-color: #eceff1;
$footer-social-hover-bg: $accent-color;

// Tipografía
$font-family-base: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
$font-family-heading: $font-family-base;

$font-size-xs: 0.75rem;
$font-size-sm: 0.875rem;
$font-size-base: 1rem;
$font-size-lg: 1.125rem;
$font-size-xl: 1.25rem;
$font-size-h4: 1.5rem;
$font-size-h3: 1.75rem;
$font-size-h2: 2rem;
$font-size-h1: 2.5rem;

$font-weight-light: 300;
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;

$line-height-tight: 1.2;
$line-height-base: 1.5;
$line-height-relaxed: 1.75;

// Espaciado
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
$spacing-xl: 2rem;
$spacing-xxl: 3rem;

// Breakpoints para media queries
$breakpoint-xs: 0;
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
$breakpoint-xxl: 1400px;

// Z-index
$z-index-dropdown: 1000;
$z-index-sticky: 1020;
$z-index-fixed: 1030;
$z-index-modal-backdrop: 1040;
$z-index-modal: 1050;
$z-index-popover: 1060;
$z-index-tooltip: 1070;

// Sombras
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

// Radios
$border-radius-sm: 0.25rem;
$border-radius-base: 0.375rem;
$border-radius-md: 0.5rem;
$border-radius-lg: 0.75rem;
$border-radius-xl: 1rem;
$border-radius-full: 9999px;

// Transiciones
$transition-fast: 150ms ease-in-out;
$transition-base: 250ms ease-in-out;
$transition-slow: 350ms ease-in-out;

// Ancho máximo del contenedor
$container-max-width: 1200px;
$container-padding: 1rem;

// Grid
$grid-columns: 12;
$grid-gutter-width: 1.5rem;

// Elevación
$elevation-1: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
$elevation-2: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
$elevation-3: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
$elevation-4: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
$elevation-5: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);

// === ARCHIVO: src/app/shared/styles/_mixins.scss ===
// Mixins reutilizables para estilos responsivos y maquetación
// Uso: @include mobile { ... } para aplicar estilos en móvil

// Breakpoints basados en variables de proyecto
$breakpoint-mobile: 576px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 992px;
$breakpoint-large-desktop: 1200px;

// Mixin para dispositivos móviles (menor a breakpoint-tablet)
@mixin mobile {
  @media only screen and (max-width: #{$breakpoint-tablet - 1px}) {
    @content;
  }
}

// Mixin para tablets (entre breakpoint-mobile y breakpoint-desktop)
@mixin tablet {
  @media only screen and (min-width: $breakpoint-tablet) and (max-width: #{$breakpoint-desktop - 1px}) {
    @content;
  }
}

// Mixin para tablets y abajo (menor a breakpoint-desktop)
@mixin tablet-down {
  @media only screen and (max-width: #{$breakpoint-desktop - 1px}) {
    @content;
  }
}

// Mixin para tablets y arriba (mayor o igual a breakpoint-tablet)
@mixin tablet-up {
  @media only screen and (min-width: $breakpoint-tablet) {
    @content;
  }
}

// Mixin para escritorio (mayor o igual a breakpoint-desktop)
@mixin desktop {
  @media only screen and (min-width: $breakpoint-desktop) {
    @content;
  }
}

// Mixin para escritorio grande (mayor o igual a breakpoint-large-desktop)
@mixin large-desktop {
  @media only screen and (min-width: $breakpoint-large-desktop) {
    @content;
  }
}

// Mixin para rango específico de breakpoints
@mixin breakpoint-range($min, $max) {
  @media only screen and (min-width: $min) and (max-width: $max) {
    @content;
  }
}

// Mixin para container fluido con máximo ancho
@mixin container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

// Mixin para container con ancho máximo según breakpoint
@mixin container-responsive($max-width: 1140px) {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  
  @media only screen and (min-width: $breakpoint-tablet) {
    max-width: 540px;
  }
  
  @media only screen and (min-width: $breakpoint-desktop) {
    max-width: 720px;
  }
  
  @media only screen and (min-width: $breakpoint-large-desktop) {
    max-width: $max-width;
  }
}

// Mixin para flexbox - dirección en fila
@mixin flex-row {
  display: flex;
  flex-direction: row;
}

// Mixin para flexbox - dirección en columna
@mixin flex-column {
  display: flex;
  flex-direction: column;
}

// Mixin para centrar elementos con flexbox
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Mixin para espacio entre elementos
@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// Mixin para flex con wrap
@mixin flex-wrap {
  display: flex;
  flex-wrap: wrap;
}

// Mixin para flex con gap responsivo
@mixin flex-gap($gap-mobile, $gap-desktop: $gap-mobile) {
  display: flex;
  flex-wrap: wrap;
  gap: $gap-mobile;
  
  @include desktop {
    gap: $gap-desktop;
  }
}

// Mixin para grid básico
@mixin grid($columns: 1, $gap: 20px) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}

// Mixin para grid responsivo
@mixin grid-responsive($mobile-columns: 1, $tablet-columns: 2, $desktop-columns: 3, $gap: 20px) {
  display: grid;
  grid-template-columns: repeat($mobile-columns, 1fr);
  gap: $gap;
  
  @include tablet {
    grid-template-columns: repeat($tablet-columns, 1fr);
  }
  
  @include desktop {
    grid-template-columns: repeat($desktop-columns, 1fr);
  }
}

// Mixin para typography responsiva
@mixin font-size-responsive($mobile-size, $tablet-size: $mobile-size, $desktop-size: $tablet-size) {
  font-size: $mobile-size;
  
  @include tablet {
    font-size: $tablet-size;
  }
  
  @include desktop {
    font-size: $desktop-size;
  }
}

// Mixin para line-height responsivo
@mixin line-height-responsive($mobile-height, $desktop-height: $mobile-height) {
  line-height: $mobile-height;
  
  @include desktop {
    line-height: $desktop-height;
  }
}

// Mixin para padding responsivo
@mixin padding-responsive($mobile-padding, $desktop-padding: $mobile-padding) {
  padding: $mobile-padding;
  
  @include desktop {
    padding: $desktop-padding;
  }
}

// Mixin para margin responsivo
@mixin margin-responsive($mobile-margin, $desktop-margin: $mobile-margin) {
  margin: $mobile-margin;
  
  @include desktop {
    margin: $desktop-margin;
  }
}

// Mixin para ocultar elementos en móvil
@mixin hide-on-mobile {
  @include mobile {
    display: none !important;
  }
}

// Mixin para ocultar elementos en desktop
@mixin hide-on-desktop {
  @include desktop {
    display: none !important;
  }
}

// Mixin para mostrar solo en móvil
@mixin show-on-mobile {
  display: none !important;
  
  @include mobile {
    display: block !important;
  }
}

// Mixin para mostrar solo en desktop
@mixin show-on-desktop {
  display: none !important;
  
  @include desktop {
    display: block !important;
  }
}

// Mixin para transición suave
@mixin smooth-transition($property: all, $duration: 0.3s) {
  transition: $property $duration ease-in-out;
}

// Mixin para card básico
@mixin card-base {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  
  @include smooth-transition(box-shadow);
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
}

// Mixin para botón responsivo
@mixin button-responsive($padding-y: 12px, $padding-x: 24px, $font-size: 16px) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $padding-y $padding-x;
  font-size: $font-size;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  
  @include smooth-transition(background-color, transform);
  
  &:active {
    transform: scale(0.98);
  }
  
  @include mobile {
    padding: ($padding-y * 0.875) ($padding-x * 0.75);
    font-size: ($font-size * 0.875);
  }
}

// Mixin para imagen responsiva
@mixin responsive-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

// Mixin para overlay oscuro
@mixin dark-overlay {
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }
}

// Mixin para texto truncado con ellipsis
@mixin text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// Mixin para texto multilínea truncada
@mixin line-clamp($lines: 3) {
  display: -webkit-box;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

// === ARCHIVO: src/app/shared/styles/_responsive.scss ===
// Estilos responsivos para diferentes tamaños de pantalla
// Proporciona clases utilitarias y estilos base para responsive

// Importar variables y mixins
@import 'variables';
@import 'mixins';

// ===========================================
// CLASES UTILITARIAS DE VISIBILIDAD
// ===========================================

// Ocultar en móviles
.hide-mobile {
  @include hide-on-mobile;
}

// Ocultar en desktop
.hide-desktop {
  @include hide-on-desktop;
}

// Mostrar solo en móviles
.show-mobile {
  @include show-on-mobile;
}

// Mostrar solo en desktop
.show-desktop {
  @include show-on-desktop;
}

// ===========================================
// CLASES DE CONTAINER
// ===========================================

.container-fluid {
  @include container-fluid;
}

.container {
  @include container-responsive;
}

.container-sm {
  @include container-responsive(960px);
}

.container-lg {
  @include container-responsive(1400px);
}

// ===========================================
// CLASES DE FLEXBOX
// ===========================================

.flex {
  display: flex;
}

.flex-row {
  @include flex-row;
}

.flex-column {
  @include flex-column;
}

.flex-center {
  @include flex-center;
}

.flex-between {
  @include flex-between;
}

.flex-wrap {
  @include flex-wrap;
}

.flex-start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.flex-end {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

// Gap utilities
.gap-1 { gap: 8px; }
.gap-2 { gap: 16px; }
.gap-3 { gap: 24px; }
.gap-4 { gap: 32px; }

// ===========================================
// CLASES DE GRID
// ===========================================

.grid {
  display: grid;
}

.grid-cols-1 {
  @include grid(1);
}

.grid-cols-2 {
  @include grid-responsive(1, 2, 2);
}

.grid-cols-3 {
  @include grid-responsive(1, 2, 3);
}

.grid-cols-4 {
  @include grid-responsive(1, 2, 4);
}

// ===========================================
// ESTILOS DE TIPOGRAFÍA RESPONSIVA
// ===========================================

.text-responsive {
  @include font-size-responsive(16px, 18px, 20px);
}

.heading-1 {
  @include font-size-responsive(28px, 32px, 40px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
}

.heading-2 {
  @include font-size-responsive(24px, 28px, 32px);
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 12px;
}

.heading-3 {
  @include font-size-responsive(20px, 22px, 24px);
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 8px;
}

.text-small {
  @include font-size-responsive(12px, 13px, 14px);
}

.text-body {
  @include font-size-responsive(14px, 15px, 16px);
  line-height: 1.6;
}

// ===========================================
// ESTILOS DE SPACING RESPONSIVO
// ===========================================

.section {
  @include padding-responsive(40px 16px, 60px 24px);
}

.section-small {
  @include padding-responsive(24px 16px, 32px 24px);
}

.section-large {
  @include padding-responsive(60px 16px, 100px 24px);
}

.mb-1 { margin-bottom: 8px; }
.mb-2 { margin-bottom: 16px; }
.mb-3 { margin-bottom: 24px; }
.mb-4 { margin-bottom: 32px; }
.mb-5 { margin-bottom: 40px; }

.mt-1 { margin-top: 8px; }
.mt-2 { margin-top: 16px; }
.mt-3 { margin-top: 24px; }
.mt-4 { margin-top: 32px; }

.p-1 { padding: 8px; }
.p-2 { padding: 16px; }
.p-3 { padding: 24px; }
.p-4 { padding: 32px; }

// ===========================================
// ESTILOS DE COMPONENTES RESPONSIVOS
// ===========================================

// Card responsivo
.card {
  @include card-base;
  
  @include mobile {
    padding: 16px;
  }
}

.card-image {
  @include responsive-image;
  border-radius: 8px 8px 0 0;
}

.card-content {
  padding: 16px;
  
  @include desktop {
    padding: 20px;
  }
}

// Button responsivo
.btn {
  @include button-responsive;
  
  &-primary {
    background-color: $primary-color;
    color: #ffffff;
    
    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
  
  &-secondary {
    background-color: $secondary-color;
    color: #ffffff;
    
    &:hover {
      background-color: darken($secondary-color, 10%);
    }
  }
  
  &-outline {
    background-color: transparent;
    border: 2px solid $primary-color;
    color: $primary-color;
    
    &:hover {
      background-color: $primary-color;
      color: #ffffff;
    }
  }
}

// ===========================================
// ESTILOS DE NAVEGACIÓN RESPONSIVA
// ===========================================

.navbar {
  @include flex-between;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @include desktop {
    padding: 16px 32px;
  }
}

.navbar-brand {
  font-size: 20px;
  font-weight: 700;
  color: $primary-color;
  text-decoration: none;
  
  @include desktop {
    font-size: 24px;
  }
}

.navbar-menu {
  @include flex-row;
  gap: 24px;
  
  @include mobile {
    display: none;
  }
}

.navbar-toggle {
  display: none;
  
  @include mobile {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
  }
}

// ===========================================
// ESTILOS DE FOOTER RESPONSIVO
// ===========================================

.footer {
  @include flex-column;
  @include flex-center;
  padding: 32px 16px;
  background-color: $dark-bg;
  color: #ffffff;
  text-align: center;
  
  @include desktop {
    padding: 48px 32px;
    @include flex-between;
    text-align: left;
  }
}

.footer-links {
  @include flex-row;
  gap: 16px;
  margin-top: 16px;
  
  @include desktop {
    margin-top: 0;
  }
  
  a {
    color: #ffffff;
    text-decoration: none;
    @include smooth-transition(color);
    
    &:hover {
      color: $primary-color;
    }
  }
}

// ===========================================
// ESTILOS DE IMÁGENES RESPONSIVAS
// ===========================================

.img-responsive {
  @include responsive-image;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-contain {
  width: 100%;
  height: auto;
  object-fit: contain;
}

// ===========================================
// ESTILOS DE UTILIDADES RESPONSIVAS
// ===========================================

.text-center {
  text-align: center;
  
  @include desktop {
    text-align: left;
  }
}

.text-center-mobile {
  text-align: center;
}

.text-center-desktop {
  @include mobile {
    text-align: center;
  }
  
  @include desktop {
    text-align: left;
  }
}

.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

// ===========================================
// MEDIA QUERIES PERSONALIZADAS
// ===========================================

// Estilos específicos para very small screens
@media only screen and (max-width: 400px) {
  .hide-xs {
    display: none !important;
  }
  
  .container {
    padding-left: 12px;
    padding-right: 12px;
  }
}

// Estilos para pantallas muy grandes
@media only screen and (min-width: 1600px) {
  .container {
    max-width: 1500px;
  }
  
  .grid-cols-4 {
    grid-template-columns: repeat(5, 1fr);
  }
}

// ===========================================
// PREFERENCIA DE MOVIMIENTO REDUCIDO
// ===========================================

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
