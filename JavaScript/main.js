// =========================================
// MENÚ DE NAVEGACIÓN RESPONSIVE
// =========================================

// Selección de elementos del DOM
const btnMenu = document.getElementById('btn-menu');
const menuNavegacion = document.querySelector('.menu-navegacion');
const itemDesplegable = document.querySelector('.item-menu-desplegable');
const enlaceDesplegable = itemDesplegable ? itemDesplegable.querySelector('.enlace-menu') : null;

// Alternar apertura/cierre del menú a pantalla completa
if (btnMenu && menuNavegacion) {
  btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('activo');
    menuNavegacion.classList.toggle('activo');
    
    // Bloquear el scroll de la página cuando el menú está abierto
    if (menuNavegacion.classList.contains('activo')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
}

// Desplegar/plegar el submenú de Servicios al pulsar en "Servicios" en versión móvil
if (enlaceDesplegable && itemDesplegable) {
  enlaceDesplegable.addEventListener('click', (e) => {
    if (window.innerWidth <= 764) {
      e.preventDefault();
      itemDesplegable.classList.toggle('abierto');
    }
  });
}

// Cerrar el menú automáticamente al pulsar en cualquier enlace del menú o submenú
document.querySelectorAll('.enlace-menu, .enlace-submenu').forEach(enlace => {
  enlace.addEventListener('click', (e) => {
    // Si es el disparador de "Servicios" en móvil, no cerramos todo el menú
    if (enlace === enlaceDesplegable && window.innerWidth <= 764) {
      return;
    }
    if (btnMenu) btnMenu.classList.remove('activo');
    if (menuNavegacion) menuNavegacion.classList.remove('activo');
    if (itemDesplegable) itemDesplegable.classList.remove('abierto');
    document.body.style.overflow = '';
  });
});
