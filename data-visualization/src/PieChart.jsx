// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData  , options }   ) {
  return (
    <div className="chart-container"  style={{ width: '1500px',  margin: '0 auto' }}>
      <Pie
        data={chartData} options = {options}
      />
    </div>
  );
}
export default PieChart;