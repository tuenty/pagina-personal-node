const typed = new Typed(".typed", {
  strings: [
    '<i class="titulo">Autodidacta de la informática en todas sus ramas, empezando en el mundo del Desarrollo Web Fullstack. <i>',
    '<i class="titulo">Desarrollador<i>',
    '<i class="titulo">Desarrollador Web Trainee<i>',
  ],

  typeSpeed: 75,
  startDelay: 1000,
  backDelay: 500,
  loop: false,
  loopCount: false,
  showCursor: true,
  cursorChar: "|",
  contentType: "html",
});

//Scroll Reveal

ScrollReveal().reveal(".nabvar");
ScrollReveal().reveal(".quien-soy", { delay: 1000 });
ScrollReveal().reveal(".yo", { delay: 1500 });
ScrollReveal().reveal(".proyectos", { delay: 1000 });

var slides = document.querySelectorAll(".slide");
var botones = document.querySelectorAll(".boton");
let currentSlide = 1;

var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    botones.forEach((boton) => {
      boton.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  botones[manual].classList.add("active");
};

botones.forEach((boton, i) => {
  boton.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      botones[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

// mail //

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Gracias por contactarse!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML =
        "Oops! hubo un problema al enviar el mail, intente otra vez";
    });
}
form.addEventListener("submit", handleSubmit);
