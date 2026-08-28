document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // ================= HERO =================
  // H1 y Botones: izquierda a derecha
  gsap.from([".h1-hero", ".acciones-hero"], {
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Párrafo descriptivo: derecha a izquierda
  gsap.from(".texto-hero", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= SITUACIONES DE URGENCIA =================
  // Columna izquierda (H2, P y Botones): izquierda a derecha
  gsap.from([".titulo-situaciones-urgencia", ".bajada-situaciones-urgencia", ".acciones-situaciones"], {
    scrollTrigger: {
      trigger: ".seccion-situaciones-urgencia",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Tarjetas de situaciones: abajo a arriba en cascada
  gsap.from(".situacion-item", {
    scrollTrigger: {
      trigger: ".tarjetas-scroll-stack",
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // ================= CÓMO FUNCIONA =================
  // Contenedor de pasos (izquierda): izquierda a derecha
  gsap.from(".pasos-como-funciona", {
    scrollTrigger: {
      trigger: ".pasos-como-funciona",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Textos y botones (derecha): derecha a izquierda
  gsap.from([".titulo-como-funciona", ".bajada-como-funciona", ".acciones-como-funciona"], {
    scrollTrigger: {
      trigger: ".introduccion-como-funciona",
      start: "top 80%"
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // ================= DISPONIBILIDAD 24 HORAS =================
  // Columna izquierda (H2): izquierda a derecha
  gsap.from(".titulo-disponibilidad", {
    scrollTrigger: {
      trigger: ".seccion-disponibilidad",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Columna derecha (Textos y Botonera): derecha a izquierda
  gsap.from(".disponibilidad-columna-der", {
    scrollTrigger: {
      trigger: ".seccion-disponibilidad",
      start: "top 80%"
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= SECCIÓN PRECIOS =================
  // H2: izquierda a derecha
  gsap.from(".h2-precios", {
    scrollTrigger: {
      trigger: ".seccion-precios",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Párrafo intro: derecha a izquierda
  gsap.from(".texto-precios", {
    scrollTrigger: {
      trigger: ".seccion-precios",
      start: "top 80%"
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Contenedor de precios: abajo a arriba
  gsap.from(".grid-precios", {
    scrollTrigger: {
      trigger: ".grid-precios",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= PREGUNTAS FRECUENTES (FAQ) =================
  // Título FAQ: arriba a abajo
  gsap.from(".titulo-faq", {
    scrollTrigger: {
      trigger: ".seccion-faq",
      start: "top 80%"
    },
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Acordeones FAQ: abajo a arriba
  gsap.from(".faq-item", {
    scrollTrigger: {
      trigger: ".lista-faq",
      start: "top 85%"
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: "power2.out"
  });

  // ================= SECCIÓN CTA FINAL =================
  // Título: izquierda a derecha
  gsap.from(".titulo-cta-final", {
    scrollTrigger: {
      trigger: ".seccion-cta-final",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Párrafo: derecha a izquierda
  gsap.from(".descripcion-cta-final", {
    scrollTrigger: {
      trigger: ".seccion-cta-final",
      start: "top 80%"
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Botonera: abajo a arriba
  gsap.from(".cta-final-acciones", {
    scrollTrigger: {
      trigger: ".seccion-cta-final",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});
