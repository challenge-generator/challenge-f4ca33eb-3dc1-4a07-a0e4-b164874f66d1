# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de maquetación responsive en una página web**.

| | |
|---|---|
| Tema | Técnicas de maquetación responsive en CSS |
| Nivel | trainee-l1 |
| Chapter | Frontend |
| Especialidad | Angular |
| Stack | TypeScript / Angular 20 |
| Patron arquitectonico | patrón contenedor/presentacional con componentes reutilizables |
| Tiempo estimado | 4 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, angular.json y tsconfig.json en la raiz`
- `src/main.ts con bootstrapApplication`
- `src/app/app.config.ts con los providers`
- `src/app/core con servicios y modelos`
- `src/app/features con componentes contenedores`
- `src/app/shared con componentes presentacionales`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET y el proyecto no instala. Usa rango con caret sobre una version que exista.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.
- Angular necesita `angular.json` y `tsconfig.json` ademas del `package.json`, o `ng build` no corre.

Dependencias:

- @angular/core 20.2.0
- @angular/common 20.2.0
- @angular/material 20.2.0
- @angular/cdk 20.2.0
- @angular/router 20.2.0
- @angular/platform-browser 20.2.0
- @angular/platform-browser-dynamic 20.2.0
- @angular/forms 20.2.0
- rxjs 7.8.0
- typescript 5.4.2
- zone.js 0.14.4

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Definición de la estructura de la página**: Estructura básica de la página con sistema de rejilla aplicado.
- **Fase 2 — Aplicación de propiedades CSS para responsive**: Página con propiedades CSS aplicadas para mejorar la adaptabilidad.
- **Fase 3 — Pruebas y ajustes finales**: Página completamente responsive y lista para producción.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Archivos que la arquitectura declara (2 de 22)

La propuesta arquitectonica del reto los lista y no llegaron al repo. Crealos con implementacion real, respetando la capa en la que viven:

- [ ] `src/app/app.component.scss`
- [ ] `src/app/features/home/home.component.ts`

### 2. Referencias colgando (1)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `src/app/shared/components/footer/footer.component.ts` — `FooterSection.push`
      Se invoca `push` sobre `FooterSection`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.

### Presentes (20)

- `package.json`
- `angular.json`
- `tsconfig.json`
- `src/main.ts`
- `src/index.html`
- `src/app/app.config.ts`
- `src/app/app.routes.ts`
- `src/app/app.component.ts`
- `src/app/app.component.html`
- `src/app/features/home/home.component.html`
- `src/app/features/home/home.component.scss`
- `src/app/shared/components/header/header.component.ts`
- `src/app/shared/components/header/header.component.html`
- `src/app/shared/components/header/header.component.scss`
- `src/app/shared/components/footer/footer.component.ts`
- `src/app/shared/components/footer/footer.component.html`
- `src/app/shared/components/footer/footer.component.scss`
- `src/app/shared/styles/_variables.scss`
- `src/app/shared/styles/_mixins.scss`
- `src/app/shared/styles/_responsive.scss`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/app/core/models`
- `src/app/core/services`
- `src/app/features/home`
- `src/app/shared/components`
- `src/app/shared/styles`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **patrón contenedor/presentacional con componentes reutilizables**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Trainee
- Brecha que el reto ataca: Aplica técnicas de maquetación responsive: al menos un sistema de rejilla (Bootstrap, Material) y propiedades CSS orientadas a responsive (Flexbox, Grid).
- Mision: Candidato con experiencia en Backend (Node, Advanced) que está iniciando su ruta en Frontend (Angular, Trainee).

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
