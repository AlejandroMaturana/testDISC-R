# 🧠 **testDISC-R** — Análisis Comportamental DISC de Precisión

> Una plataforma web **100% anónima, gratuita y de código abierto** para descubrir tu perfil DISC con análisis diagnóstico avanzado. Reconocimiento de 19 perfiles (4 puros + 12 combinados 2D + 3 especializados 3D), gráficos radar interactivos y cálculo de desfase conductual.

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwind-css&logoColor=white&style=flat-square)

### [🚀 Ver Demostración en Vivo](https://testdisc-r.vercel.app/)

</div>

---

## 🎯 ¿Qué Hace Diferente a testDISC-R?

Mientras que existen otros test DISC en línea, **testDISC-R destaca por**:

### ✨ Características Clave

| Característica | Descripción |
|---|---|
| **🔍 Diagnóstico Avanzado** | 4 métricas de análisis profundo: Desfase Conductual, Autenticidad, Ratio Energético, Zona de Rendimiento. |
| **📈 19 Perfiles Detectados** | Reconoce los 4 perfiles básicos además de las 12 combinaciones 2D y las 3 especializadas 3D (DSI, ISC, DCI). |
| **🛡️ Privacidad Total** | Cero servidor. Cero analytics. Cero cookies de tracking. Todo sucede en tu navegador. |
| **⚡ Rendimiento Óptimo** | Vite + React 18 aseguran tiempos de carga < 1s y transiciones fluidas. |
| **♿ Accesibilidad** | Interfaz WCAG 2.1 AA compliant, totalmente funcional con teclado y lectores de pantalla. |

---

## 🏗️ Arquitectura Técnica

### Stack Moderno (2026)

```
Frontend:     React 18.3 → TypeScript → Vite (Build & Dev)
              ↓
UI/UX:        Tailwind CSS 3.4 + Headless Components
              ↓
Datos:        JSON estático (interpretations.json, question.json)
              ↓
Router:       React Router 7.14 (SPA navigation)
              ↓
Deployment:   Vercel / Netlify (Zero-config SPA)
```

### Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.14.0",
    "lucide-react": "^1.8.0"
  },
  "devDependencies": {
    "typescript": "^5.6.3",
    "vite": "^5.4.1",
    "tailwindcss": "^3.4.10"
  }
}
```

---

## 🚀 Instalación y Uso

### Requisitos Previos

- **Node.js 18+**
- **pnpm 10+** (recomendado) o npm 9+
- **Navegador moderno** (Chrome, Firefox, Edge, Safari)

### Pasos de Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/AlejandroMaturana/testDISC-R.git
cd testDISC-R

# 2. Instala dependencias
pnpm install

# 3. Inicia en desarrollo (HMR activo)
pnpm run dev

# 4. Abre en navegador
# http://localhost:5173

# 5. Para producción
pnpm run build
```

---

## 📁 Estructura del Proyecto

```
testDISC-R/
│
├── 📄 index.html                 # Shell SPA
├── 📄 vite.config.ts             # Configuración build + dev server
├── 📄 tsconfig.json              # Compilador TypeScript
├── 📄 tailwind.config.js         # Tokens de diseño (colores, espaciado)
│
├── src/
│   ├── 📄 main.tsx               # Bootstrap React + Router
│   ├── 📄 index.css              # Estilos globales
│   │
│   ├── 📂 pages/
│   │   ├── Home.tsx              # Landing + CTA
│   │   ├── Test.tsx              # Motor cuestionario (28 bloques)
│   │   └── Results.tsx           # Dashboard: gráficos + informe
│   │
│   ├── 📂 components/
│   │   ├── ProfileDetail.tsx      # Informe narrativo por perfil
│   │   └── DiagnosticoAvanzado.tsx # 4 cards de diagnóstico
│   │
│   ├── 📂 lib/
│   │   ├── scoring.ts            # Cálculo de perfiles (Natural + Adaptado)
│   │   ├── diagnostics.ts        # Métricas avanzadas (Desfase, Autenticidad)
│   │   └── discInterpretations.ts # Lookup de perfiles desde JSON
│   │
│   ├── 📂 data/
│   │   ├── question.json         # 28 bloques × 4 palabras = 112 preguntas
│   │   └── interpretations.json  # 19 perfiles + descripciones
│   │
│   └── router.tsx                # Declaración de rutas
│
├── public/                        # Assets estáticos
│
└── dist/                          # Output build (gitignored)
```

---

## 🔒 Privacidad y Seguridad

### Garantías

✅ **Cero Servidores**: La app es una SPA static. No hay backend.  
✅ **Cero Datos Enviados**: Todo sucede en `localStorage` del navegador. La sesión se borra al cerrar.  
✅ **Cero Tracking**: No hay Google Analytics, Mixpanel, etc.  
✅ **Código Abierto**: Auditabilidad total. Revisa `/src` para verificar.  
✅ **GDPR Compliant**: No hay formularios intruso, no hay recolección de PII.

### Almacenamiento Local

```javascript
// Almacenado en localStorage (borrable en cualquier momento)
localStorage['discAnswers']         // Array de 28 respuestas
```

---

## 👨‍💻 Autor

**Alejandro Maturana** — _Ingeniero Industrial & Full Stack Developer_

- 🐙 **GitHub**: [@AlejandroMaturana](https://github.com/AlejandroMaturana)
- 💼 **LinkedIn**: [manugl86](https://www.linkedin.com/in/manugl86)

---

<div align="center">

### 💡 Si testDISC-R te ayudó a conocerte mejor...

**¡Dale una ⭐ al repositorio!** motiva a seguir mejorando.

**¿Preguntas o Feedback?** Abre una [Issue](https://github.com/AlejandroMaturana/testDISC-R/issues) o contáctame directamente.

---

**`Versión 1.0` — _Abril 2026_ — Obra de Precisión Conductual** 🎯

</div>
