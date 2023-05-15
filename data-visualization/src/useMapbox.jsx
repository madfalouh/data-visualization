// src/useMapbox.js
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const useMapbox = (container, accessToken, mapStyle, data  , colorScale) => {
  useEffect(() => {


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

  // Add a fill-extrusion layer covering the entire world
  map.addLayer({
    'id': 'blur-layer',
    'type': 'fill-extrusion',
    'source': {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [[[180, 90], [-180, 90], [-180, -90], [180, -90], [180, 90]]]
        }
      }
    },
    'paint': {
      'fill-extrusion-color': '#000',  // use whatever color you like
      'fill-extrusion-height': ['interpolate', ['linear'], ['zoom'], 0, 0, 20, 20000000],
      'fill-extrusion-base': 0,
      'fill-extrusion-opacity': 0.6  // adjust this to control the 'blurring' effect
    }
  });

  // Add your counties layer
  map.addLayer({
    'id': 'counties-layer',
    'type': 'fill',
    'source': 'counties',
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'alcoholInvolved'],
        0, 'rgba(255, 0, 0, 0)',
        5, 'rgba(255, 0, 0, 1)' 
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
  }, [container, accessToken, mapStyle, data]);
};

export default useMapbox;
