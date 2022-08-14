import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [chartData, setChartData] = useState({});
  const [haveData, setHaveData] = useState(false);

  var dataset = {
    label: `results of the election`,
    data: [65, 59, 80, 35, 23],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ],
    borderWidth: 1,
  };

  useEffect(() => {
    try {
      axios.get("http://127.0.0.1:5000/results").then((response) => {
        setChartData({
          labels: response.data.result.map((x) => x.vote),
          datasets: [
            {
              ...dataset,
              data: response.data.result.map((x) => x.amount),
            },
          ],
        });
        setHaveData(true);
      });
    } catch (error) {
      setHaveData(false);
      console.log("error loading?");
    }
  }, []);

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
  };

  if (!haveData) {
    return <div>Loading data...</div>;
  } else {
    return (
      <div className="results-container">
        <div className="header">
          <h1>The Results</h1>
        </div>
        <div className="sub-header">
          <h2>This is How the Youth Voted</h2>
        </div>
        <div className="body">
          {errorMessage}
          <Bar data={chartData} height={400} options={options} />
        </div>
      </div>
    );
  }
};

export default BarChart;
