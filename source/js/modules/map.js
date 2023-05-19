const center = [43.2351, 76.9097];

function init() {
    const map = new ymaps.Map('map', {
        center,
        zoom: 17
    });

    const placemark = new ymaps.Placemark(
        center,
        {},
        {
            iconLayout: 'default#image',
            iconImageHref: '../img/marker.svg',
            iconImageSize: [30, 30],
            iconImageOffset: [-1, -20]
        }
    );

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}

ymaps.ready(init);
