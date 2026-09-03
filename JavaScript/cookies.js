// =========================================
// COOKIE CONSENT BANNER
// Google Consent Mode v2 integration
// =========================================
//
// Flujo general:
//   1. El <head> ya bloqueó Analytics por defecto (analytics_storage: denied).
//   2. Este script lee localStorage para saber si el usuario ya decidió.
//      - Si aceptó → reactiva Analytics y quita el banner.
//      - Si rechazó → quita el banner sin reactivar nada.
//      - Si no hay decisión → muestra el banner y espera el clic.
//   3. Al aceptar/rechazar se guarda la decisión y se notifica a gtag.
//
// Todo el código vive dentro de una IIFE para no contaminar el scope global.
// =========================================

(function () {

  // ---- Constantes ----

  // Clave usada en localStorage para persistir la decisión del usuario.
  // Cambiarla aquí la cambia en todo el código.
  const COOKIE_KEY = 'cookie_consent';

  // ---- Referencias al DOM ----
  // Si algún elemento no existe en la página, la variable quedará en null.
  // Todas las funciones comprueban esto antes de usarlas (defensive programming).

  const banner    = document.getElementById('cookie-banner');
  const btnAccept = document.getElementById('cookie-btn-accept');
  const btnReject = document.getElementById('cookie-btn-reject');

  // =========================================
  // setConsent(granted)
  // =========================================
  // Centraliza el momento en que el usuario toma una decisión.
  // Parámetros:
  //   granted {boolean} — true = aceptó, false = rechazó
  //
  // Responsabilidades:
  //   1. Persiste la decisión en localStorage.
  //   2. Notifica a Google Consent Mode v2 para activar/mantener bloqueado Analytics.
  //   3. Dispara el cierre animado del banner.
  // =========================================

  function setConsent(granted) {
    // Guarda 'granted' o 'denied' en localStorage.
    // Persiste aunque el usuario cierre el navegador o la pestaña.
    localStorage.setItem(COOKIE_KEY, granted ? 'granted' : 'denied');

    // Notificamos a gtag solo si existe.
    // La guardia typeof evita errores si un adblocker eliminó el script de Analytics.
    if (typeof gtag === 'function') {
      // gtag('consent', 'update') — llamada oficial de Google Consent Mode v2.
      // Cambia el estado de consentimiento EN TIEMPO REAL sin recargar la página.
      gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied', // Permite/bloquea cookies de Analytics
        ad_storage:        granted ? 'granted' : 'denied', // Permite/bloquea cookies publicitarias
      });
    }

    // Una vez guardada la decisión, cerramos el banner con animación.
    hideBanner();
  }

  // =========================================
  // hideBanner()
  // =========================================
  // Oculta el banner con una transición CSS y luego lo elimina del DOM.
  // Eliminar el nodo (no solo ocultarlo) libera memoria y evita
  // que lectores de pantalla lo anuncien cuando ya no es relevante.
  // =========================================

  function hideBanner() {
    // Salida segura si el elemento no existe en esta página.
    if (!banner) return;

    // La clase --hidden en CSS dispara la transición de slide-out hacia abajo.
    banner.classList.add('cookie-banner--hidden');

    // Esperamos a que la transición CSS termine antes de borrar el nodo.
    // { once: true } hace que el listener se auto-destruya tras ejecutarse,
    // evitando un memory leak si hideBanner() se llamase varias veces.
    banner.addEventListener('transitionend', () => banner.remove(), { once: true });
  }

  // =========================================
  // showBanner()
  // =========================================
  // Hace visible el banner con la animación CSS de slide-up.
  //
  // Por qué el doble requestAnimationFrame:
  //   Si agregamos la clase .visible en el mismo frame en que el elemento
  //   se insertó en el DOM, el navegador no registra el estado inicial
  //   (sin la clase) y no anima. Con dos rAF anidados garantizamos que
  //   pasen al menos 2 fotogramas de renderizado antes de añadir la clase,
  //   lo que fuerza al motor CSS a interpolar desde el estado de partida.
  // =========================================

  function showBanner() {
    // Salida segura si el elemento no existe en esta página.
    if (!banner) return;

    // Primer rAF: espera al próximo frame de pintura.
    requestAnimationFrame(() => {
      // Segundo rAF: espera un frame más para asegurar que
      // el estado inicial (sin --visible) ya fue pintado.
      requestAnimationFrame(() => {
        // Ahora sí, añadir la clase dispara la transición CSS correctamente.
        banner.classList.add('cookie-banner--visible');
      });
    });
  }

  // =========================================
  // init()
  // =========================================
  // Punto de entrada principal. Se llama cuando el DOM está listo.
  // Decide qué hacer según el estado previo del usuario:
  //   - 'granted' → reactivar Analytics, no mostrar banner.
  //   - 'denied'  → no hacer nada, no mostrar banner.
  //   - null      → primera visita; mostrar banner y conectar botones.
  // =========================================

  function init() {
    // Leemos la decisión guardada (puede ser 'granted', 'denied', o null).
    const saved = localStorage.getItem(COOKIE_KEY);

    // --- Caso 1: El usuario ya aceptó en una visita anterior ---
    if (saved === 'granted') {
      if (typeof gtag === 'function') {
        // Reactivamos Analytics inmediatamente para que mida desde el primer pageview.
        // Recordar: el <head> lo dejó en 'denied' por defecto; hay que actualizarlo.
        gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted' });
      }
      // Eliminamos el banner del DOM sin mostrarlo (no hay nada que decidir).
      if (banner) banner.remove();
      return; // Salimos; no hay nada más que hacer.
    }

    // --- Caso 2: El usuario ya rechazó en una visita anterior ---
    if (saved === 'denied') {
      // Analytics sigue bloqueado (estado por defecto del <head>).
      // Solo eliminamos el banner del DOM silenciosamente.
      if (banner) banner.remove();
      return;
    }

    // --- Caso 3: Primera visita — no hay decisión guardada ---
    // Mostramos el banner con animación.
    showBanner();

    // Conectamos los botones a setConsent.
    // La guardia if evita errores si los elementos no están en el HTML.
    if (btnAccept) {
      btnAccept.addEventListener('click', () => setConsent(true));  // Aceptar → granted
    }
    if (btnReject) {
      btnReject.addEventListener('click', () => setConsent(false)); // Rechazar → denied
    }
  }

  // =========================================
  // Arranque
  // =========================================
  // El script tiene defer, así que normalmente el DOM ya está listo aquí.
  // Este patrón lo hace robusto ante cualquier orden de carga:
  //   - Si el DOM aún está parseándose → esperamos DOMContentLoaded.
  //   - Si ya está listo            → ejecutamos init() directamente.
  // =========================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})(); // Fin de la IIFE — el código queda aislado del scope global.
