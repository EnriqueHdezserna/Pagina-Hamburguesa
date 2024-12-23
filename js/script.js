/* Slider */
var swiper = new Swiper('.mySwiper-1', {
  sliderPerView: 1,
  spaceBetween: 30,

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000, // Tiempo entre desplazamientos (en milisegundos)
    disableOnInteraction: false, // Permite seguir el autoplay incluso después de interacción manual
  },
  
});

var swiper = new Swiper('.mySwiper-2', {
    slidesPerView: 3, // Cantidad de diapositivas visibles
    spaceBetween: 20, // Espaciado entre diapositivas
    loop: true, // Activa el bucle
    loopFillGroupWithBlank: true, // Llena los espacios si no hay suficientes slides
  
    // Navegación
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Configuración de autoplay
    autoplay: {
      delay: 3000, // Tiempo entre desplazamientos (en milisegundos)
      disableOnInteraction: false, // Permite seguir el autoplay incluso después de interacción manual
    },
  
    // Breakpoints para diseño responsivo
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
  
  // Código para actualizar Swiper al cambiar de pestaña
  const tabInputs = document.querySelectorAll('.tabInput'); // Cambié querySelector a querySelectorAll
  
  tabInputs.forEach((input) => {
    input.addEventListener('change', () => {

      let id = input.value; // Obtén el atributo ariaValueMax correctamente
      let thisSwiper = document.getElementById('swiper' + id);
      thisSwiper.swiper.update();
    });
  });
  