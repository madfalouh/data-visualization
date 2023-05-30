// src/Map.js
import useMapboxx from "./useMapboxx";
import "../../Map.css";
import { useRef, useState } from "react";
import data from "../MapData/data";
import dataInj from "../MapData/AllINJ_city/dataAllinj";
import Fatal_cities from "../MapData/FatalitiesCities/Fatal_city";
import dataA_city from "../MapData/typeA_city/dataA_city";
import dataAB_city from "../MapData/typeAB_city/typeAB_city";

const MAPBOX_ACCESS_TOKEN ="pk.eyJ1IjoibWFkZmFsb3VoIiwiYSI6ImNsaGducmV3MzBmcmkzc2w5c25zY2ZsaTkifQ.qOZpdZGPS6IiY3YZfMqlHQ";
const MAPBOX_STYLE = "mapbox://styles/madfalouh/clhz3clmy04hb01p44ugbemsr";


const CityChart_UN = () => {
  const mapContainer = useRef(null);
  const [switchData, setSwitchData] = useState(true);

  function addPropertiesToGeojson(originalData, geojson) {
    const geojsonCopy = JSON.parse(JSON.stringify(geojson));

    geojsonCopy.features.forEach(function (feature) {
      const city = originalData.find(function (c) {
        return c.City === feature.properties.name;
      });

      if (city) {
         console.log(city);
        feature.properties.alcoholInvolved = city.Teen || 0;
        feature.properties.notAlcoholInvolved = city.Non_Teen  || 0;
      }
    });

    return geojsonCopy;
  }

function addPropertiesToGeojsonftls(originalData, geojson) {
  const geojsonCopy = JSON.parse(JSON.stringify(geojson));

  geojsonCopy.features.forEach(function (feature) {
    const city = originalData.find(function (c) {
      return c.City.toLowerCase() === feature.properties.name.toLowerCase();
    });

    feature.properties.Fatalities = city ? city.Fatalities || 0 : 0;
  });

  return geojsonCopy;
}


  const geojsonDataA = addPropertiesToGeojson(dataA_city, data);
  const geojsonDataFtls = addPropertiesToGeojsonftls(Fatal_cities, data);
  const geojsonDataALL = addPropertiesToGeojson(dataInj, data);
  const geojsonDataAB = addPropertiesToGeojson(dataAB_city, data);

  const [fatalities, setFatalities] = useState(false);
  const [datMap, setDataMap] = useState(geojsonDataALL);

const handleOptionChange = (event) => {
  const value = event.target.value;
  let updatedDataMap;

  if (value === "All Injuries") {
    updatedDataMap = addPropertiesToGeojson(dataInj, data);
    setFatalities(false);
  } else if (value === "Type A") {
    updatedDataMap = addPropertiesToGeojson(dataA_city, data);
    setFatalities(false);
  } else if (value === "Type A & B") {
    updatedDataMap = addPropertiesToGeojson(dataAB_city, data);
    setFatalities(false);
  } else if (value === "Fatalities") {
    updatedDataMap = addPropertiesToGeojsonftls(Fatal_cities, data);
    setFatalities(true);
  }

  setDataMap(updatedDataMap);
};

  const features = datMap.features;

  let maxAlcoholInvolved = 0;

  for (const feature of features) {
    if (feature.properties && feature.properties.alcoholInvolved) {
      const alcoholInvolved = feature.properties.alcoholInvolved;
      if (alcoholInvolved > maxAlcoholInvolved) {
        maxAlcoholInvolved = alcoholInvolved;
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
      const fatalities = feature.properties.Fatalities;
      if (fatalities > maxNotAlcoholInvolvedFatalities) {
        maxNotAlcoholInvolvedFatalities = fatalities;
      }
    }
  }

  useMapboxx(
    mapContainer,
    MAPBOX_ACCESS_TOKEN,
    MAPBOX_STYLE,
    datMap,
    switchData,
    fatalities,
    maxAlcoholInvolved,
    maxNotAlcoholInvolved,
    maxNotAlcoholInvolvedFatalities
  );

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

        <div className={` ${!fatalities &&  "toggle" }   ${fatalities && "show-fatal"}`} title={switchData ? "Not Speeding Involved" : "Speeding Involved"}>
          <p>Speeding Involved</p>
          <input
            type="checkbox"
            id="a"
            onClick={() => {
              setSwitchData((old) => {
                return !old;
              });
            }}
          />
          <label htmlFor="a"></label>
          <p>Not Speeding Involved</p>
        </div>

        <div className="legend-"></div>
      </div>
    </>
  );
};

export default CityChart_UN;
