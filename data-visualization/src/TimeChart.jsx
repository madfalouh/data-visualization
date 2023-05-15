import React from 'react'
import {Line } from 'react-chartjs-2';



function TimeChart({dataTime , optionsTime }) {
  return (
       <div className="chart-container">
      <Line
        data={dataTime}
        options={optionsTime}
      />
    </div>
  )
}

export default TimeChart
