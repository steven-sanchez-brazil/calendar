# 🚀 Inicio Rápido - Calendario Colombiano Astro

## ⚡ Comandos Esenciales

```bash
# 1. Navegar al proyecto
cd astro-calendar

# 2. Instalar dependencias (si no está hecho)
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# → Abre http://localhost:4321

# 4. Construir para producción
npm run build

# 5. Previsualizar build de producción
npm run preview
```

## 📁 Archivos Importantes

| Archivo | Descripción |
|---------|-------------|
| `src/pages/index.astro` | Página principal con toda la lógica |
| `src/lib/holidays.ts` | Cálculo de festivos colombianos |
| `src/lib/vacations.ts` | Algoritmo de optimización de vacaciones |
| `src/styles/global.css` | Estilos globales y Tailwind |
| `astro.config.mjs` | Configuración de Astro |

## 🎯 Funcionalidades Principales

### 1. Vista Anual
- Grid de 12 meses
- Click en cualquier mes para ver detalle
- Selector de año en el header

### 2. Vista Mensual
- Calendario detallado del mes
- Lista de festivos oficiales
- Botón de regreso al año

### 3. Maximizador de Vacaciones
- Click en icono de maleta (header)
- Ingresa días disponibles
- Ve las mejores opciones automáticas
- O selecciona manualmente en el calendario

### 4. Búsqueda
- Click en icono de lupa (header)
- Escribe el nombre del festivo
- Click en resultado para ir al mes

### 5. Modo Oscuro
- Click en icono de luna/sol (header)
- Se guarda automáticamente

## 🔧 Modificar el Código

### Agregar un nuevo festivo fijo
```typescript
// src/lib/holidays.ts
add(new Date(year, mes-1, dia), "Nombre del Festivo");
```

### Cambiar colores
```css
/* src/styles/global.css */
:root {
  --ios-red: #ff3b30;    /* Cambiar aquí */
  --ios-green: #34c759;  /* Cambiar aquí */
}
```

### Agregar un nuevo componente
```bash
# Crear archivo
touch src/components/MiComponente.astro

# Importar en index.astro
import MiComponente from '../components/MiComponente.astro';
```

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Cambios no se reflejan
- Guarda el archivo (Ctrl+S)
- El HMR debería actualizar automáticamente
- Si no, reinicia el servidor (Ctrl+C, npm run dev)

### Error de TypeScript
```bash
# Regenerar tipos
npm run dev
# Astro regenera los tipos automáticamente
```

## 📚 Recursos

- **Documentación de Astro**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

## 🎨 Estructura de Componentes

```
index.astro (Página Principal)
├── Header.astro (Navegación)
├── SearchOverlay.astro (Búsqueda)
├── VacationOverlay.astro (Vacaciones)
└── FloatingNav.astro (Botones flotantes)
```

## 💡 Tips de Desarrollo

1. **Hot Reload**: Los cambios se reflejan automáticamente
2. **TypeScript**: Usa autocompletado (Ctrl+Space)
3. **Componentes**: Reutiliza código creando componentes
4. **Estilos**: Usa clases de Tailwind cuando sea posible
5. **Lógica**: Separa la lógica de negocio en `src/lib/`

## 🚀 Deploy Rápido

### Netlify
```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

### Vercel
```bash
npm run build
npx vercel --prod
```

## ✅ Checklist de Desarrollo

- [ ] Servidor de desarrollo corriendo
- [ ] Cambios guardados
- [ ] Sin errores en consola
- [ ] Probado en navegador
- [ ] Probado en modo oscuro
- [ ] Probado en mobile (DevTools)

## 📊 Performance

- **Build size**: ~68KB total
- **HTML**: ~5KB
- **JavaScript**: ~16KB (gzipped)
- **CSS**: Inline + optimizado

## 🎯 Próximos Pasos

1. ✅ Proyecto funcionando
2. 🔄 Hacer cambios según necesites
3. 🧪 Probar todas las funcionalidades
4. 🚀 Deploy a producción
5. 📈 Monitorear performance

## 💬 Soporte

Si tienes dudas:
1. Revisa la documentación en los archivos .md
2. Consulta la documentación de Astro
3. Revisa los comentarios en el código

---

**¡Listo para desarrollar! 🎉**

El proyecto está completamente funcional y listo para usar.
