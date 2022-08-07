import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const state = {
  labels: ["Labour", "Conservative", "Libdem", "Green", "UKIP"],
  datasets: [
    {
      label: "National Elections Results to Date",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 2,
      data: [65, 59, 80, 35, 23],
    },
  ],
};

const BarChart = () => {
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
      legend: {
        labels: {
          fontSize: 20,
        },
      },
    },
    // plugins: {
    //   title: {
    //     display: true,
    //     text: "Custom Chart Title",
    //     padding: {
    //       top: 10,
    //       bottom: 30,
    //     },
    //   },
    // },
  };

  return (
    <div>
      <Bar data={state} height={400} options={options} />
    </div>
  );
};

export default BarChart;
