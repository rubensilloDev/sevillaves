// =========================================
// ANIMACIONES GSAP: PÁGINA SOBRE NOSOTROS
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ================= HERO =================
  // H1 y Botones: entrada desde la izquierda
  gsap.from([".h1-hero", ".acciones-hero"], {
    x: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Párrafo descriptivo: entrada desde la derecha
  gsap.from(".texto-hero", {
    x: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.15,
    ease: "power2.out"
  });

  // ================= HISTORIA Y TRAYECTORIA =================
  // Textos de historia: entrada desde la izquierda
  gsap.from(".historia-textos > *", {
    scrollTrigger: {
      trigger: ".seccion-historia",
      start: "top 80%"
    },
    x: -40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "power2.out"
  });

  // Visual de historia y tarjetas métricas (animación al contenedor)
  gsap.from(".historia-visual", {
    scrollTrigger: {
      trigger: ".seccion-historia",
      start: "top 80%"
    },
    x: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    clearProps: "transform"
  });

  // ================= SERVICIOS RESUMEN =================
  // Encabezado de servicios
  gsap.from(".encabezado-servicios-resumen", {
    scrollTrigger: {
      trigger: ".seccion-servicios-resumen",
      start: "top 80%"
    },
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
  });

  // Animación al CONTENEDOR grid de servicios (para no interferir con el hover CSS de las tarjetas)
  gsap.from(".grid-servicios-resumen", {
    scrollTrigger: {
      trigger: ".grid-servicios-resumen",
      start: "top 85%"
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    clearProps: "transform"
  });

  // ================= EXPERIENCIA (+14 AÑOS) =================
  // Encabezado de experiencia
  gsap.from(".encabezado-experiencia", {
    scrollTrigger: {
      trigger: ".seccion-experiencia",
      start: "top 80%"
    },
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
  });

  // Animación al CONTENEDOR grid de experiencia
  gsap.from(".grid-experiencia", {
    scrollTrigger: {
      trigger: ".grid-experiencia",
      start: "top 85%"
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    clearProps: "transform"
  });



  // ================= TESTIMONIOS Y GOOGLE =================
  // Encabezado y widget Google
  gsap.from(".encabezado-testimonios > *", {
    scrollTrigger: {
      trigger: ".seccion-testimonios",
      start: "top 80%"
    },
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "power2.out"
  });

  // Entrada suave del CONTENEDOR del carrusel de testimonios
  gsap.from(".contenedor-carrusel-testimonios", {
    scrollTrigger: {
      trigger: ".contenedor-carrusel-testimonios",
      start: "top 85%"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
    clearProps: "transform"
  });

  // ================= COBERTURA LOCAL =================
  // Encabezado de cobertura
  gsap.from(".encabezado-cobertura-local", {
    scrollTrigger: {
      trigger: ".seccion-cobertura-local",
      start: "top 80%"
    },
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
  });

  // Animación al CONTENEDOR grid de tarjetas de cobertura
  gsap.from(".grid-tarjetas-cobertura", {
    scrollTrigger: {
      trigger: ".grid-tarjetas-cobertura",
      start: "top 85%"
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    clearProps: "transform"
  });

  // Banner inferior de consulta
  gsap.from(".banner-consulta-cobertura", {
    scrollTrigger: {
      trigger: ".banner-consulta-cobertura",
      start: "top 90%"
    },
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    clearProps: "transform"
  });

  // ================= CTA FINAL =================
  // Bloque de llamada a la acción
  gsap.from(".contenido-seccion-cta-final > *", {
    scrollTrigger: {
      trigger: ".seccion-cta-final",
      start: "top 80%"
    },
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power2.out"
  });
});
