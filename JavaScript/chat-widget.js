/**
 * CUSTOM CHAT WIDGET - SEVILLAVES
 * Script interactivo para el bot de preguntas frecuentes y respuestas automatizadas
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configuración de las 3 preguntas sobre la empresa y sus respuestas scriptadas
  const chatData = {
    initialMessage: "¡Hola! 👋 Soy el asistente virtual de Sevillaves. ¿En qué podemos ayudarte hoy? Selecciona una de las siguientes opciones:",
    options: [
      {
        id: "tiempo",
        label: "⏱️ ¿Cuánto tardan en llegar a mi ubicación?",
        question: "¿Cuánto tardan en llegar a mi ubicación?",
        answer: "Nos desplazamos en <strong>20 a 30 minutos</strong> dentro de Sevilla Capital y alrededores. Te confirmamos el tiempo exacto de llegada por teléfono al instante."
      },
      {
        id: "tarifas",
        label: "💶 ¿Cuáles son las tarifas y métodos de pago?",
        question: "¿Cuáles son las tarifas y cómo funciona el pago?",
        answer: "Nuestras aperturas diurnas van de <strong>60€ a 90€</strong> y en horario nocturno/festivo de <strong>90€ a 130€</strong>. Siempre te confirmamos un <strong>precio cerrado sin sorpresas</strong> antes de trabajar. Aceptamos efectivo, tarjeta y Bizum."
      },
      {
        id: "danios",
        label: "🔓 ¿Pueden abrir la puerta sin romper la cerradura?",
        question: "¿Pueden abrir la puerta sin dañar la cerradura?",
        answer: "¡Sí! En más del <strong>90% de los casos</strong> realizamos aperturas limpias sin ningún daño en la cerradura ni en la puerta. Solo forzamos cuando la cerradura está inservible y con tu autorización previa."
      }
    ]
  };

  // Crear e inyectar el HTML del widget al final del DOM
  const widgetContainer = document.createElement('div');
  widgetContainer.id = 'custom-chat-widget';
  widgetContainer.innerHTML = `
    <button id="chat-trigger-btn" class="chat-widget-trigger" aria-label="Abrir chat de ayuda">
      <i class="ri-message-3-line"></i>
      <span class="chat-widget-badge"></span>
    </button>

    <div id="chat-window-box" class="chat-widget-window" role="dialog" aria-label="Chat de soporte">
      <div class="chat-widget-header">
        <div class="chat-header-info">
          <div class="chat-avatar-container">
            <i class="ri-customer-service-2-fill"></i>
            <span class="chat-status-dot"></span>
          </div>
          <div class="chat-header-text">
            <span class="chat-header-title">Asistente Sevillaves</span>
            <span class="chat-header-subtitle">En línea • Respuesta inmediata</span>
          </div>
        </div>
        <button id="chat-close-btn" class="chat-widget-close" aria-label="Cerrar chat">
          <i class="ri-close-line"></i>
        </button>
      </div>

      <div id="chat-messages-body" class="chat-widget-body">
        <!-- Los mensajes interactivos se renderizan aquí dinámicamente -->
      </div>

      <div class="chat-widget-footer">
        <a href="tel:+34600000000" class="chat-call-btn">
          <i class="ri-phone-line"></i> Llamar ahora (Atención 24h)
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(widgetContainer);

  // Referencias a los elementos creados
  const triggerBtn = document.getElementById('chat-trigger-btn');
  const closeBtn = document.getElementById('chat-close-btn');
  const windowBox = document.getElementById('chat-window-box');
  const messagesBody = document.getElementById('chat-messages-body');

  let isOpen = false;
  let isFirstOpen = true;

  // Alternar la visibilidad de la ventana del chat
  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      windowBox.classList.add('active');
      triggerBtn.querySelector('i').className = 'ri-close-line';
      if (isFirstOpen) {
        initChat();
        isFirstOpen = false;
      }
    } else {
      windowBox.classList.remove('active');
      triggerBtn.querySelector('i').className = 'ri-message-3-line';
    }
  }

  triggerBtn.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  // Inicializar la conversación
  function initChat() {
    messagesBody.innerHTML = '';
    appendBotMessage(chatData.initialMessage);
    setTimeout(() => {
      appendOptions();
    }, 400);
  }

  // Agregar mensaje enviado por el bot
  function appendBotMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-message bot';
    msgDiv.innerHTML = `<div class="chat-bubble">${text}</div>`;
    messagesBody.appendChild(msgDiv);
    scrollToBottom();
  }

  // Agregar mensaje enviado por el cliente
  function appendUserMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-message user';
    msgDiv.innerHTML = `<div class="chat-bubble">${text}</div>`;
    messagesBody.appendChild(msgDiv);
    scrollToBottom();
  }

  // Mostrar el indicador con animación de escribiendo...
  function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.id = 'chat-typing';
    typingDiv.className = 'chat-message bot';
    typingDiv.innerHTML = `
      <div class="chat-typing-indicator">
        <span></span><span></span><span></span>
      </div>
    `;
    messagesBody.appendChild(typingDiv);
    scrollToBottom();
  }

  // Quitar el indicador de escribiendo
  function removeTypingIndicator() {
    const typingDiv = document.getElementById('chat-typing');
    if (typingDiv) {
      typingDiv.remove();
    }
  }

  // Renderizar los botones con las 3 preguntas
  function appendOptions() {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'chat-options-container';
    optionsContainer.id = 'current-options';

    chatData.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'chat-option-btn';
      btn.innerHTML = option.label;
      btn.addEventListener('click', () => handleOptionSelect(option));
      optionsContainer.appendChild(btn);
    });

    messagesBody.appendChild(optionsContainer);
    scrollToBottom();
  }

  // Procesar la selección de una opción
  function handleOptionSelect(option) {
    // Eliminar las opciones actuales
    const currentOptions = document.getElementById('current-options');
    if (currentOptions) {
      currentOptions.remove();
    }

    // Dibujar el mensaje del usuario
    appendUserMessage(option.question);

    // Simular tiempo de respuesta del bot
    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      appendBotMessage(option.answer);

      // Ofrecer realizar otra consulta después de responder
      setTimeout(() => {
        appendBotMessage("¿Tienes alguna otra duda o deseas consultar otra de las preguntas frecuentes?");
        setTimeout(() => {
          appendOptions();
        }, 400);
      }, 1000);

    }, 850);
  }

  // Desplazamiento automático al fondo del contenedor de mensajes
  function scrollToBottom() {
    messagesBody.scrollTop = messagesBody.scrollHeight;
  }
});
