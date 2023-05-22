import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const useMapboxx = (container, accessToken, mapStyle, data, involmenemt, fatalities, maxAl, maxNAl, maxFa) => {

console.log(data)


  const map = useRef(null);
  const currentLayerId = useRef(null);
  const borderLayerId = 'counties-borders';
  const legend = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    // Initialize map only once
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

      map.current.addLayer({
        id: 'world-layer',
        type: 'background',
        paint: {
          'background-color': 'rgba(0, 0, 0, 0.2)',
        },
      });

      addLayer();
      updateLegend();
    });

    return () => {
      map.current.remove();
    };
  }, [container, accessToken, mapStyle]); // Only initialize map once

  useEffect(() => {
    if (map.current && map.current.isStyleLoaded()) {
      addLayer();
      updateLegend();
    }
  }, [data, involmenemt, fatalities, maxAl, maxNAl, maxFa]);

  const addLayer = () => {
    if (currentLayerId.current) {
      map.current.removeLayer(currentLayerId.current);
      map.current.removeLayer(borderLayerId);
    }

    const maxValue = fatalities ? maxFa : involmenemt ? maxNAl : maxAl;
    const layerConfig = {
      id: 'counties-layer',
      type: 'fill',
      source: 'counties',
      layout: {},
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', fatalities ? 'Fatalities' : (involmenemt ? 'notAlcoholInvolved' : 'alcoholInvolved')],
          0,
          'rgba(173, 216, 230, 1)',
          Math.round(maxValue * 0.25),
          'rgba(135, 206, 235, 1)',
          Math.round(maxValue * 0.5),
          'rgba(70, 130, 180, 1)',
          maxValue,
          'rgba(0, 0, 139, 1)',
        ],
        'fill-opacity': 1,
      },
    };

    map.current.addLayer(layerConfig);
    currentLayerId.current = layerConfig.id;

    map.current.addLayer({
      id: borderLayerId,
      type: 'line',
      source: 'counties',
      layout: {},
      paint: {
        'line-width': 0.2,
        'line-color': '#000',
      },
    });
  };

  const updateLegend = () => {
    // Clear previous legend content
    if (legend.current) {
      legend.current.innerHTML = '';
    } else {
      legend.current = document.createElement('div');
      legend.current.id = 'legend';
      legend.current.style.display = 'block';
      legend.current.style.position = 'absolute';
      legend.current.style.bottom = '30px';
      legend.current.style.backgroundColor = '#fff';
      legend.current.style.padding = '10px';
      legend.current.style.fontFamily = 'Arial';
      legend.current.style.zIndex = '1';
      container.current.appendChild(legend.current);
    }

    const maxVal = fatalities ? maxFa : involmenemt ? maxNAl : maxAl;

    const labels = [
      { color: 'rgba(173, 216, 230, 1)', label: '0 Fatalities' },
      { color: 'rgba(135, 206, 235, 1)', label: `${Math.round(maxVal * 0.25)} Fatalities` },
      { color: 'rgba(70, 130, 180, 1)', label: `${Math.round(maxVal * 0.5)} Fatalities` },
      { color: 'rgba(0, 0, 139, 1)', label: `${maxVal} Fatalities` },
    ];

    labels.forEach((label) => {
      const item = document.createElement('div');
      const key = document.createElement('span');
      key.className = 'legend-key';
      key.style.display = 'inline-block';
      key.style.borderRadius = '3px';
      key.style.width = '10px';
      key.style.height = '10px';
      key.style.marginRight = '10px';
      key.style.background = label.color;

      const value = document.createElement('span');
      value.innerHTML = label.label;
      item.appendChild(key);
      item.appendChild(value);
      legend.current.appendChild(item);
    });
  };

  useEffect(() => {
    updateLegend();
  }, [fatalities, involmenemt, maxAl, maxNAl, maxFa]);

  return { map, legend };
};

export default useMapboxx;
