const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});

 ymaps.ready(init);
      function init() {
        var myMap = new ymaps.Map("map", {
          center: [7.83814133, 98.29877635],
          zoom: 16
        });
      }