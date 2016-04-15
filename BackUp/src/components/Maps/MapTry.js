mapboxgl.accessToken = 'pk.eyJ1IjoianJvam9vIiwiYSI6IjU5YWMxNTI2MzA2MzlmNWUxNWNhOGE2M2QwZTI2YTExIn0.cNrKr17Aley6AYfK245vlA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v8',
    zoom: 15,
    center: [-71.97722138410576, -13.517379300798098]
});

map.on('style.load', function () {
    map.addSource('museums', {
        type: 'vector',
        url: 'mapbox://mapbox.2opop9hr'
    });
    map.addLayer({
        'id': 'museums',
        'type': 'circle',
        'source': 'museums',
        'paint': {
            'circle-radius': 8,
            'circle-color': 'rgba(55,148,179,1)'
        },
        'source-layer': 'museum-cusco'
    });

    map.addSource('contours', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2'
    });
    map.addLayer({
        'id': 'contours',
        'type': 'line',
        'source': 'contours',
        'source-layer': 'contour',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#877b59',
            'line-width': 1
        }
    });
});

addLayer('Contours', 'contours');
addLayer('Museums', 'museums');

function addLayer(name, id) {
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = name;

    link.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(id, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(id, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(id, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}