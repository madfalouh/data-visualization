// src/Map.js
import useMapboxx from "./useMapboxx";
import "./Map.css";
import { useRef, useState } from "react";
import { feature } from "topojson-client";
import * as d3 from 'd3';
import data from "./alcohol/MapData/data";
import dattaa from './alcohol/MapData/originaldata'
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibWFkZmFsb3VoIiwiYSI6ImNsaGducmV3MzBmcmkzc2w5c25zY2ZsaTkifQ.qOZpdZGPS6IiY3YZfMqlHQ";
const MAPBOX_STYLE = "mapbox://styles/mapbox/streets-v11";

const CityMap = () => {
  const mapContainer = useRef(null);
const [switchData  , setSwitchData  ]= useState(true) ;
 


function addPropertiesToGeojson(originalData, geojson) {
  geojson.features.forEach(function(feature) {
    const city = originalData.find(function(c) {
      return c.City === feature.properties.NAME;
    });

    if (city) {
      feature.properties.alcoholInvolved = city.alcoholInvolved || 0;
      feature.properties.notAlcoholInvolved = city.notAlcoholInvolved || 0;
    }
  });

  return geojson;
}

const mydata = addPropertiesToGeojson(dattaa , data)


  useMapboxx(mapContainer, MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE, mydata  , switchData );

  return (<> <div ref={mapContainer} className="map-container" /> 

<div className="toggle"   title= { switchData ?   "Not alcohol Involved"  : "Alcohol Involved" } >
  <input type="checkbox" id="a"   onClick={ () =>{ setSwitchData( (old)=> { return !old }  ) } }   />
  <label htmlFor="a">
  </label>
</div>


 </> );
};

export default CityMap;
