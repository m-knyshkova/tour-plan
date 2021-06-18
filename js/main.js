const hotelSlider = new Swiper('.hotel-slider', {
  loop: true,
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});

const reviewsSlider = new Swiper('.reviews-slider', {
  
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});




//  ymaps.ready(init);
//       function init() {
//         var myMap = new ymaps.Map("map", {
//           center: [7.83814133, 98.29877635],
//           zoom: 16
//         });
//       }


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [7.84, 98.30],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter([[-3.00, -98.30]],), {
            hintContent: 'GRAND HILTON HOTEL',
            
            //balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/myicon.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24]
        });

        
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});