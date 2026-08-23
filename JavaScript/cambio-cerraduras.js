document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto-cerraduras');
  const modal = document.getElementById('modal-alerta-custom');
  const modalCerrarBtn = document.getElementById('modal-alerta-cerrar');
  const modalIcono = document.getElementById('modal-alerta-icono');
  const modalTitulo = document.getElementById('modal-alerta-titulo');
  const modalMensaje = document.getElementById('modal-alerta-mensaje');

  if (!form) return;

  // Función para mostrar el modal de alerta diseñado
  function mostrarAlertaCustom({ tipo = 'exito', titulo, mensaje }) {
    if (!modal) return;

    if (tipo === 'exito') {
      modalIcono.className = 'modal-alerta-icono exito';
      modalIcono.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
    } else {
      modalIcono.className = 'modal-alerta-icono error';
      modalIcono.innerHTML = '<i class="ri-error-warning-fill"></i>';
    }

    modalTitulo.textContent = titulo;
    modalMensaje.textContent = mensaje;
    modal.classList.add('activo');
    modal.setAttribute('aria-hidden', 'false');
  }

  // Función para cerrar el modal
  function cerrarAlertaCustom() {
    if (!modal) return;
    modal.classList.remove('activo');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (modalCerrarBtn) {
    modalCerrarBtn.addEventListener('click', cerrarAlertaCustom);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        cerrarAlertaCustom();
      }
    });
  }

  // Validación y envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre-cta').value.trim();
    const prefijo = document.getElementById('prefijo-pais').value;
    const telefono = document.getElementById('telefono-cta').value.trim();
    const terminos = document.getElementById('terminos-cta').checked;

    // Obtener los checkboxes seleccionados
    const checkboxesServicios = document.querySelectorAll('.checkbox-cta-servicio:checked');

    // Validación 1: Nombre completo
    if (!nombre) {
      mostrarAlertaCustom({
        tipo: 'error',
        titulo: 'Campo obligatorio',
        mensaje: 'Por favor, introduce tu nombre completo para continuar.'
      });
      document.getElementById('nombre-cta').focus();
      return;
    }

    // Validación 2: Teléfono de contacto
    if (!telefono) {
      mostrarAlertaCustom({
        tipo: 'error',
        titulo: 'Teléfono requerido',
        mensaje: 'Por favor, introduce tu número de teléfono de contacto.'
      });
      document.getElementById('telefono-cta').focus();
      return;
    }

    // Validar que el teléfono contenga números válidos (mínimo 6 dígitos)
    const soloNumeros = telefono.replace(/\D/g, '');
    if (soloNumeros.length < 6) {
      mostrarAlertaCustom({
        tipo: 'error',
        titulo: 'Teléfono no válido',
        mensaje: 'Por favor, introduce un número de teléfono válido.'
      });
      document.getElementById('telefono-cta').focus();
      return;
    }

    // Validación 3: Selección de al menos una cerradura / servicio
    if (checkboxesServicios.length === 0) {
      mostrarAlertaCustom({
        tipo: 'error',
        titulo: 'Selecciona una opción',
        mensaje: 'Por favor, selecciona al menos un tipo de cerradura o servicio que necesitas.'
      });
      return;
    }

    // Validación 4: Casilla de términos y condiciones
    if (!terminos) {
      mostrarAlertaCustom({
        tipo: 'error',
        titulo: 'Términos no aceptados',
        mensaje: 'Debes aceptar los términos y condiciones de privacidad para enviar la solicitud.'
      });
      document.getElementById('terminos-cta').focus();
      return;
    }

    // Si todo está correcto -> Mostrar alerta de éxito diseñada y resetear formulario
    const serviciosSeleccionados = Array.from(checkboxesServicios).map(cb => cb.nextElementSibling.textContent.trim()).join(', ');

    mostrarAlertaCustom({
      tipo: 'exito',
      titulo: '¡Presupuesto Solicitado!',
      mensaje: `Gracias ${nombre}. Hemos recibido tu solicitud para: ${serviciosSeleccionados} (${prefijo} ${telefono}). Te contactaremos al instante.`
    });

    form.reset();
  });
});
