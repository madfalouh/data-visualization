import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const useMapboxx = (container, accessToken, mapStyle, data, involmenemt, fatalities, maxAl, maxNAl, maxFa) => {
  const map = useRef(null);
  const currentLayerId = useRef(null);
  const borderLayerId = 'counties-borders';
  
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
          'background-color': 'rgba(0, 0, 0, 0.2)' // grey with 0.2 opacity
        }
      });

      // Create our initial layer
      addLayer();

      // Add your counties borders
      map.current.addLayer({
        'id': borderLayerId,
        'type': 'line',
        'source': 'counties',
        'layout': {},
        'paint': {
          'line-width': 0.2,
          'line-color': '#000'
        }
      });

      // Create legend
      const legend = document.createElement('div');
      legend.id = 'legend';
      legend.style.display = 'block';
      legend.style.position = 'absolute';
      legend.style.bottom = '30px';
      legend.style.right = '10px';
      legend.style.backgroundColor = '#fff';
      legend.style.padding = '10px';
      legend.style.fontFamily = 'Arial';
      legend.style.zIndex = '1';

      const labels = [
        { color: 'rgba(173, 216, 230, 1)', label: '0 Fatalities' },
        { color: 'rgba(0, 0, 139, 1)', label: `${maxFa} Fatalities` },
      ];

      labels.forEach(label => {
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.display = 'inline-block';
        key.style.borderRadius = '3px';
        key.style.width = '10px';
        key.style.height = '10px';
        key.style.marginRight = '5px';
        key.style.background = label.color;

        const value = document.createElement('span');
        value.innerHTML = label.label;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
      });

      container.current.appendChild(legend);
    });

    return () => {
      map.current.remove();
    };
  }, [container, accessToken, mapStyle]);

  useEffect(() => {
    if (map.current.getSource('counties')) {
      // First, remove the existing layer
      if (currentLayerId.current) {
        map.current.removeLayer(currentLayerId.current);
        map.current.removeLayer(borderLayerId);
      }

      map.current.removeSource('counties');
      map.current.addSource('counties', {
        type: 'geojson',
        data: data,
      });

      // Add the layer with the updated source
      addLayer();

      // Add your counties borders
      map.current.addLayer({
        'id': borderLayerId,
        'type': 'line',
        'source': 'counties',
        'layout': {},
        'paint': {
          'line-width': 1,
          'line-color': '#000'
        }
      });
    }
  }, [data, involmenemt, fatalities]);

  const addLayer = () => {
    const layerConfig = !fatalities ? {
      'id': 'counties-layer-',
      'type': 'fill',
      'source': 'counties',
      'layout': {},
      'paint': {
        'fill-color': [
          'interpolate',
          ['linear'], 
          ['get', involmenemt ? "notAlcoholInvolved" : "alcoholInvolved"],
          0, 'rgba(173, 216, 230, 1)', 
          (involmenemt ? maxNAl : maxAl), 'rgba(0, 0, 139, 1)'
        ],
        'fill-opacity': 1
      }
    } : {
      'id': 'counties-layer',
      'type': 'fill',
      'source': 'counties',
      'layout': {},
      'paint': {
        'fill-color': [
          'interpolate',
          ['linear'], 
          ['get', 'Fatalities'],
          0, 'rgba(173, 216, 230, 1)', 
          maxFa, 'rgba(0, 0, 139, 1)'
        ],
        'fill-opacity': 1
      }
    };

    // Add the layer and update the ref with the new layer id
    map.current.addLayer(layerConfig);
    currentLayerId.current = layerConfig.id;
  };
};

export default useMapboxx;
