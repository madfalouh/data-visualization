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
import { AddRoad, AssistWalker, DirectionsCar } from "@mui/icons-material";
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
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";
import AgeChart_Drug from "./drug/Charts/AgeChart_Drug";
import DayOfWeekChart_Drug from "./drug/Charts/DayOfWeekChart_Drug";
import GenderChart_Drug from "./drug/Charts/GenderChart_Drug";
import RaceChart_Drug from "./drug/Charts/RaceChart_Drug";
import RoadChart_Drug from "./drug/Charts/RoadChart_Drug";
import TimeOfDayChart_Drug from "./drug/Charts/TimeOfDayChart_Drug";
import VehiculeChart_Drug from "./drug/Charts/VehiculeChart_Drug";
import MonthChart_Drug from "./drug/Charts/MonthChart_Drug";

import AgeChart_Speed from "./speeding/Charts/AgeChart_Speed";
import DayOfWeekChart_Speed from "./speeding/Charts/DayOfWeekChart_Speed";
import GenderChart_Speed from "./speeding/Charts/GenderChart_Speed";
import RaceChart_Speed from "./speeding/Charts/RaceChart_Speed";
import RoadChart_Speed from "./speeding/Charts/RoadChart_Speed";
import TimeOfDayChart_Speed from "./speeding/Charts/TimeOfDayChart_Speed";
import VehiculeChart_Speed from "./speeding/Charts/VehiculeChart_Speed";
import MonthChart_Speed from "./speeding/Charts/MonthChart_Speed";

import AgeChart_Bicycle from "./bicycle/Charts/AgeChart_Bicycle";
import DayOfWeekChart_Bicycle from "./bicycle/Charts/DayOfWeekChart_Bicycle";
import GenderChart_Bicycle from "./bicycle/Charts/GenderChart_Bicycle";
import RaceChart_Bicycle from "./bicycle/Charts/RaceChart_Bicycle";
import RoadChart_Bicycle from "./bicycle/Charts/RoadChart_Bicycle";
import TimeOfDayChart_Bicycle from "./bicycle/Charts/TimeOfDayChart_Bicycle";
import VehiculeChart_Bicycle from "./bicycle/Charts/VehiculeChart_Bicycle";
import MonthChart_Bicycle from "./bicycle/Charts/MonthChart_Bicycle";

import AgeChart_Child from "./child/Charts/AgeChart_Child";
import DayOfWeekChart_Child from "./child/Charts/DayOfWeekChart_Child";
import GenderChart_Child from "./child/Charts/GenderChart_Child";
import RaceChart_Child from "./child/Charts/RaceChart_Child";
import TimeOfDayChart_Child from "./child/Charts/TimeOfDayChart_Child";
import MonthChart_Child from "./child/Charts/MonthChart_Child";
import SpeedIcon from '@mui/icons-material/Speed';
import AgeChart_INJ from "./inj/Charts/AgeChart_INJ";
import DayOfWeekChart_INJ from "./inj/Charts/DayOfWeekChart_INJ";
import GenderChart_INJ from "./inj/Charts/GenderChart_INJ";
import RaceChart_INJ from "./inj/Charts/RaceChart_INJ";
import TimeOfDayChart_INJ from "./inj/Charts/TimeOfDayChart_INJ";
import MonthChart_INJ from "./inj/Charts/MonthChart_INJ";
import RoadChart_INJ from "./inj/Charts/RoadChart_INJ";
import VehiculeChart_INJ from "./inj/Charts/VehiculeChart_INJ";

import AgeChart_mtrc from "./mtrcycl/Charts/AgeChart_mtrc";
import DayOfWeekChart_mtrc from "./mtrcycl/Charts/DayOfWeekChart_mtrc";
import GenderChart_mtrc from "./mtrcycl/Charts/GenderChart_mtrc";
import RaceChart_mtrc from "./mtrcycl/Charts/RaceChart_mtrc";
import TimeOfDayChart_mtrc from "./mtrcycl/Charts/TimeOfDayChart_mtrc";
import MonthChart_mtrc from "./mtrcycl/Charts/MonthChart_mtrc";
import RoadChart_mtrc from "./mtrcycl/Charts/RoadChart_mtrc";
import VehiculeChart_mtrc from "./mtrcycl/Charts/VehiculeChart_mtrc";

import AgeChart_Occ from "./occupant/Charts/AgeChart_Occ";
import DayOfWeekChart_Occ from "./occupant/Charts/DayOfWeekChart_Occ";
import GenderChart_Occ from "./occupant/Charts/GenderChart_Occ";
import RaceChart_Occ from "./occupant/Charts/RaceChart_Occ";
import TimeOfDayChart_Occ from "./occupant/Charts/TimeOfDayChart_Occ";
import MonthChart_Occ from "./occupant/Charts/MonthChart_Occ";
import RoadChart_Occ from "./occupant/Charts/RoadChart_Occ";
import VehiculeChart_Occ from "./occupant/Charts/VehiculeChart_Occ";


import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import AgeChart_UN from "./unbelt/Charts/AgeChart_UN";
import DayOfWeekChart_UN from "./unbelt/Charts/DayOfWeekChart_UN";
import GenderChart_UN from "./unbelt/Charts/GenderChart_UN";
import RaceChart_UN from "./unbelt/Charts/RaceChart_UN";
import TimeOfDayChart_UN from "./unbelt/Charts/TimeOfDayChart_UN";
import MonthChart_UN from "./unbelt/Charts/MonthChart_UN";
import RoadChart_UN from "./unbelt/Charts/RoadChart_UN";
import VehiculeChart_UN from "./unbelt/Charts/VehiculeChart_UN";
import LabelIcon from "@mui/icons-material/Label";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import CityChart from "./bicycle/Charts/cityChart";
import NoData from "./NoData";
import CityChart_Speed from "./speeding/Charts/CityChart_Speed";
import CountyChart_Speed from "./speeding/Charts/CountyChart_Speed";
import CountyChart_Drug from "./drug/Charts/CountyChart_Drug";
import CityChart_Drug from "./drug/Charts/CityChart_Drug";
import CityChart_BC from "./bicycle/Charts/CityChart_BC";
import CountyChart_BC from "./bicycle/Charts/CountyChart_BC";
Chart.register(CategoryScale);

function App() {
  const [open, setOpen] = useState(false);

  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  const cnt = [
    [
      //0
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
    ],
    [
      //1
      <MonthChart_Drug></MonthChart_Drug>,
      <TimeOfDayChart_Drug></TimeOfDayChart_Drug>,
      <DayOfWeekChart_Drug></DayOfWeekChart_Drug>,
      <GenderChart_Drug></GenderChart_Drug>,
      <RaceChart_Drug></RaceChart_Drug>,
      <AgeChart_Drug></AgeChart_Drug>,
      <CityChart_Drug></CityChart_Drug> ,
      <CountyChart_Drug></CountyChart_Drug> ,

      <VehiculeChart_Drug></VehiculeChart_Drug>,
      <RoadChart_Drug></RoadChart_Drug>,
    ],

    [
      //2

      <MonthChart_Occ></MonthChart_Occ>,
      <TimeOfDayChart_Occ></TimeOfDayChart_Occ>,
      <DayOfWeekChart_Occ></DayOfWeekChart_Occ>,
      <GenderChart_Occ></GenderChart_Occ>,
      <RaceChart_Occ></RaceChart_Occ>,
      <AgeChart_Occ></AgeChart_Occ>,
      <CityMap></CityMap>,
      <CountyMap></CountyMap>,
      <VehiculeChart_Occ></VehiculeChart_Occ>,
      <RoadChart_Occ></RoadChart_Occ>,
    ],

    [
      //3
      <MonthChart_Speed></MonthChart_Speed>,
      <TimeOfDayChart_Speed></TimeOfDayChart_Speed>,
      <DayOfWeekChart_Speed></DayOfWeekChart_Speed>,
      <GenderChart_Speed></GenderChart_Speed>,
      <RaceChart_Speed></RaceChart_Speed>,
      <AgeChart_Speed></AgeChart_Speed>,
      
      <CityChart_Speed></CityChart_Speed> ,
      <CountyChart_Speed></CountyChart_Speed> ,

      <VehiculeChart_Speed></VehiculeChart_Speed>,

      <RoadChart_Speed></RoadChart_Speed>,
    ],

    [
      //4
      <MonthChart_UN></MonthChart_UN>,
      <TimeOfDayChart_UN></TimeOfDayChart_UN>,
      <DayOfWeekChart_UN></DayOfWeekChart_UN>,
      <GenderChart_UN></GenderChart_UN>,
      <RaceChart_UN></RaceChart_UN>,
      <AgeChart_UN></AgeChart_UN>,

      <CityMap></CityMap>,
      <CountyMap></CountyMap>,

      <VehiculeChart_UN></VehiculeChart_UN>,
      <RoadChart_UN></RoadChart_UN>,
    ],

    [
      //5
      <MonthChart_mtrc></MonthChart_mtrc>,
      <TimeOfDayChart_mtrc></TimeOfDayChart_mtrc>,
      <DayOfWeekChart_mtrc></DayOfWeekChart_mtrc>,
      <GenderChart_mtrc></GenderChart_mtrc>,
      <RaceChart_mtrc></RaceChart_mtrc>,
      <AgeChart_mtrc></AgeChart_mtrc>,

      <CityMap></CityMap>,
      <CountyMap></CountyMap>,

      <VehiculeChart_mtrc></VehiculeChart_mtrc>,
      <RoadChart_mtrc></RoadChart_mtrc>,
    ],

    [
      //6
      <MonthChart_INJ></MonthChart_INJ>,
      <TimeOfDayChart_INJ></TimeOfDayChart_INJ>,
      <DayOfWeekChart_INJ></DayOfWeekChart_INJ>,
      <GenderChart_INJ></GenderChart_INJ>,
      <RaceChart_INJ></RaceChart_INJ>,
      <AgeChart_INJ></AgeChart_INJ>,

      <CityMap></CityMap>,
      <CountyMap></CountyMap>,

      <VehiculeChart_INJ></VehiculeChart_INJ>,
      <RoadChart_INJ></RoadChart_INJ>,
    ],

    [
      //7
      <MonthChart_Child></MonthChart_Child>,
      <TimeOfDayChart_Child></TimeOfDayChart_Child>,
      <DayOfWeekChart_Child></DayOfWeekChart_Child>,
      <GenderChart_Child></GenderChart_Child>,
      <RaceChart_Child></RaceChart_Child>,
      <AgeChart_Child></AgeChart_Child>,
      <CityMap></CityMap>,
      <CountyMap></CountyMap>,
      <NoData></NoData>,
      <NoData></NoData>,
    ],

    [
      //8
      <AgeChart_mtrc></AgeChart_mtrc>,
      <DayOfWeekChart_mtrc></DayOfWeekChart_mtrc>,
      <GenderChart_mtrc></GenderChart_mtrc>,
      <RaceChart_mtrc></RaceChart_mtrc>,
      <TimeOfDayChart_mtrc></TimeOfDayChart_mtrc>,
      <MonthChart_mtrc></MonthChart_mtrc>,
      <RoadChart_mtrc></RoadChart_mtrc>,
      <VehiculeChart_mtrc></VehiculeChart_mtrc>,
    ],

    [
      //9
      <MonthChart_Bicycle></MonthChart_Bicycle>,
      <TimeOfDayChart_Bicycle></TimeOfDayChart_Bicycle>,
      <DayOfWeekChart_Bicycle></DayOfWeekChart_Bicycle>,
      <RaceChart_Bicycle></RaceChart_Bicycle>,
      <GenderChart_Bicycle></GenderChart_Bicycle>,
      <AgeChart_Bicycle></AgeChart_Bicycle>,

      <CityChart_BC></CityChart_BC> , 
      <CountyChart_BC></CountyChart_BC> ,
      <VehiculeChart_Bicycle></VehiculeChart_Bicycle>,
      <RoadChart_Bicycle></RoadChart_Bicycle>,
    ],
  ];

  const [components, setComponents] = useState(cnt[i][j]);

  const [selected, setSelected] = useState("Month");

  const [selectedData, setSelectedData] = useState("Alcohol");

  useEffect(() => {
    setComponents(cnt[i][j]);
  }, [i, j]);

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
      <div className={`firt-section  open  ${open && " toggle-side"}   `}>
        <div
          className="side-element"
          style={
            selectedData === "Alcohol" ? { backgroundColor: "#6998F5" } : {}
          }
          onClick={() => {
            setSelectedData("Alcohol");
            setI(0);
          }}
        >
          <LiquorIcon></LiquorIcon> Alcohol Crashes
        </div>

        <div
          className="side-element"
          style={selectedData === "Drug" ? { backgroundColor: "#6998F5" } : {}}
          onClick={() => {
            setSelectedData("Drug");
            setI(1);
          }}
        >
          <VaccinesIcon></VaccinesIcon> Drug Crashes
        </div>

        <div
          className="side-element"
          style={
            selectedData === "speeding" ? { backgroundColor: "#6998F5" } : {}
          }
          onClick={() => {
            setSelectedData("speeding");
            setI(3);
          }}
        >
          <SpeedIcon></SpeedIcon> Speeding Crashes
        </div>
        <div
          className="side-element"
          style={
            selectedData === "Cyclist" ? { backgroundColor: "#6998F5" } : {}
          }
          onClick={() => {
            setSelectedData("Cyclist");
            setI(9);
          }}
        >
          <DirectionsBikeIcon></DirectionsBikeIcon> Cyclist Crashes
        </div>

        <div
          className="side-element"
          style={
            selectedData === "Motocycle" ? { backgroundColor: "#6998F5" } : {}
          }
          onClick={() => {
            setI(8);
            setSelectedData("Motocycle");
          }}
        >
          <TwoWheelerIcon></TwoWheelerIcon> Motocycle Crashes
        </div>

        <div
          className="side-element"
          style={
            selectedData === "Injuries" ? { backgroundColor: "#6998F5" } : {}
          }
          onClick={() => {
            setI(6);

            setSelectedData("Injuries");
          }}
        >
          <AssistWalkerIcon></AssistWalkerIcon> Injuries
        </div>

        <div
          className="side-element"
          style={
            selectedData === "Unbelt" ? { backgroundColor: "#6998F5" } : {}
          }
          onClick={() => {
            setSelectedData("Unbelt");
            setI(4);
          }}
        >
          <LabelIcon></LabelIcon> Unbelted Crashes
        </div>
        <div
          className="side-element"
          style={
            selectedData === "Children" ? { backgroundColor: "#6998F5" } : {}
          }
          onClick={() => {
            setSelectedData("Children");
            setI(7);
          }}
        >
          <EscalatorWarningIcon></EscalatorWarningIcon> Child Restraint Crashes
        </div>
        <div
          className="side-element"
          style={
            selectedData === "Occupent" ? { backgroundColor: "#6998F5" } : {}
          }
          onClick={() => {
            setI(2);
            setSelectedData("Occupent");
          }}
        >
          <SensorOccupiedIcon></SensorOccupiedIcon> Occupant Protection Crashes
        </div>
      </div>

      <div className="second-section">
        <div className="second-section-inner">
          <div className="options">
            <div
              onClick={() => {
                setJ(0);
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
                setJ(1);
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
                setJ(2);
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
                setJ(3);
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
                setJ(4);
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
                setJ(5);
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
                setJ(6);
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
                setJ(7);
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
                setJ(8);
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
                setJ(9);
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
