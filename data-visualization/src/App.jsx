/* eslint-disable react/jsx-key */
import "./App.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";
import Map from "./Map";
import { useState } from "react";
import LineChart from "./LineChart";
import WcIcon from "@mui/icons-material/Wc";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import MapIcon from "@mui/icons-material/Map";
import TodayIcon from "@mui/icons-material/Today";
import ElderlyIcon from "@mui/icons-material/Elderly";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { AddRoad, DirectionsCar } from "@mui/icons-material";
import TabCard from "./TabCard";
import TimeChart from "./TimeChart";
import PieChartRace from "./PieChartRace";
import BarChart from "./BarChart";
import BarchartHigh from "./BarchartHigh";
Chart.register(CategoryScale);

function App() {
  const genderData = {
    labels: [
      "Female (Alcohol Involved)",
      "Female (Not Alcohol Involved)",
      "Male (Alcohol Involved)",
      "Male (Not Alcohol Involved)",
      "Unknown (Alcohol Involved)",
      "Unknown (Not Alcohol Involved)",
      "NA (Not Alcohol Involved)",
    ],
    datasets: [
      {
        data: [11, 1304, 15, 1896, 0, 4, 2],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#33FF57",
          "#f7c536",
          "#9c9c9c",
          "#ff00ff",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#33FF57",
          "#f7c536",
          "#9c9c9c",
          "#ff00ff",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 120,
        fontColor: "black",
        fontSize: 12,
        padding: 15,
      },
    },
    aspectRatio: 2,
  };

  const optionsTime = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const alcoholInvolvedTotal = [
    69, 63, 59, 45, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 2, 4, 3, 4, 4, 3,
  ].reduce((a, b) => a + b, 0);
  const notAlcoholInvolvedTotal = [
    0, 0, 0, 0, 53, 60, 82, 138, 84, 106, 127, 161, 171, 173, 183, 212, 214,
    234, 195, 193, 196, 150, 123, 115,
  ].reduce((a, b) => a + b, 0);

  const dataRace = {
    labels: ["Alcohol Involved", "Not Alcohol Involved"],
    datasets: [
      {
        data: [alcoholInvolvedTotal, notAlcoholInvolvedTotal],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const dataAlcoholInvolved = {
    labels: [
      "American Indian or Alaska Native",
      "Asian or Pacific Islander",
      "Black",
      "NA",
      "Other",
      "Unknown",
      "White",
    ],
    datasets: [
      {
        data: [0, 0, 17, 0, 0, 1, 8],
        backgroundColor: [
          "red",
          "blue",
          "green",
          "yellow",
          "purple",
          "orange",
          "grey",
        ],
      },
    ],
  };

  const dataNotAlcoholInvolved = {
    labels: [
      "American Indian or Alaska Native",
      "Asian or Pacific Islander",
      "Black",
      "NA",
      "Other",
      "Unknown",
      "White",
    ],
    datasets: [
      {
        data: [16, 10, 1496, 2, 37, 36, 1609],
        backgroundColor: [
          "red",
          "blue",
          "green",
          "yellow",
          "purple",
          "orange",
          "grey",
        ],
      },
    ],
  };

  const dataAlcoholInvolvedGender = {
    labels: ["Female", "Male"],
    datasets: [
      {
        data: [11, 15],
        backgroundColor: [
          "rgba(75, 192, 192, 1)", // color for Female
          "rgba(255, 99, 132, 1)", // color for Male
        ],
      },
    ],
  };

  const dataNotAlcoholInvolvedGender = {
    labels: ["Female", "Male", "Unknown", "NA"],
    datasets: [
      {
        data: [1304, 1896, 4, 2],
        backgroundColor: [
          "rgba(75, 192, 192, 1)", // color for Female
          "rgba(255, 99, 132, 1)", // color for Male
          "rgba(255, 159, 64, 1)", // color for Unknown
          "rgba(153, 102, 255, 1)", // color for NA
        ],
      },
    ],
  };

  const dataAge = {
    labels: [
      "00-04",
      "05-09",
      "10-15",
      "16-20",
      "21-24",
      "25-29",
      "30-39",
      "40-49",
      "50-59",
      "60-69",
      "70-79",
      "80->",
      "Unk",
    ],
    datasets: [
      {
        label: "Alcohol Involved",
        data: [0, 0, 0, 4, 4, 2, 5, 4, 3, 2, 2, 0, 0],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Not Alcohol Involved",
        data: [31, 36, 88, 472, 348, 369, 604, 420, 387, 244, 107, 55, 45],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const optionsAge = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const dataVehicule = {
    labels: [
      "(Sport) utility vehicle",
      "2-wheeled motorcycle",
      "All-terrain vehicle / all-terrain cycle (ATV/ATC)",
      "Cargo van",
      "Passenger car",
      "Pickup",
      "3-wheeled motorcycle",
      "9- or 12-passenger van",
      "Autocycle",
      "Construction equipment (backhoe, bulldozer, etc.)",
      "Farm equipment (tractor, combine, harvester, etc.)",
      "Golf Cart",
      "Moped or motorized bicycle",
      "Motor home",
      "Other",
      "Other truck",
      "Passenger van (less than 9 seats)",
      "Recreational off-highway vehicles (ROV)",
      "Single-unit truck",
      "Truck tractor",
    ],
    datasets: [
      {
        label: "Alcohol Involved",
        data: [6, 1, 1, 1, 14, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Not Alcohol Involved",
        data: [
          633, 197, 39, 17, 1557, 606, 5, 1, 3, 4, 3, 3, 3, 1, 8, 2, 54, 3, 16,
          51,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const dataRoad = {
    labels: [
      "City street",
      "County road",
      "Interstate",
      "State highway",
      "US highway",
      "Off road",
      "Parking lot/private drive",
      "State park",
    ],
    datasets: [
      {
        label: "Alcohol Involved",
        data: [7, 2, 2, 8, 7, 0, 0, 0],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Not Alcohol Involved",
        data: [557, 643, 264, 1027, 681, 18, 15, 1],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const cnt = [<BarchartHigh></BarchartHigh> ,
<Map></Map>

];

  const [components, setComponents] = useState(cnt[0]);

  const [selected, setSelected] = useState("Month");

  return (
    <div className="container">
      <div className="firt-section">
        <h6>Data</h6>
        <ul>
          <li> Alcohol for individual</li>
        </ul>
      </div>

      <div className="second-section">
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
  );
}
export default App;

