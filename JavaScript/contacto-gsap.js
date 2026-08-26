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

  // ================= CANALES DE CONTACTO =================
  // Introducción (H2 y Párrafo): izquierda a derecha
  gsap.from([".h2-canales-contacto", ".texto-introduccion-canales"], {
    scrollTrigger: {
      trigger: ".seccion-canales-contacto",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Grid de canales (animación al contenedor padre por hovers): abajo a arriba
  gsap.from(".grid-canales-contacto", {
    scrollTrigger: {
      trigger: ".grid-canales-contacto",
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= FORMULARIO DE CONTACTO =================
  // Introducción (H2 y Párrafo): izquierda a derecha
  gsap.from([".h2-formulario-contacto", ".texto-introduccion-formulario"], {
    scrollTrigger: {
      trigger: ".seccion-formulario-contacto",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Tarjeta de formulario: abajo a arriba
  gsap.from(".tarjeta-formulario-contacto", {
    scrollTrigger: {
      trigger: ".tarjeta-formulario-contacto",
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ================= PASO A PASO (PESTAÑAS) =================
  // Introducción (H2 y Párrafo): izquierda a derecha
  gsap.from([".h2-proceso-pasos", ".texto-introduccion-proceso"], {
    scrollTrigger: {
      trigger: ".seccion-proceso-pasos",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Selector de pestañas: arriba a abajo
  gsap.from(".contenedor-pestanas-proceso", {
    scrollTrigger: {
      trigger: ".contenedor-pestanas-proceso",
      start: "top 85%"
    },
    y: -30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  });

  // Paneles de pasos (animación al contenedor padre por hovers): abajo a arriba
  gsap.from(".panel-proceso.activo", {
    scrollTrigger: {
      trigger: ".contenedor-pestanas-proceso",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});
