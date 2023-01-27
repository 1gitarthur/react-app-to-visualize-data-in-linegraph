import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = ({ data }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    setChartData({
      labels: data.map(entry => entry.label),
      datasets: [
        {
          label: 'Line Graph',
          data: data.map(entry => entry.value),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderWidth: 4
        }
      ]
    });
  }, [data]);

  return (
    <div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: { text: 'Line Graph', display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};

export default LineGraph;
