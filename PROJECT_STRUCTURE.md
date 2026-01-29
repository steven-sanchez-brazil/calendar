# Estructura del Proyecto - Calendario Colombiano Astro

```
astro-calendar/
│
├── 📄 Documentación
│   ├── README.md           # Guía principal del proyecto
│   ├── MIGRATION.md        # Detalles de la migración desde HTML
│   ├── SUMMARY.md          # Resumen de implementación
│   └── DEPLOY.md           # Guía de despliegue
│
├── ⚙️ Configuración
│   ├── astro.config.mjs    # Configuración de Astro
│   ├── tsconfig.json       # Configuración de TypeScript
│   ├── package.json        # Dependencias y scripts
│   └── .gitignore          # Archivos ignorados por Git
│
├── 📁 public/              # Archivos estáticos (copiados tal cual)
│   ├── CNAME               # Configuración de dominio
│   ├── sitemap.xml         # Mapa del sitio
│   ├── favicon.ico         # Icono del sitio
│   └── favicon.svg         # Icono SVG
│
└── 📁 src/                 # Código fuente
    │
    ├── 🧩 components/      # Componentes reutilizables
    │   ├── Header.astro           # Navegación superior
    │   ├── SearchOverlay.astro    # Modal de búsqueda
    │   ├── VacationOverlay.astro  # Modal de vacaciones
    │   └── FloatingNav.astro      # Navegación flotante
    │
    ├── 📐 layouts/         # Layouts de página
    │   └── Layout.astro           # Layout principal con HTML base
    │
    ├── 📚 lib/             # Lógica de negocio (TypeScript)
    │   ├── holidays.ts            # Cálculo de festivos colombianos
    │   │   ├── getEaster()        # Algoritmo de Semana Santa
    │   │   ├── getNextMonday()    # Aplicación Ley Emiliani
    │   │   └── getHolidays()      # Generador de festivos
    │   │
    │   └── vacations.ts           # Maximizador de vacaciones
    │       └── calculateTopVacations() # Algoritmo de optimización
    │
    ├── 📄 pages/           # Páginas del sitio
    │   └── index.astro            # Página principal
    │       ├── Importa componentes
    │       ├── Lógica interactiva (script)
    │       └── Event listeners
    │
    └── 🎨 styles/          # Estilos globales
        └── global.css             # Tailwind + CSS personalizado
            ├── Variables CSS (colores iOS)
            ├── Animaciones
            ├── Grid layouts
            └── Estilos de componentes
```

## 📊 Estadísticas del Proyecto

### Archivos por Tipo
- **Componentes Astro**: 5 archivos
- **Módulos TypeScript**: 2 archivos
- **Estilos CSS**: 1 archivo
- **Documentación**: 4 archivos
- **Configuración**: 3 archivos
- **Estáticos**: 4 archivos

### Líneas de Código (aproximado)
- **TypeScript**: ~150 líneas
- **Astro Components**: ~150 líneas
- **CSS**: ~300 líneas
- **JavaScript (client)**: ~400 líneas
- **Total**: ~1000 líneas

## 🔄 Flujo de Datos

```
Usuario
  ↓
index.astro (Página Principal)
  ↓
├─→ Header.astro (Navegación)
├─→ SearchOverlay.astro (Búsqueda)
├─→ VacationOverlay.astro (Vacaciones)
├─→ FloatingNav.astro (Navegación flotante)
  ↓
Script Interactivo (Client-side)
  ↓
├─→ holidays.ts (Cálculo de festivos)
└─→ vacations.ts (Optimización)
  ↓
Renderizado Dinámico (DOM)
```

## 🎯 Componentes y Responsabilidades

### Header.astro
- Selector de año
- Botón de búsqueda
- Botón de modo oscuro
- Botón de vacaciones

### SearchOverlay.astro
- Input de búsqueda
- Contenedor de resultados
- Botón de cerrar

### VacationOverlay.astro
- Input de días de vacaciones
- Botón de modo manual
- Contenedor de resultados
- Botón de cerrar

### FloatingNav.astro
- Botón "Hoy"
- Botón "Limpiar"
- Instrucción de modo manual

### Layout.astro
- Estructura HTML base
- Meta tags SEO
- Importación de fuentes
- Importación de estilos globales

### index.astro
- Orquestación de componentes
- Lógica de vistas (año/mes/periodo)
- Event listeners
- State management
- Renderizado dinámico

### holidays.ts
- Algoritmo de Pascua (Gauss)
- Cálculo de Ley Emiliani
- Generación de festivos fijos
- Generación de festivos móviles

### vacations.ts
- Algoritmo de optimización
- Cálculo de eficiencia
- Ordenamiento de resultados
- Deduplicación

## 🚀 Build Process

```
npm run build
  ↓
Astro Build
  ↓
├─→ Procesa componentes .astro
├─→ Compila TypeScript
├─→ Procesa CSS (Tailwind)
├─→ Optimiza JavaScript
├─→ Genera HTML estático
└─→ Copia archivos públicos
  ↓
dist/
  ├── index.html (HTML optimizado)
  ├── _astro/ (JS y CSS optimizados)
  └── archivos públicos
```

## 📦 Dependencias Principales

```json
{
  "astro": "^5.17.1",
  "@tailwindcss/vite": "^4.1.18",
  "tailwindcss": "^4.1.18",
  "typescript": "^5.7.3"
}
```

## 🎨 Paleta de Colores (iOS Style)

```css
--ios-red: #ff3b30      /* Festivos, acciones principales */
--ios-blue: #007aff     /* Fechas especiales */
--ios-green: #34c759    /* Vacaciones, éxito */
--ios-orange: #ff9500   /* Sábados */
```

## ✨ Características Técnicas

- ✅ **SSG (Static Site Generation)**: HTML pre-renderizado
- ✅ **TypeScript**: Tipado estático completo
- ✅ **Component-based**: Arquitectura modular
- ✅ **Responsive**: Mobile-first design
- ✅ **Dark Mode**: Con persistencia
- ✅ **Optimized**: Build minificado y tree-shaken
- ✅ **SEO-friendly**: Meta tags y estructura semántica
- ✅ **Accessible**: Etiquetas ARIA y navegación por teclado

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo (localhost:4321)
npm run build    # Build de producción
npm run preview  # Preview del build
```

## 📈 Performance Esperado

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Total Bundle Size**: < 50KB (gzipped)
- **Lighthouse Score**: > 90
