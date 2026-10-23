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