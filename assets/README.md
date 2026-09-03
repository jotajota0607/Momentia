# Recursos Multimedia (Assets)

Estructura para el manejo de assets optimizados:

- `images/`:
  - Usar formatos modernos (`.webp`, `.avif`). Mantener `.jpg` o `.png` solo como respaldo si es necesario.
  - Asegurar compresión adecuada antes de desplegar.
  - Nombrado en kebab-case descriptivo para SEO (ej. `logo-momentia.webp`).
- `icons/`:
  - Iconos en formato SVG vectorial optimizados (mediante SVGO o herramientas similares).
- `fonts/`:
  - Tipografías en formato `.woff2` exclusivamente para máxima compresión y compatibilidad moderna.
  - Configurar `font-display: swap` en CSS para evitar Flash of Invisible Text (FOIT).
