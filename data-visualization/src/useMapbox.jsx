// src/useMapbox.js
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const useMapbox = (container, accessToken, mapStyle, data, involmenemt, fatalities   ,maxAl , maxNAl , maxFa) => {
  const map = useRef(null);
  
  useEffect(() => {
    if (!container.current) return;

    mapboxgl.accessToken = accessToken;
    map.current = new mapboxgl.Map({
      container: container.current,
      style: mapStyle,
      center: [-89.3985, 32.3547],
      zoom: 6,
    });

    map.current.on('load', () => {
      map.current.addSource('counties', {
        type: 'geojson',
        data: data,
      });

      // Add the world-layer
      map.current.addLayer({
        'id': 'world-layer',
        'type': 'background',
        'paint': {
          'background-color': 'rgba(0, 0, 0, 0.7)' // grey with 0.2 opacity
        }
      });

      // Add the counties-layer
      map.current.addLayer({
        'id': 'counties-layer',
        'type': 'fill',
        'source': 'counties',
        'layout': {},
        'paint': getLayerPaintConfig(),
      });

      // Add the counties-borders
      map.current.addLayer({
        'id': 'counties-borders',
        'type': 'line',
        'source': 'counties',
        'layout': {},
        'paint': {
          'line-width': 2,
          'line-color': '#000000'  // red if alcohol involved, else black
        }
      });

    });

    return () => {
      map.current.remove();
    };
  }, [container, accessToken, mapStyle]);

  useEffect(() => {
    if (map.current.getSource('counties')) {
      // Update the data in the source
      map.current.getSource('counties').setData(data);

      // Update the paint configuration in the layer
      map.current.setPaintProperty('counties-layer', 'fill-color', getLayerPaintConfig()['fill-color']);
    }
  }, [data, involmenemt, fatalities]);

  const getLayerPaintConfig = () => {
    return !fatalities ? {
      'fill-color': [
        'interpolate',
        ['linear'], 
        ['get', involmenemt ? "notAlcoholInvolved" : "alcoholInvolved"],
        0, 'rgba(173, 216, 230, 1)', 
        (involmenemt ? maxNAl : maxAl), 'rgba(0, 0, 139, 1)'
      ],
      'fill-opacity': 0.7
    } : {
      'fill-color': [
        'interpolate',
        ['linear'], 
        ['get', 'Fatalities'],
        0, 'rgba(173, 216, 230, 1)', 
        maxFa, 'rgba(0, 0, 139, 1)'
      ],
      'fill-opacity': 0.7
    };
  };
};

export default useMapbox;
