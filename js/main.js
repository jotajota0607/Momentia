/**
 * main.js - Punto de Entrada JavaScript de Momentia LLC
 * Inicializa los módulos de interactividad, navegación y formularios.
 */

import { initNavigation } from './modules/navigation.js';
import { initSupplierForm } from './modules/form.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar navegación y menú móvil
  initNavigation();

  // Inicializar formulario de consulta para proveedores
  initSupplierForm();
});
