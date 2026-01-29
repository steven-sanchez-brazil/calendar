# Calendario Colombiano - Astro

Calendario interactivo con todos los festivos oficiales de Colombia, incluyendo la aplicación de la Ley Emiliani y fechas especiales de celebración. Implementado con Astro y Tailwind CSS.

## Características

- **Festivos Oficiales**: Incluye todos los días festivos según la legislación colombiana
- **Ley Emiliani**: Aplicación automática del traslado de festivos al lunes siguiente
- **Festivos Religiosos Móviles**: Cálculo dinámico basado en Semana Santa
- **Maximizador de Vacaciones PRO**: Herramienta para optimizar días de descanso
- **Modo Oscuro**: Interfaz adaptable con tema claro y oscuro
- **Búsqueda**: Encuentra rápidamente cualquier festivo
- **Vista Anual y Mensual**: Navegación intuitiva entre años y meses

## Tecnologías

- **Astro**: Framework web moderno para sitios rápidos
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS**: Framework de utilidades CSS
- **Arquitectura de Componentes**: Código modular y reutilizable

## Estructura del Proyecto

```
astro-calendar/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── SearchOverlay.astro
│   │   ├── VacationOverlay.astro
│   │   └── FloatingNav.astro
│   ├── layouts/          # Layouts de página
│   │   └── Layout.astro
│   ├── lib/              # Lógica de negocio
│   │   ├── holidays.ts   # Cálculo de festivos
│   │   └── vacations.ts  # Maximizador de vacaciones
│   ├── pages/            # Páginas del sitio
│   │   └── index.astro
│   └── styles/           # Estilos globales
│       └── global.css
└── public/               # Archivos estáticos
```

## Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Desarrollo

El servidor de desarrollo se ejecuta en `http://localhost:4321`

## Despliegue

El proyecto está listo para ser desplegado en cualquier plataforma que soporte sitios estáticos:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

Para construir el sitio para producción:

```bash
npm run build
```

Los archivos generados estarán en el directorio `dist/`
