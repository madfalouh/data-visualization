// src/Map.js
import useMapbox from "./useMapbox";
import "../../Map.css";
import { useEffect, useRef, useState } from "react";
import { feature } from "topojson-client";
import * as d3 from 'd3';
import dataCSV from "../MapData/typeA/dataCSV";
import dataCSVAB from "../MapData/typeAB/dataCSVAB";
import dataCSVINJ from "../MapData/All injuries/dataCSVINJ";
import dataFatls from "../MapData/Fatalities/dataFatls";
import data from  '../../CountyData'
const MAPBOX_ACCESS_TOKEN ="pk.eyJ1IjoibWFkZmFsb3VoIiwiYSI6ImNsaGducmV3MzBmcmkzc2w5c25zY2ZsaTkifQ.qOZpdZGPS6IiY3YZfMqlHQ";
const MAPBOX_STYLE = "mapbox://styles/mapbox/streets-v11";
const CountyChart_BC = () => {
  const mapContainer = useRef(null);
const [switchData  , setSwitchData  ]= useState(false) ;

 

const dataa = addPropertiesToTopojson(dataCSV, data);
const dataAB = addPropertiesToTopojson(dataCSVAB, data);
const dataFtls = addPropertiesToTopojsonFtls(dataFatls, data);
const dataALL = addPropertiesToTopojson(dataCSVINJ, data);

const [fatalities, setFatalities] = useState(false);

function addPropertiesToTopojson(originalData, topojson) {
  const topojsonCopy = JSON.parse(JSON.stringify(topojson));

  topojsonCopy.objects.cb_2015_mississippi_county_20m.geometries.forEach(function(feature) {
    const county = originalData.find(function(c) {
      return c.County === feature.properties.NAME;
    });

    if (county) {
      feature.properties.alcoholInvolved = county.Not_Applicable || 0;
      feature.properties.notAlcoholInvolved = county.Not_Applicable || 0;
    }
  });

  return topojsonCopy;
}

function addPropertiesToTopojsonFtls(originalData, topojson) {
  const topojsonCopy = JSON.parse(JSON.stringify(topojson));

  topojsonCopy.objects.cb_2015_mississippi_county_20m.geometries.forEach(function(feature) {
    const county = originalData.find(function(c) {
      return c.County.toLowerCase() === feature.properties.NAME.toLowerCase();
    });
    if (county) {
      feature.properties.Fatalities = county.Fatalities || 0;
    }
  });

  return topojsonCopy;
}

const geojsonData = feature(dataa, dataa.objects.cb_2015_mississippi_county_20m);
const geojsonDataAB = feature(dataAB, dataAB.objects.cb_2015_mississippi_county_20m);
const geojsonDataALL = feature(dataALL, dataALL.objects.cb_2015_mississippi_county_20m);
const geojsonDataFtls = feature(dataFtls, dataFtls.objects.cb_2015_mississippi_county_20m);

const [datMap, setDataMap] = useState(geojsonDataALL);

const handleOptionChange = (event) => {
  const value = event.target.value;
  if (value === "All Injuries") {
    setDataMap(geojsonDataALL);
    setFatalities(false);
  }
  if (value === "Type A") {
    setDataMap(geojsonData);
    setFatalities(false);
  }
  if (value === "Type A & B") {
    setDataMap(geojsonDataAB);
    setFatalities(false);
  }
  if (value === "Fatalities") {
    setDataMap(geojsonDataFtls);
    setFatalities(true);
  }
};

const features = datMap.features;

let maxAlcoholInvolved = 0;
for (const feature of features) {
  if (feature.properties && feature.properties.alcoholInvolved) {
    const notAlcoholInvolved = feature.properties.alcoholInvolved;
    if (notAlcoholInvolved > maxAlcoholInvolved) {
      maxAlcoholInvolved = notAlcoholInvolved;
    }
  }
}

let maxNotAlcoholInvolved = 0;
for (const feature of features) {
  if (feature.properties && feature.properties.notAlcoholInvolved) {
    const notAlcoholInvolved = feature.properties.notAlcoholInvolved;
    if (notAlcoholInvolved > maxNotAlcoholInvolved) {
      maxNotAlcoholInvolved = notAlcoholInvolved;
    }
  }
}

let maxNotAlcoholInvolvedFatalities = 0;
for (const feature of features) {
  if (feature.properties && feature.properties.Fatalities) {
    const notAlcoholInvolved = feature.properties.Fatalities;
    if (notAlcoholInvolved > maxNotAlcoholInvolvedFatalities) {
      maxNotAlcoholInvolvedFatalities = notAlcoholInvolved;
    }
  }
}

console.log(geojsonDataFtls);

useMapbox(mapContainer, MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE, datMap, switchData, fatalities, maxAlcoholInvolved, maxNotAlcoholInvolved, maxNotAlcoholInvolvedFatalities);

 return (
    <>
      <div ref={mapContainer} className="map-container" />
      <div className="select-type">
        <div className="select-dropdown" onChange={handleOptionChange}>
          <select>
            <option value="All Injuries">All Injuries</option>
            <option value="Fatalities">Fatalities</option>
            <option value="Type A">Type A</option>
            <option value="Type A & B">Type A & B</option>
          </select>
        </div>


        <div className="legend-"></div>
      </div>
    </>
  );

}

export default  CountyChart_BC 