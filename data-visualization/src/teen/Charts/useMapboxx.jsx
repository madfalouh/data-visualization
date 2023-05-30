import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const useMapboxx = (container, accessToken, mapStyle, data, involmenemt, fatalities, maxAl, maxNAl, maxFa) => {
  const map = useRef(null);
  const currentLayerId = useRef('counties-layer');
  const borderLayerId = 'counties-borders';


  const fatalitiesRef = useRef(fatalities);
  const involmenemtRef = useRef(involmenemt);

  // update refs when value changes
  useEffect(() => {
    fatalitiesRef.current = fatalities;
    involmenemtRef.current = involmenemt;
  }, [fatalities, involmenemt]);

  // Create a new popup instance
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

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

      map.current.addLayer({
        id: 'world-layer',
        type: 'background',
        paint: {
          'background-color': 'rgba(0, 0, 0, 0.2)',
        },
      });

      addLayer();

      map.current.addLayer({
        id: borderLayerId,
        type: 'line',
        source: 'counties',
        layout: {},
        paint: {
          'line-width': 1,
          'line-color': '#000',
        },
      });

      createLegend();

      // Add event listeners for mouse move and mouse leave events
map.current.on('mousemove', function (e) {

  var features = map.current.queryRenderedFeatures(e.point, { layers: [currentLayerId.current] });
  if (features.length > 0) {
    map.current.getCanvas().style.cursor = 'pointer';

console.log(features[0].properties);

    var description = `
      <p>${features[0].properties.name}</p>
        <p>Crashes: ${ fatalitiesRef.current ? features[0].properties.Fatalities : (involmenemtRef.current ? features[0].properties.notAlcoholInvolved : features[0].properties.alcoholInvolved) }</p>
    `;

    popup.setLngLat(e.lngLat).setHTML(description).addTo(map.current);
  } else {
    map.current.getCanvas().style.cursor = '';
    popup.remove();
  }
});
    });

    return () => {
      map.current.remove();
    };
  }, [container, accessToken, mapStyle]);

  useEffect(() => {
    if (!map.current.getSource('counties')) return;

    addLayer();
  }, [data, involmenemt, fatalities, maxAl, maxNAl, maxFa]);

  useEffect(() => {
    createLegend();
  }, [involmenemt, fatalities, maxAl, maxNAl, maxFa]);

  const createLegend = () => {
    const legend = document.getElementById('legend');
    if (legend) legend.parentNode.removeChild(legend);

    const legendDiv = document.createElement('div');
    legendDiv.id = 'legend';
    legendDiv.style.display = 'block';
    legendDiv.style.position = 'absolute';
    legendDiv.style.bottom = '30px';
    legendDiv.style.backgroundColor = '#fff';
    legendDiv.style.padding = '10px';
    legendDiv.style.fontFamily = 'Arial';
    legendDiv.style.zIndex = '1';
    container.current.appendChild(legendDiv);

    const maxVal = fatalities ? maxFa : involmenemt ? maxNAl : maxAl;

    const labels = [
      { color: 'rgba(173, 216, 230, 1)', label: '0 Crashes' },
      { color: 'rgba(135, 206, 235, 1)', label: `${Math.round((maxVal * 0.25) * 100) / 100} Crashes` },
      { color: 'rgba(70, 130, 180, 1)', label: `${Math.round((maxVal * 0.5) * 100) / 100} Crashes` },
      { color: 'rgba(0, 0, 139, 1)', label: `${maxVal} Crashes` },
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
      legendDiv.appendChild(item);
    });
  };

  const addLayer = () => {
    const property = fatalities ? 'Fatalities' : involmenemt ? 'notAlcoholInvolved' : 'alcoholInvolved';
    const maxValue = fatalities ? maxFa : involmenemt ? maxNAl : maxAl;

    let stops = [0];
    if (maxValue > 1) stops.push(Math.round((maxValue * 0.25) * 100) / 100);
    if (maxValue > 2) stops.push(Math.round((maxValue * 0.5) * 100) / 100);
    stops.push(maxValue);

    const colors = ['rgba(173, 216, 230, 1)', 'rgba(135, 206, 235, 1)', 'rgba(70, 130, 180, 1)', 'rgba(0, 0, 139, 1)'];

    let fillColors = ['interpolate', ['linear'], ['get', property]];
    stops.forEach((stop, i) => {
      fillColors.push(stop);
      fillColors.push(colors[i]);
    });

    const layerConfig = {
      id: currentLayerId.current,
      type: 'fill',
      source: 'counties',
      layout: {},
      paint: {
        'fill-color': fillColors,
        'fill-opacity': 1,
      },
    };

    if (map.current.getLayer(currentLayerId.current)) {
      map.current.removeLayer(currentLayerId.current);
    }

    if (map.current.getSource('counties')) {
      map.current.getSource('counties').setData(data);
    } else {
      map.current.addSource('counties', {
        type: 'geojson',
        data: data,
      });
    }

    map.current.addLayer(layerConfig);
  };

};

export default useMapboxx;
