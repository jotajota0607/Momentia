/**
 * navigation.js - Módulo de Navegación e Interactividad
 * Gestiona el menú móvil responsive, accesibilidad ARIA y efectos de scroll.
 */

export function initNavigation() {
  const header = document.querySelector('header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  if (!navToggle || !navLinks) return;

  // Función para abrir/cerrar menú móvil
  function toggleMenu(forceState = null) {
    const isCurrentlyOpen = navToggle.getAttribute('aria-expanded') === 'true';
    const shouldOpen = forceState !== null ? forceState : !isCurrentlyOpen;

    navToggle.setAttribute('aria-expanded', String(shouldOpen));
    navLinks.classList.toggle('is-open', shouldOpen);

    // Evitar scroll en el cuerpo cuando el menú móvil está desplegado
    if (window.innerWidth <= 860) {
      document.body.style.overflow = shouldOpen ? 'hidden' : '';
    }
  }

  // Evento clic en botón hamburguesa
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Cerrar menú al hacer clic en cualquier enlace de navegación
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Cerrar menú al presionar la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
      navToggle.focus();
    }
  });

  // Cerrar menú al hacer clic fuera del header
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && navToggle.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
    }
  });

  // Efecto de elevación/sombra en el header al hacer scroll
  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Chequeo inicial

  // Seguimiento de sección activa mediante IntersectionObserver
  const sections = document.querySelectorAll('section[id], header[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }
}
