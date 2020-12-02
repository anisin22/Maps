mapboxgl.accessToken = 'pk.eyJ1IjoiZmx5aW5nZG9jIiwiYSI6ImNraTZyb3JibzIyOXUyeG1zcHNpMG5wajcifQ.ZmoqgI2PqHKelBums-wFCw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMapErr([-100, 43])
}

function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 16
    })

    var nav = new mapboxgl.NavigationControl();

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      
      map.addControl(directions, 'top-left');
      map.addControl(nav);
      map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        })
        );
}

function setupMapErr(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 4
    })

    var nav = new mapboxgl.NavigationControl();

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      
      map.addControl(directions, 'top-left');
      map.addControl(nav);
      map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        })
        );
}
