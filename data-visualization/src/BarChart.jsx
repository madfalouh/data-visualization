import { Bar } from "react-chartjs-2";
function BarChart({ chartData }) {

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
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  );
}
export default BarChart;