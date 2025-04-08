const swiperTimeless = new Swiper('.swiper-timeless', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3, 
    centeredSlides: true, // Центрує активний слайд
    spaceBetween: 16, // Відстань між слайдами
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      });


const swiperBrands = new Swiper('.swiper-brands', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2, 
    spaceBetween: 16, // Відстань між слайдами
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

      // автопрокрутка
    autoplay: {
  // пауза між прокруткою
      delay: 1000,
      // закінчити на останньому слайді 
      stopOnLastSlide: true,
      // відключити після ручного переключення
      disableOnInteraction: false
    },
  
    // швидікість автопрокруту 
    speed: 3000,

    breakpoints: {

      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }

  });


  const swiperTestimonials = new Swiper('.swiper-testimonials', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    centeredSlides: true, // Центрує активний слайд

    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next__testimonials',
      prevEl: '.swiper-button-prev__testimonials',
    },

    breakpoints: {

      768: {
        slidesPerView: 2,
        centeredSlides: false,
      },
    }

      });

  