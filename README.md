# 🧠 DISC Test App - Conócete Mejor

> Una aplicación web open source, **100% anónima y gratuita**, para descubrir tu perfil de comportamiento DISC. Construida con una arquitectura moderna React + TypeScript para ofrecer una experiencia rápida, clara y sin fricciones.

<div align="center">

![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-Tipado-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Design-06B6D4?logo=tailwind-css&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-Gráficos-FF6384?logo=chart.js&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-Rutas-CA4245?logo=react-router&logoColor=white)

</div>

---

## 🌟 Características Principales

El DISC Test App no es un simple cuestionario: es una herramienta de **autoconocimiento de grado profesional** que incorpora:

- 📋 **Test DISC Completo (28 Bloques)**: Implementación fiel del banco de preguntas original, con selección de los adjetivos más y menos representativos por bloque.
- 📊 **Doble Perfil — Natural y Adaptado**: Cálculo preciso y simultáneo de ambos perfiles DISC, revelando tanto el comportamiento innato como el situacional del usuario.
- 📈 **Visualización Profesional**: Gráficos de barras interactivos (vía **Chart.js**) que contrastan el Perfil Natural vs. el Adaptado de forma inmediata y comprensible.
- 📝 **Informe Interpretativo Completo**: Secciones estructuradas de análisis — Estilo Emocional, Meta Principal, Fortalezas, Comportamiento Bajo Presión y más — con texto generado dinámicamente según el perfil dominante.
- 🔒 **Privacidad Total Garantizada**: Arquitectura sin backend. Ningún dato sale del navegador. Los resultados se gestionan en memoria y `localStorage` únicamente durante la sesión activa.
- 📱 **Diseño Responsive y Accesible**: Interfaz moderna que funciona de la misma forma en escritorio, tablet y móvil.

---

## 🛠️ Stack Tecnológico

La aplicación está construida sobre una base moderna pensada para velocidad, escalabilidad y mantenibilidad:

- **Frontend**: **React 18** con componentes funcionales y Hooks.
- **Lenguaje**: **TypeScript** para tipado estático, seguridad de datos y autocompletado.
- **Build Tool**: **Vite** para arranques instantáneos y HMR en desarrollo.
- **Estilos**: **Tailwind CSS** con una configuración personalizada para coherencia visual.
- **Rutas**: **React Router v6** con enrutamiento declarativo basado en `createBrowserRouter`.
- **Gráficos**: **Chart.js** para visualización de datos del perfil DISC.
- **Datos**: Archivos **JSON** estáticos para el banco de preguntas — sin dependencia de backend.
- **Despliegue**: Optimizado para **Vercel / Netlify** con configuración de SPA lista para producción.

---

## 🚀 Instalación y Uso

### Prerrequisitos

- **Node.js** (v18 o superior)
- **pnpm** (recomendado) o **npm**

### Pasos para el Despliegue Local

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/AlejandroMaturana/testDISC-R.git
   ```
2. **Instala las dependencias**:
   ```bash
   pnpm install
   ```
3. **Inicia el servidor de desarrollo**:
   ```bash
   pnpm run dev
   ```
4. **Abre en el navegador**:
   La app estará disponible en `http://localhost:5173` por defecto.

---

## 📂 Estructura del Proyecto

```text
testDISC-R/
│
├── index.html              # Punto de entrada / Shell de la SPA
├── src/
│   ├── main.tsx            # Bootstrap de React y montaje del Router
│   ├── App.tsx             # Componente raíz de la aplicación
│   ├── router.tsx          # Definición de rutas con React Router v6
│   ├── index.css           # Estilos globales y tokens del sistema de diseño
│   ├── pages/
│   │   ├── Home.tsx        # Landing page con introducción al test
│   │   ├── Test.tsx        # Motor del cuestionario DISC (28 bloques)
│   │   └── Results.tsx     # Dashboard de resultados: gráficos e informe
│   ├── components/
│   │   └── ProfileDetail.tsx  # Componente de informe interpretativo por perfil
│   ├── lib/
│   │   └── scoring.ts      # Lógica de cálculo del Perfil Natural y Adaptado
│   ├── data/               # Banco de preguntas DISC en JSON
│   └── utils/              # Utilidades de normalización y helpers
├── vite.config.ts          # Configuración de Vite y plugins
├── tailwind.config.js      # Customización del sistema de diseño Tailwind
├── tsconfig.json           # Configuración del compilador TypeScript
└── README.md               # Este archivo
```

---

## 👤 Autor

**Alejandro Maturana (ManuGL)** – _Industrial Engineer & Full Stack Developer_

- **GitHub**: [Perfil Desarrollador](https://github.com/AlejandroMaturana)
- **LinkedIn**: [Perfil Profesional](https://www.linkedin.com/in/manugl86)
- **Focus**: Soluciones digitales que combinan lógica industrial con desarrollo web moderno.

---

> 📡 **Estado del Proyecto**: Activo. Si esta herramienta te resultó útil o simplemente te ayudó a conocerte mejor, ¡no olvides darle una estrella ⭐ al repositorio!
