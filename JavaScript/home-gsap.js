document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // ================= HERO =================
  // H1, P y Botones: izquierda a derecha
  gsap.from([".h1-hero", ".texto-hero", ".acciones-hero"], {
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Imagen derecha: derecha a izquierda
  gsap.from(".imagen-hero-secundaria-arriba", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Imagen medio: abajo a arriba
  gsap.from(".imagen-hero-principal", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Imagen izquierda: izquierda a derecha
  gsap.from(".imagen-hero-secundaria-abajo", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= SECCIÓN 1 (BENEFICIOS) =================
  // H2 y P: izquierda a derecha
  gsap.from([".h2-beneficios", ".texto-beneficios"], {
    scrollTrigger: {
      trigger: ".seccion-beneficios",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Div con 3 tarjetas: abajo a arriba
  gsap.from(".grid-beneficios", {
    scrollTrigger: {
      trigger: ".grid-beneficios",
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= SECCIÓN 2 (SERVICIOS) =================
  // H2 y P: arriba a abajo
  gsap.from([".h2-servicios", ".texto-servicios"], {
    scrollTrigger: {
      trigger: ".seccion-servicios",
      start: "top 80%"
    },
    y: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
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

  // P: derecha a izquierda
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

  // Div de botones: abajo a arriba
  gsap.from(".acciones-precios", {
    scrollTrigger: {
      trigger: ".seccion-precios",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= SECCIÓN ¿POR QUÉ ELEGIRNOS? =================
  // H2 y div de botones: izquierda a derecha
  gsap.from([".h2-porque", ".acciones-porque"], {
    scrollTrigger: {
      trigger: ".seccion-porque",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // ================= SECCIÓN CTA FINAL =================
  // H2: derecha a izquierda
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

  // P: izquierda a derecha (al contrario de H2)
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

  // Div de abajo: abajo a arriba
  gsap.from(".fila-cta-inferior", {
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
