# Guía de Despliegue - Calendario Colombiano Astro

## 🚀 Opciones de Despliegue

### 1. Netlify (Recomendado)

#### Opción A: Deploy desde Git
```bash
# 1. Subir código a GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin <tu-repo>
git push -u origin main

# 2. En Netlify:
# - Conectar repositorio
# - Build command: npm run build
# - Publish directory: dist
```

#### Opción B: Deploy directo
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### 2. Vercel

```bash
npm install -g vercel
npm run build
vercel --prod
```

O conectar desde el dashboard de Vercel:
- Build Command: `npm run build`
- Output Directory: `dist`

### 3. GitHub Pages

```bash
# 1. Instalar adaptador
npm install @astrojs/github-pages

# 2. Actualizar astro.config.mjs
# site: 'https://<username>.github.io'
# base: '/<repo-name>'

# 3. Build y deploy
npm run build
# Subir contenido de dist/ a rama gh-pages
```

### 4. AWS S3 + CloudFront

```bash
# 1. Build
npm run build

# 2. Subir a S3
aws s3 sync dist/ s3://tu-bucket --delete

# 3. Invalidar CloudFront
aws cloudfront create-invalidation \
  --distribution-id <ID> \
  --paths "/*"
```

### 5. Cloudflare Pages

```bash
# Desde dashboard de Cloudflare Pages:
# - Build command: npm run build
# - Build output directory: dist
# - Node version: 18+
```

## 📋 Checklist Pre-Deploy

- [ ] `npm run build` ejecuta sin errores
- [ ] Verificar que `dist/` contiene todos los archivos
- [ ] Probar con `npm run preview`
- [ ] Verificar meta tags SEO
- [ ] Comprobar que CNAME está en public/
- [ ] Verificar sitemap.xml
- [ ] Probar modo oscuro
- [ ] Probar en mobile

## 🔧 Configuración de Producción

### Variables de Entorno (si necesarias)
```bash
# .env.production
PUBLIC_SITE_URL=https://tu-dominio.com
```

### Optimizaciones Adicionales

#### 1. Compresión
La mayoría de plataformas habilitan gzip/brotli automáticamente.

#### 2. Cache Headers
```
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

#### 3. Redirects
```
# netlify.toml o vercel.json
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🌐 Dominio Personalizado

### Netlify/Vercel
1. Agregar dominio en dashboard
2. Configurar DNS:
   ```
   CNAME www tu-sitio.netlify.app
   A @ 75.2.60.5 (Netlify) o Vercel IP
   ```

### Cloudflare
1. Agregar dominio
2. DNS se configura automáticamente

## 📊 Monitoreo Post-Deploy

### Verificaciones
- [ ] Sitio carga correctamente
- [ ] Todas las funcionalidades funcionan
- [ ] Modo oscuro persiste
- [ ] Búsqueda funciona
- [ ] Maximizador de vacaciones funciona
- [ ] Responsive en todos los dispositivos
- [ ] Performance (Lighthouse > 90)

### Herramientas Recomendadas
- Google Lighthouse
- WebPageTest
- GTmetrix
- Google Search Console

## 🔄 CI/CD Automático

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🐛 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Error: "Out of memory"
```bash
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

### Rutas no funcionan
Verificar que el servidor está configurado para SPA:
- Todas las rutas deben servir `index.html`

## 📈 Performance Tips

1. **Lazy Loading**: Ya implementado en Astro
2. **Image Optimization**: Considerar `@astrojs/image`
3. **Font Loading**: Usar `font-display: swap`
4. **Critical CSS**: Astro lo hace automáticamente
5. **Minificación**: Habilitada por defecto

## 🎯 Resultado Esperado

- ✅ Tiempo de carga < 2s
- ✅ Lighthouse Performance > 90
- ✅ SEO Score > 95
- ✅ Accessibility > 90
- ✅ Best Practices > 90

## 📞 Soporte

Si encuentras problemas:
1. Revisar logs de build
2. Verificar versión de Node (18+)
3. Limpiar cache y reinstalar
4. Consultar docs de Astro: https://docs.astro.build
