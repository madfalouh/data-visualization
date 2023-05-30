import React from 'react'
import dataA from "../predestrian_a_inj_2020/day of week";
import dataAB from "../predestrian_ab_inj_2020/day of week";
import dataFatalities from "../predestrian_fatal_long_list/day of week";
import dataInjuries from "../predestrian_all_inj_2020/day of week";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useCallback, useEffect, useRef, useState } from "react";

import exportingInit from 'highcharts/modules/exporting';
import exportCSV from 'highcharts/modules/export-data';

exportingInit(Highcharts);
exportCSV(Highcharts);

function DayOfWeekChart() {
const chartComponent1 = useRef();

  let scale = 0 ; 
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { // Typical breakpoint for mobile screens
      scale =  0.8;
    } else {
      scale = 0.7;
    }


const [chartWidth, setChartWidth] = useState(window.innerWidth * scale);

console.log(chartWidth);

  const handleResize = useCallback(() => {
    setChartWidth(window.innerWidth * scale);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    const charts = [
      chartComponent1.current.chart,

    ];
    charts.forEach((chart) => {
      const width = chartWidth;
      console.log(width);
      let pointWidth = Math.max(Math.round(width / 100), 0.1);
      pointWidth = Math.min(Math.max(pointWidth, 0.1), 15);
      const pointPadding = pointWidth / 15;
      chart.update(
        {
          plotOptions: {
            column: {
              pointWidth,
              pointPadding,
            },
          },
        },
        false
      );
      chart.redraw();
    });
  }, [chartWidth]);

  const options = {
    chart: {
      type: "column",
      backgroundColor: "rgba(255, 255, 255, 0)",
      height: 600,
      width: chartWidth,
    },
    title: {
      text: " Predestrian Related Crashes",
      style: {
        color: "#ffffff",
      },
    },
    xAxis: {
      categories: dataA.labels,
      labels: {
        style: {
          color: "#ffffff",
        },
      },
    },
  yAxis: {
  title: {
    text: "",
    style: {
      color: "#ffffff",
    },
  },
  labels: {
    style: {
      color: "#ffffff",
    },
  },
},
    plotOptions: {
      column: {
        pointPadding: 0.2,
        groupPadding: 0.1,
        borderWidth: 0,
        borderRadius: 5,
        pointWidth: 12, // Adjust the value as needed
      },
    },
    series: [
      {
        name: "Type A",
        data: dataA.datasets[0].data,
        color: Highcharts.getOptions().colors[0],
        borderColor: Highcharts.getOptions().colors[0],
        borderWidth: 1,
      },
      {
        name: "Type A&B",
        data: dataAB.datasets[0].data,
        color: Highcharts.getOptions().colors[1],
        borderColor: Highcharts.getOptions().colors[1],
        borderWidth: 1,
      },
      {
        name: "All Fatalities", 
        data: dataFatalities.datasets[0].data,
        color: Highcharts.getOptions().colors[2],
        borderColor: Highcharts.getOptions().colors[2],
        borderWidth: 1,
      },
      {
        name: "All Injuries",
        data: dataInjuries.datasets[0].data,
        color: Highcharts.getOptions().colors[3],
        borderColor: Highcharts.getOptions().colors[3],
        borderWidth: 1,
      },
    ],

    legend: {
      itemStyle: {
        color: "#ffffff",
      },
      itemHoverStyle: {
        color: "#ffffff",
      },
    },

    exporting: {
      buttons: {
        contextButton: {
          menuItems: ["downloadPNG", "downloadCSV"],
        },
      },
    },
  };

  return (
    <>
      <div className="charts">
        <HighchartsReact
          highcharts={Highcharts}
          ref={chartComponent1}
          options={options}
        />

      </div>
    </>
  )
}

export default DayOfWeekChart
