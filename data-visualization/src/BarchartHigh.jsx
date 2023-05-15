import dataA from "./alcohol/TypeA/month";
import dataAB from "./alcohol/TypeAB/monthInj";
import dataFatalities from "./alcohol/Fatalities/monthInj";
import dataInjuries from "./alcohol/Allinjuries/mounthAllInj";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function BarchartHigh() {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "rgba(255, 255, 255, 0)",
      height: 600,
      width: 1400,
    },
    title: {
      text: "Monthly Alcohol Involvement",
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
        text: "Number of Cases",
        style: {
          color: "#ffffff",
        },
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        groupPadding: 0.1,
        borderWidth: 0,
        borderRadius: 5,
        pointWidth: 15, // Adjust the value as needed
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
        name: "Type AB",
        data: dataAB.datasets[0].data,
        color: Highcharts.getOptions().colors[1],
        borderColor: Highcharts.getOptions().colors[1],
        borderWidth: 1,
      },
      {
        name: "All Injuries",
        data: dataFatalities.series[0].data,
        color: Highcharts.getOptions().colors[2],
        borderColor: Highcharts.getOptions().colors[2],
        borderWidth: 1,
      },
      {
        name: "All Fatalities",
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

  const options1 = {
    chart: {
      type: "column",
      backgroundColor: "rgba(255, 255, 255, 0)",
      height: 600,
      width: 1400,
    },
    title: {
      text: "Monthly Not Alcohol Involved",
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
        text: "Number of Cases",
        style: {
          color: "#ffffff",
        },
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        groupPadding: 0.1,
        borderWidth: 0,
        borderRadius: 5,
        pointWidth: 15, // Adjust the value as needed
      },
    },
    series: [
      {
        name: "Type A",
        data: dataA.datasets[1].data,
        color: Highcharts.getOptions().colors[0],
        borderColor: Highcharts.getOptions().colors[0],
        borderWidth: 1,
      },
      {
        name: "Type AB",
        data: dataAB.datasets[1].data,
        color: Highcharts.getOptions().colors[1],
        borderColor: Highcharts.getOptions().colors[1],
        borderWidth: 1,
      },

      {
        name: "All Fatalities",
        data: dataInjuries.datasets[1].data,
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
        <HighchartsReact highcharts={Highcharts} options={options} />

        <HighchartsReact highcharts={Highcharts} options={options1} />
      </div>
    </>
  );
}
