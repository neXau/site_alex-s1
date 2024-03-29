particlesJS("particles-js", {
  particles: {
    number: {
      value: 87,
      density: { enable: true, value_area: 1042.21783956259 },
    },
    color: { value: "#9945FF" },
    shape: {
      type: "edge",
      stroke: { width: 1, color: "#14F195" },
      polygon: { nb_sides: 4 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 12.02559045649142,
      random: true,
      anim: {
        enable: true,
        speed: 19.489853095232284,
        size_min: 7.308694910712106,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 400.85301521638075,
      color: "#ffffff",
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.603412060865523,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
