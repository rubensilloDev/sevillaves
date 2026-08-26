document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // ================= HERO =================
  // H1 y Botonera: izquierda a derecha
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

  // ================= CASOS DE CAMBIO =================
  // Introducción (H2, P y Botones): izquierda a derecha
  gsap.from([".h2-casos", ".texto-introduccion-casos", ".acciones-introduccion"], {
    scrollTrigger: {
      trigger: ".seccion-casos",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Contenedor de tarjetas superiores (animación al padre por hovers): abajo a arriba
  gsap.from(".casos-tarjetas-superiores", {
    scrollTrigger: {
      trigger: ".casos-tarjetas-superiores",
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Tarjeta inferior (animación al contenedor por hover): abajo a arriba
  gsap.from(".caso-tarjeta-inferior", {
    scrollTrigger: {
      trigger: ".caso-tarjeta-inferior",
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= OPCIONES DE SEGURIDAD =================
  // Textos de presentación: izquierda a derecha
  gsap.from([".h2-opciones", ".texto-opciones-presentacion"], {
    scrollTrigger: {
      trigger: ".seccion-opciones",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Contenedor de opciones (animación al padre por hovers): abajo a arriba
  gsap.from(".opciones-lista", {
    scrollTrigger: {
      trigger: ".opciones-lista",
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Imagen columna derecha: derecha a izquierda
  gsap.from(".opciones-imagen-col", {
    scrollTrigger: {
      trigger: ".seccion-opciones",
      start: "top 80%"
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= SECCIÓN PRECIOS =================
  // Encabezado (H2, P y Botones): izquierda a derecha
  gsap.from([".h2-precios", ".texto-precios", ".acciones-precios"], {
    scrollTrigger: {
      trigger: ".seccion-precios",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Grid de precios (animación al contenedor padre por hovers): abajo a arriba
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

  // ================= PROCESO DE TRABAJO =================
  // Encabezado izquierda (H2): izquierda a derecha
  gsap.from(".h2-proceso", {
    scrollTrigger: {
      trigger: ".seccion-proceso",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Encabezado derecha (Texto y Botones): derecha a izquierda
  gsap.from([".texto-proceso-presentacion", ".proceso-acciones"], {
    scrollTrigger: {
      trigger: ".seccion-proceso",
      start: "top 80%"
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Lista de pasos: abajo a arriba
  gsap.from(".proceso-lista-tarjetas", {
    scrollTrigger: {
      trigger: ".proceso-lista-tarjetas",
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= PREGUNTAS FRECUENTES (FAQ) =================
  // Título FAQ: arriba a abajo
  gsap.from(".h2-faq", {
    scrollTrigger: {
      trigger: ".seccion-faq",
      start: "top 80%"
    },
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Acordeones FAQ: abajo a arriba en cascada
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
  gsap.from(".h2-cta-final", {
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
  gsap.from(".texto-cta-final", {
    scrollTrigger: {
      trigger: ".seccion-cta-final",
      start: "top 80%"
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Tarjeta azul con formulario: abajo a arriba
  gsap.from(".cta-tarjeta-azul", {
    scrollTrigger: {
      trigger: ".cta-tarjeta-azul",
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});
