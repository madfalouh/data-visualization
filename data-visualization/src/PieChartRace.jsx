// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import './DoubleChart.css'
function PieChartRace({ chartDataInv  , chartDataNInv }   ) {
  return (
<>

    <div className='pies'>
      <div  className="pie" >
        <h2>Alcohol Involved</h2>
        <Pie data={chartDataInv} />
      </div>
      <div  className="pie" >
        <h2>Not Alcohol Involved</h2>
        <Pie data={chartDataNInv} />
      </div>
    </div>

</>
 
  );
}
export default PieChartRace;