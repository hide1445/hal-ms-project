function disp_shootingstar(value) {
particlesJS("particles-star", {
  particles: {
    number: {
      value: value,
      density: { enable: true, value_area: 5681.8630197523635 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "star",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 4.008530152163807,
      random: false,
      anim: {
        enable: false,
        speed: 300,
        size_min: 56.743256743256744,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 1657.2100474277727,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 10,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 1683.5826639087988,
        rotateY: 400.8530152163807
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  state: {
    status: "star"
  },
  retina_detect: false
});
}
