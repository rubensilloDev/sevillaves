document.addEventListener('DOMContentLoaded', () => {
  const botonesPestana = document.querySelectorAll('.btn-pestana-proceso');
  const panelesProceso = document.querySelectorAll('.panel-proceso');

  if (botonesPestana.length > 0) {
    botonesPestana.forEach(boton => {
      boton.addEventListener('click', () => {
        const idTab = boton.getAttribute('data-tab');

        // Desactivar todas las pestañas y paneles
        botonesPestana.forEach(b => {
          b.classList.remove('activo');
          b.setAttribute('aria-selected', 'false');
        });

        panelesProceso.forEach(p => {
          p.classList.remove('activo');
        });

        // Activar la pestaña y el panel seleccionado
        boton.classList.add('activo');
        boton.setAttribute('aria-selected', 'true');

        const panelTarget = document.getElementById(`panel-${idTab}`);
        if (panelTarget) {
          panelTarget.classList.add('activo');

          // Animación escalonada al cambiar de pestaña
          const tarjetasPaso = panelTarget.querySelectorAll('.tarjeta-paso-proceso');
          if (typeof gsap !== 'undefined' && tarjetasPaso.length > 0) {
            gsap.fromTo(tarjetasPaso,
              { y: 25, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
            );
          }
        }
      });
    });
  }

  // Lógica del formulario de contacto -> Redirección directa a WhatsApp
  const formContacto = document.getElementById('form-contacto-pagina');
  if (formContacto) {
    formContacto.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre-contacto').value.trim();
      const prefijo = document.getElementById('prefijo-pais').value;
      const telefono = document.getElementById('telefono-contacto').value.trim();
      const servicio = document.getElementById('servicio-contacto').value;
      const direccion = document.getElementById('direccion-contacto').value.trim();
      const terminos = document.getElementById('terminos-contacto').checked;

      if (!nombre || !telefono || !servicio || !direccion || !terminos) {
        alert('Por favor, rellena todos los campos obligatorios y acepta la política de privacidad.');
        return;
      }

      const mensajeWhatsApp = `Hola, me contacto a través de vuestra web para solicitar presupuesto:\n\n` +
        `👤 *Nombre:* ${nombre}\n` +
        `📞 *Teléfono:* ${prefijo} ${telefono}\n` +
        `🛠️ *Servicio requerido:* ${servicio}\n` +
        `📍 *Zona / Dirección:* ${direccion}\n\n` +
        `Muchas gracias por vuestra atención.`;

      const urlWhatsApp = `https://api.whatsapp.com/send?phone=34692037526&text=${encodeURIComponent(mensajeWhatsApp)}`;
      window.open(urlWhatsApp, '_blank');
    });
  }
});
