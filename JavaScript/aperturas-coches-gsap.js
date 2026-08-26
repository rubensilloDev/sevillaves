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

  // ================= PROBLEMAS =================
  // Introducción (H2, P y Botones): izquierda a derecha
  gsap.from([".h2-problemas", ".texto-introduccion-problemas", ".acciones-introduccion-problemas"], {
    scrollTrigger: {
      trigger: ".seccion-problemas",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Columna izquierda de problemas (contenedor padre por hovers): izquierda a derecha
  gsap.from(".grid-problemas .columna-tarjetas-problemas:first-child", {
    scrollTrigger: {
      trigger: ".grid-problemas",
      start: "top 80%"
    },
    x: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Imagen central de problemas: abajo a arriba
  gsap.from(".columna-imagen-problemas", {
    scrollTrigger: {
      trigger: ".grid-problemas",
      start: "top 80%"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Columna derecha de problemas (contenedor padre por hovers): derecha a izquierda
  gsap.from(".grid-problemas .columna-tarjetas-problemas:last-child", {
    scrollTrigger: {
      trigger: ".grid-problemas",
      start: "top 80%"
    },
    x: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Botonera inferior de problemas: abajo a arriba
  gsap.from(".acciones-inferiores-problemas", {
    scrollTrigger: {
      trigger: ".acciones-inferiores-problemas",
      start: "top 85%"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= RESULTADOS =================
  // Introducción (H2, P y Botones): izquierda a derecha
  gsap.from([".h2-resultados", ".texto-introduccion-resultados", ".acciones-introduccion-resultados"], {
    scrollTrigger: {
      trigger: ".seccion-resultados",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Grid de resultados (animación al contenedor padre por hovers): abajo a arriba
  gsap.from(".grid-tarjetas-resultados", {
    scrollTrigger: {
      trigger: ".grid-tarjetas-resultados",
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= DISPONIBILIDAD 24 HORAS =================
  // Columna izquierda (H2): izquierda a derecha
  gsap.from(".h2-disponibilidad", {
    scrollTrigger: {
      trigger: ".seccion-disponibilidad",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Columna derecha (Párrafo y Botones): derecha a izquierda
  gsap.from([".textos-disponibilidad", ".acciones-disponibilidad"], {
    scrollTrigger: {
      trigger: ".seccion-disponibilidad",
      start: "top 80%"
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
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

  // Imagen superpuesta del coche: derecha a izquierda
  gsap.from(".imagen-cta-superpuesta", {
    scrollTrigger: {
      trigger: ".seccion-cta-final",
      start: "top 80%"
    },
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Botonera final: abajo a arriba
  gsap.from(".acciones-cta-final", {
    scrollTrigger: {
      trigger: ".seccion-cta-final",
      start: "top 80%"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});
