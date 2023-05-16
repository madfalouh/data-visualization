// src/useMapbox.js
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const useMapbox = (container, accessToken, mapStyle, data  , involmenemt) => {
  useEffect(() => {

console.log("ijfc,jr,fckf,ckfc,");
console.log(involmenemt);

const bounds = [    [-91.655009, 30.173943], // Southwest coordinates
  [-88.097889, 34.996052]  // Northeast coordinates
]; 
    if (!container.current) return;

    mapboxgl.accessToken = accessToken;
    const map = new mapboxgl.Map({
      container: container.current,
      style: mapStyle,
      center: [-89.3985, 32.3547],
      zoom: 6,
    });

map.on('load', () => {
  map.addSource('counties', {
    type: 'geojson',
    data: data,
  });

  map.addLayer({
    'id': 'world-layer',
    'type': 'background',
    'paint': {
      'background-color': 'rgba(204, 204, 204, 0.7)' // grey with 0.2 opacity
    }
  });

    map.addLayer({
    'id': 'counties-layer',
    'type': 'fill',
    'source': 'counties',
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'], 
        ['get',    involmenemt ? "notAlcoholInvolved" :"alcoholInvolved"    ],
        0, 'rgba(173, 216, 230, 1)', // light blue at 0
         (involmenemt ? 257 : 5) , 'rgba(0, 0, 139, 1)' 
      ],
      'fill-opacity': 0.7
    }
  });
  // Add your counties borders
  map.addLayer({
    'id': 'counties-borders',
    'type': 'line',
    'source': 'counties',
    'layout': {},
    'paint': {
      'line-width': 0.2,
      'line-color': '#000'
    }
  });
});


    return () => {
      map.remove();
    };
  }, [container, accessToken, mapStyle, data , involmenemt]);
};

export default useMapbox;
