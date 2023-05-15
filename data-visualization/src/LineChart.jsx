import { Line } from "react-chartjs-2";
function LineChart({ chartData }) {

const options = {
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      type: 'category',
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 50,
        callback: function(value) {
          return value % 50 === 0 ? value : '';
        },
      },
    },
  },
};



  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={options}
      />
    </div>
  );
}
export default LineChart;