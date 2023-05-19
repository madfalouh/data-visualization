/* eslint-disable react/jsx-key */
import "./App.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LiquorIcon from "@mui/icons-material/Liquor";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import MopedIcon from "@mui/icons-material/Moped";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import { useEffect, useState } from "react";
import WcIcon from "@mui/icons-material/Wc";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TodayIcon from "@mui/icons-material/Today";
import ElderlyIcon from "@mui/icons-material/Elderly";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { AddRoad, DirectionsCar } from "@mui/icons-material";
import TabCard from "./TabCard";
import MonthChart from "./alcohol/Charts/monthChart";
import TimeOfDayChart from "./alcohol/Charts/timeOfDayChart";
import DayOfWeekChar from "./alcohol/Charts/DayOfWeekChart";
import GenderChart from "./alcohol/Charts/GenderChart";
import RaceChart from "./alcohol/Charts/RaceChart";
import AgeChart from "./alcohol/Charts/AgeChart";
import VehiculeChart from "./alcohol/Charts/VehiculeChart";
import RoadChart from "./alcohol/Charts/RoadChart";
import CountyMap from "./CountyMap";
import CityMap from "./CityMap";
import MenuIcon from "@mui/icons-material/Menu";


import AgeChart_Drug from "./drug/Charts/AgeChart_Drug";
import DayOfWeekChart_Drug from "./drug/Charts/DayOfWeekChart_Drug";
import GenderChart_Drug from "./drug/Charts/GenderChart_Drug";
import RaceChart_Drug from "./drug/Charts/RaceChart_Drug";
import RoadChart_Drug from "./drug/Charts/RoadChart_Drug";
import TimeOfDayChart_Drug from "./drug/Charts/TimeOfDayChart_Drug";
import VehiculeChart_Drug from "./drug/Charts/VehiculeChart_Drug";
import MonthChart_Drug from "./drug/Charts/MonthChart_Drug";


Chart.register(CategoryScale);

function App() {
  const [open, setOpen] = useState(false);

const [i, setI] = useState(0);
const [j, setJ] = useState(0);

  const cnt = [

[
    <MonthChart></MonthChart>,
    <TimeOfDayChart></TimeOfDayChart>,
    <DayOfWeekChar></DayOfWeekChar>,
    <GenderChart></GenderChart>,
    <RaceChart></RaceChart>,
    <AgeChart></AgeChart>,
    <CityMap></CityMap>,
    <CountyMap></CountyMap>,
    <VehiculeChart></VehiculeChart>,
    <RoadChart></RoadChart>,

]  
, 

[
    <MonthChart_Drug></MonthChart_Drug>,
    <TimeOfDayChart_Drug></TimeOfDayChart_Drug> ,
    <AgeChart_Drug></AgeChart_Drug>,
    <DayOfWeekChart_Drug></DayOfWeekChart_Drug>,
    <GenderChart_Drug></GenderChart_Drug>,
    <RaceChart_Drug></RaceChart_Drug>,
    <RoadChart_Drug></RoadChart_Drug>,
    <CityMap></CityMap>,
    <CountyMap></CountyMap>,
    <VehiculeChart_Drug></VehiculeChart_Drug>,
]

  ];

  const [components, setComponents] = useState(cnt[i][j]);

  const [selected, setSelected] = useState("Month");

  const [selectedData, setSelectedData] = useState("Alcohol");


useEffect (() =>{

setComponents(cnt[i][j]);

} , [i, j] )



  return (
    <div className="container">
      <MenuIcon
        className="burger-icon"
        style={{ color: "#fff", cursor: "pointer" }}
        onClick={() => {
          setOpen((old) => {
            return !old;
          });
        }}
      ></MenuIcon>
      <div className={`firt-section  open  ${open && " toggle-side"}   `}    >
        <div className="side-element"  style={selectedData === "Alcohol" ? { backgroundColor: "#6998F5" } : {}}    onClick={()=> {  setSelectedData("Alcohol")  ; setI(0) }}     >
          <LiquorIcon></LiquorIcon> Alcohol Fatalities
        </div>

        <div className="side-element"   style={selectedData === "Drug" ? { backgroundColor: "#6998F5" } : {}}  onClick={()=> {  setSelectedData("Drug")  ; setI(1)  }}  >
          <VaccinesIcon></VaccinesIcon> Drug Fatalities
        </div>

        <div className="side-element"    style={selectedData === "speeding" ? { backgroundColor: "#6998F5" } : {}}  onClick={()=> {  setSelectedData("speeding")  ; setI(1)  }}    >
          <DirectionsBikeIcon></DirectionsBikeIcon> Speeding Fatalities
        </div>
        <div className="side-element"  onClick={()=> {  selectedData("Alcohol") }}   >
          <TwoWheelerIcon></TwoWheelerIcon> Cyclist Fatalities
        </div>

        <div className="side-element"   onClick={()=> {  selectedData("Alcohol") }}   >
          <MopedIcon></MopedIcon> Motocycle Fatalities
        </div>
      </div>

      <div className="second-section">
        <div className="second-section-inner">
          <div className="options">
            <div
              onClick={() => {
          
                setJ(0)
                setSelected("Month");
              }}
            >
              <TabCard
                icon={CalendarMonthIcon}
                label="Month"
                selected={selected === "Month"}
              />
            </div>
            <div
              onClick={() => {
                

                setJ(1)
                setSelected("Time of Day");
              }}
            >
              <TabCard
                icon={AccessTimeIcon}
                label="Time of Day"
                selected={selected === "Time of Day"}
              />
            </div>
            <div
              onClick={() => {
                  setJ(2)
                setSelected("Day of the week");
              }}
            >
              <TabCard
                icon={TodayIcon}
                label="Day of the week"
                selected={selected === "Day of the week"}
              />
            </div>
            <div
              onClick={() => {
                  setJ(3)
                setSelected("Gender");
              }}
            >
              <TabCard
                icon={WcIcon}
                label="Gender"
                selected={selected === "Gender"}
              />
            </div>
            <div
              onClick={() => {
                  setJ(4)
                setSelected("Race");
              }}
            >
              <TabCard
                icon={SupervisorAccountIcon}
                label="Race"
                selected={selected === "Race"}
              />
            </div>
            <div
              onClick={() => {
                  setJ(5)
                setSelected("Age");
              }}
            >
              <TabCard
                icon={ElderlyIcon}
                label="Age"
                selected={selected === "Age"}
              />
            </div>
            <div
              onClick={() => {
                  setJ(6)
                setSelected("City");
              }}
            >
              <TabCard
                icon={ApartmentIcon}
                label="City"
                selected={selected === "City"}
              />
            </div>
            <div
              onClick={() => {
                  setJ(7)
                setSelected("County");
              }}
            >
              <TabCard
                icon={MyLocationIcon}
                label="County"
                selected={selected === "County"}
              />
            </div>
            <div
              onClick={() => {
                  setJ(8)
                setSelected("Vehicle");
              }}
            >
              <TabCard
                icon={DirectionsCar}
                label="Vehicle"
                selected={selected === "Vehicle"}
              />
            </div>
            <div
              onClick={() => {
                 setJ(9)
                setSelected("Roadway");
              }}
            >
              <TabCard
                icon={AddRoad}
                label="Roadway"
                selected={selected === "Roadway"}
              />
            </div>
          </div>

          <div className="body-chart-bd">
            <div className="body-chart">{components}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
