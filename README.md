<div align="center">

  <img src="assets/images/logo-momentia.svg" alt="Momentia LLC Logo" width="260" />

  # Momentia LLC — Web Corporativa Oficial
  **Built to Deliver · Texas Retail & Distribution**

  <p align="center">
    Plataforma web B2B de alto rendimiento, modular y accesible para alianzas comerciales con fabricantes y distribuidores.
  </p>

  <p align="center">
    <a href="https://jotajota0607.github.io/Momentia/">
      <img src="https://img.shields.io/badge/Sitio_Web-En_Vivo-success?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Website" />
    </a>
    <img src="https://img.shields.io/badge/Versión-2.0.0-011E59?style=for-the-badge" alt="Version" />
    <img src="https://img.shields.io/badge/Licencia-Privada-F26A0C?style=for-the-badge" alt="License" />
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-Semántico-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-Modular-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Lighthouse-100%25-00C853?style=flat-square&logo=lighthouse&logoColor=white" alt="Performance" />
    <img src="https://img.shields.io/badge/WebP_%2B_SVG-Optimizado-informational?style=flat-square" alt="Assets" />
  </p>

  **[🌐 Ver Sitio Web en Producción](https://jotajota0607.github.io/Momentia/)**

</div>

---

## 📌 Visión General

**Momentia LLC** es una empresa de distribución minorista con base en **Texas, Estados Unidos**, orientada a conectar productos de alta calidad con consumidores a través de abastecimiento profesional, gestión de inventario y operaciones de retail multicanal.

Este repositorio contiene el código fuente de la página web corporativa, refactorizada y optimizada bajo una **arquitectura web moderna, modular y sin dependencias pesadas**, garantizando tiempos de carga casi instantáneos y una experiencia visual impecable en cualquier dispositivo.

---

## ⚡ Características Principales

- **Rendimiento Extremo (Web Performance)**:
  - Reducción del tamaño del HTML en un **97.2%** (de 875 KB en el monolítico original a solo 24 KB).
  - Eliminación total de imágenes incrustadas en Base64; migración a formatos modernos **WebP** y gráficos vectoriales **SVG**.
  - `preconnect` y fuentes optimizadas sin bloqueo de renderizado (*Render-Blocking Resources*).

- **Diseño 100% Responsivo y Fluido**:
  - Enfoque *Mobile-First* verificado en resoluciones móviles estándar (375px, 414px, 768px) y pantallas de escritorio 4K.
  - Flujo adaptativo para procesos de distribución: diagrama SVG continuo en escritorio y tarjetas verticales apiladas con marcadores chevron en móviles (0 scrollbars horizontales).

- **Identidad de Marca Oficial Vectorizada**:
  - Logotipos vectoriales nativos en SVG puro con escalado nítido infinito: versión azul corporativo para cabecera clara (`logo-momentia.svg`) y versión blanca en fondo transparente para el pie de página (`logo-momentia-white.svg`).
  - Favicon multirresolución transparente anti-caché (`.ico` con capas de 16, 32 y 48 px).

- **Formulario B2B de Alianzas Comerciales**:
  - Formulario nativo con validación de accesibilidad (`aria-invalid`), estructuración automática de correo y botón de respaldo para copiado al portapapeles.
  - Contacto oficial: `partnerships@momentiallc.com`.

- **SEO y Metadatos Sociales Completos**:
  - Integración de Open Graph y Twitter Cards con imagen de previsualización corporativa dedicada (`og-preview.jpg` de 1200 × 630 px) para enlaces en WhatsApp, Telegram y LinkedIn.
  - Marcado estructurado **Schema.org JSON-LD** institucional para motores de búsqueda.

---

## 📁 Estructura del Código

```text
├── assets/
│   ├── icons/            # Favicon universal multirresolución
│   └── images/           # Logotipos SVG, fotografías WebP y banner OG
├── css/
│   ├── base.css          # Reset, tipografía, variables y estilos globales
│   ├── main.css          # Punto de entrada único que importa los módulos
│   ├── layout/
│   │   ├── header.css    # Cabecera fija con efecto backdrop blur y navegación
│   │   └── footer.css    # Pie de página institucional y copyright
│   └── components/
│       ├── hero.css        # Sección principal con degradado y propuesta de valor
│       ├── intro.css       # Franja de presentación y principios de crecimiento
│       ├── about.css       # Misión, visión y pilares corporativos
│       ├── suppliers.css   # Flujo de distribución y tarjetas de servicio
│       ├── why.css         # Diferenciadores y fotografía operativa
│       ├── leadership.css  # Cita testimonial y foto institucional
│       ├── compliance.css  # Credenciales de registro y cumplimiento comercial
│       └── contact.css     # Formulario de prospección B2B y canales directos
├── js/
│   ├── main.js           # Inicialización y control principal
│   └── modules/
│       ├── navigation.js # Menú móvil hamburguesa accesible con bloqueo de scroll
│       └── form.js       # Validación, armado de correo y portapapeles
├── index.html            # Estructura semántica HTML5 principal
└── README.md             # Documentación técnica del proyecto
```

---

## 🎨 Paleta de Color Corporativa

| Muestra | Nombre | Valor HEX | Uso Principal |
| :---: | :--- | :---: | :--- |
| <img src="https://via.placeholder.com/20/011E59/011E59.png" width="20" height="20" /> | **Navy Corporativo** | `#011E59` | Color institucional primario, cabeceras, títulos y contrastes |
| <img src="https://via.placeholder.com/20/F26A0C/F26A0C.png" width="20" height="20" /> | **Naranja Acento** | `#F26A0C` | Botones de llamado a la acción (CTA), viñetas y detalles de marca |
| <img src="https://via.placeholder.com/20/FFFFFF/FFFFFF.png" width="20" height="20" /> | **Blanco Puro** | `#FFFFFF` | Fondos de lectura limpios y textos sobre fondo oscuro |
| <img src="https://via.placeholder.com/20/EEF1F6/EEF1F6.png" width="20" height="20" /> | **Gris Niebla (Fog)**| `#EEF1F6` | Fondos de secciones alternas y tarjetas informativas |
| <img src="https://via.placeholder.com/20/3B4658/3B4658.png" width="20" height="20" /> | **Pizarra (Slate)** | `#3B4658` | Tipografía principal de lectura y párrafos |
| <img src="https://via.placeholder.com/20/778498/778498.png" width="20" height="20" /> | **Pizarra Claro** | `#778498` | Subtítulos, metadatos y sobretítulos de sección |

---

## 💻 Ejecución y Desarrollo Local

Para visualizar o probar el proyecto en tu máquina local:

```bash
# Opción 1: Servidor ligero con Python
python -m http.server 3000

# Opción 2: Con Node.js (npx serve)
npx serve .

# Opción 3: Extensión "Live Server" de Visual Studio Code
# Clic derecho en index.html -> "Open with Live Server"
```

Abre en tu navegador: **`http://localhost:3000`**

---

## 🚀 Despliegue en Producción

El proyecto se despliega automáticamente en **GitHub Pages** al enviar cambios a la rama `main`:

- **URL de Producción**: [https://jotajota0607.github.io/Momentia/](https://jotajota0607.github.io/Momentia/)
- **Rama de Despliegue**: `main`

---

## 🏢 Contacto Institucional

**Momentia LLC**  
Texas, United States  
📧 Correo: [partnerships@momentiallc.com](mailto:partnerships@momentiallc.com)  
🌐 Sitio Web: [https://jotajota0607.github.io/Momentia/](https://jotajota0607.github.io/Momentia/)

---

<div align="center">
  <small>© 2026 Momentia LLC. All rights reserved. Built to Deliver.</small>
</div>
