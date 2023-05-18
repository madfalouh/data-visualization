// src/Map.js
import useMapboxx from "./useMapboxx";
import "./Map.css";
import { useRef, useState } from "react";
import { feature } from "topojson-client";
import * as d3 from 'd3';
import data from "./alcohol/MapData/data";
import dattaa from './alcohol/MapData/originaldata'
import dataInj from "./alcohol/MapData/AllINJ_city/dataAllinj";
import Fatal_cities from "./alcohol/MapData/FatalitiesCities/Fatal_city";
import dataA_city from "./alcohol/MapData/typeA_city/dataA_city";
import dataAB_city from "./alcohol/MapData/typeAB_city/typeAB_city";
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibWFkZmFsb3VoIiwiYSI6ImNsaGducmV3MzBmcmkzc2w5c25zY2ZsaTkifQ.qOZpdZGPS6IiY3YZfMqlHQ";
const MAPBOX_STYLE = "mapbox://styles/mapbox/streets-v11";

const CityMap = () => {
  const mapContainer = useRef(null);
const [switchData  , setSwitchData  ]= useState(true) ;
 


function addPropertiesToGeojson(originalData, geojson) {
  const geojsonCopy = JSON.parse(JSON.stringify(geojson));


  geojsonCopy.features.forEach(function(feature) {
    const city = originalData.find(function(c) {

      return c.city === feature.properties.name;
    });

    if (city) {
        feature.properties.alcoholInvolved = city.alcoholInvolved|| 0;
      feature.properties.notAlcoholInvolved = city.notAlcoholInvolved || 0;
    }
  });

  return geojsonCopy;
}


function addPropertiesToGeojsonftls(originalData, geojson) {
  const geojsonCopy = JSON.parse(JSON.stringify(geojson));

  geojsonCopy.features.forEach(function(feature) {
    const city = originalData.find(function(c) {

      return c.city.toLowerCase() === feature.properties.name.toLowerCase();
    });

    if (city) { 
    feature.properties.Fatalities = city.Fatalities|| 0;
}
  });

  return geojsonCopy;
}



const geojsonDataA = addPropertiesToGeojson( dataA_city , data)

console.log(geojsonDataA);

 const geojsonDataFtls = addPropertiesToGeojsonftls( Fatal_cities , data)

console.log(geojsonDataFtls);


 const geojsonDataALL = addPropertiesToGeojson( dataInj , data )

console.log(geojsonDataALL);

  const geojsonDataAB  = addPropertiesToGeojson( dataAB_city , data)

const [fatalities , setFatalities ] = useState(false ) ;  




const [datMap , setDataMap] =useState(geojsonDataALL )


  const handleOptionChange = (event) => {
const value  = event.target.value
if(value ==="All Injuries"){

console.log("All Injuries");


console.log(geojsonDataALL);

setDataMap( geojsonDataALL )
setFatalities(false)

}
if(value ==="Type A"){

console.log("Type A");

console.log(geojsonDataA);

setDataMap(  geojsonDataA )
setFatalities(false)

} 
if(value ==="Type A & B"){
setDataMap( geojsonDataAB ) 
setFatalities(false)

 }


if(value ==="Fatalities"){
setDataMap( geojsonDataFtls ) 
setFatalities(true)
 }

  };


  useMapboxx(mapContainer, MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE, datMap  , switchData  , fatalities );

   return (<> <div ref={mapContainer} className="map-container" /> 


<div className="select-type" >
 <div className="select-dropdown"  onChange={handleOptionChange}  >
    <select>
      <option value="All Injuries">All Injuries</option>
      <option value="Fatalities">Fatalities</option>
      <option value="Type A" >Type A</option>
      <option value="Type A & B">Type A & B</option>

    </select>
  </div>

<div className={`toggle   ${ fatalities &&  "show-fatal" }   ` }   title= { switchData ?   "Not alcohol Involved"  : "Alcohol Involved" } >


  <input type="checkbox" id="a"   onClick={ () =>{ setSwitchData( (old)=> { return !old }  ) } }   />
  <label htmlFor="a">
  </label>
</div>
</div>

 </> );
};

export default CityMap;
