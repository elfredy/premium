$(document).ready(function () {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('YMapsID', {
            center: [40.38, 49.87],
            zoom: 12,
            /**
             * Please note that in the API 2.1, the map is created with controls by default.
             * If you don't need to add them to the map, pass an empty array in the "controls" field in its parameters.
             */
            controls: []
        });

        var myPlacemark = new ymaps.Placemark([
            40.38, 49.87
        ], {
            balloonContentBody: [
                '<address>',
                '<strong>Baku Xatai 193</strong>',
                '<br/>',
                'Address: 1000, Baku, S.S.Axundov, 16',
                '<br/>',
                'For more information, see: <a href="https://gocreative.com.tr"</a>',
                '</address>'
            ].join('')
        }, {
            preset: 'islands#redDotIcon'
        });

        var myPlacemark2 = new ymaps.Placemark([
            40.40, 49.85
        ], {
            balloonContentBody: [
                '<address>',
                '<strong>Baku Binagadi 200</strong>',
                '<br/>',
                'Address: 1000, Baku, Azadliq Avenue, 16',
                '<br/>',
                'For more information, see: <a href="https://gocreative.com.tr"</a>',
                '</address>'
            ].join('')
        }, {
            preset: 'islands#redDotIcon'
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark2);
    });





const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;
    
});