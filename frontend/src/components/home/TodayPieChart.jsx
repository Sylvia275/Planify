import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// Import the CSS
import "../../styles/TodayPieChart.css"; // Adjust path if needed

export default function TodayPieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destroy previous chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Cancel", "Done", "Undone"],
        datasets: [
          {
            label: "Subtask",
            data: [30, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",   // Red
              "rgb(54, 162, 235)",   // Blue
              "rgb(255, 205, 86)",   // Yellow
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Hide default legend to save space
          },
          tooltip: {
            enabled: true,
          },
        },
        cutout: "70%", // Makes it more "donut-like" (optional tweak)
      },
    });

    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Run only once on mount

  return (
    <div className="today-pie-chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}