/* eslint-disable react/jsx-key */
import "./App.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LiquorIcon from '@mui/icons-material/Liquor';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import MopedIcon from '@mui/icons-material/Moped';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { useState } from "react";
import WcIcon from "@mui/icons-material/Wc";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TodayIcon from "@mui/icons-material/Today";
import ElderlyIcon from "@mui/icons-material/Elderly";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { AddRoad, DirectionsCar } from "@mui/icons-material";
import TabCard from "./TabCard";;
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
import MenuIcon from '@mui/icons-material/Menu';
Chart.register(CategoryScale);

function App() {

const [open, setOpen ] =useState(true)

  const cnt = [
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
  ];

  const [components, setComponents] = useState(cnt[0]);

  const [selected, setSelected] = useState("Month");

  return (
    <div className="container">
  <MenuIcon  className="burger-icon" style={{color : "#fff" , cursor :"pointer" }}  onClick ={()=>{ setOpen((old) =>{return !old} )   }}     > </MenuIcon>
      <div className={`firt-section  open  ${open  && " toggle-side" }   `}   >
        <div className="side-element"  style={{backgroundColor : "#6998F5"}} > <LiquorIcon></LiquorIcon> Alcohol Fatalities</div>
        <div className="side-element"> <DirectionsBikeIcon></DirectionsBikeIcon> Bycle Fatalities</div>
              <div className="side-element"> <TwoWheelerIcon></TwoWheelerIcon>  Cyclist Fatalities</div>
              <div className="side-element"> <VaccinesIcon></VaccinesIcon>  Drug Fatalities</div>
              <div className="side-element"> <MopedIcon></MopedIcon> Motocycle Fatalities</div>

</div>






      <div className="second-section">
        <div className="second-section-inner">
          <div className="options">
            <div
              onClick={() => {
                setComponents(cnt[0]);
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
                setComponents(cnt[1]);
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
                setComponents(cnt[2]);
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
                setComponents(cnt[3]);
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
                setComponents(cnt[4]);
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
                setComponents(cnt[5]);
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
                setComponents(cnt[6]);
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
                setComponents(cnt[7]);
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
                setComponents(cnt[8]);
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
                setComponents(cnt[9]);
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
