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