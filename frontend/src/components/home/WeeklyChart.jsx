import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

// Import the CSS
import "../../styles/WeeklyChart.css";

export default function WeeklyChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Start of current week (Monday)
  const [weekStart, setWeekStart] = useState(getStartOfWeek(new Date()));

  // ---------- Helpers ----------
  function getStartOfWeek(date) {
    const d = new Date(date);
    const day = d.getDay(); // 0 = Sunday
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust to Monday
    return new Date(d.setDate(diff));
  }

  function getWeekLabels(startDate) {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      return d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      });
    });
  }

  function getMockData() {
    // Replace with real data later
    return {
      done: [40, 50, 60, 70, 65, 55, 45],
      undone: [40, 30, 25, 20, 25, 30, 35],
      cancel: [20, 20, 15, 10, 10, 15, 20],
    };
  }

  // ---------- Chart Setup ----------
  useEffect(() => {
    const labels = getWeekLabels(weekStart);
    const data = getMockData();

    // Destroy previous chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Done",
            data: data.done,
            backgroundColor: "rgba(54, 162, 235, 0.8)",
            stack: "weekly",
          },
          {
            label: "Undone",
            data: data.undone,
            backgroundColor: "rgba(255, 205, 86, 0.8)",
            stack: "weekly",
          },
          {
            label: "Cancel",
            data: data.cancel,
            backgroundColor: "rgba(255, 99, 132, 0.8)",
            stack: "weekly",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true },
          y: {
            stacked: true,
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: (value) => `${value}%`,
            },
          },
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 20,
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
      },
    });

    // Cleanup
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [weekStart]);

  // ---------- Navigation ----------
  const goPrevWeek = () => {
    const prev = new Date(weekStart);
    prev.setDate(prev.getDate() - 7);
    setWeekStart(prev);
  };

  const goNextWeek = () => {
    const next = new Date(weekStart);
    next.setDate(next.getDate() + 7);
    setWeekStart(next);
  };

  // ---------- Render ----------
  return (
    <div className="weekly-chart-wrapper">
      <div className="weekly-chart-header">
        <button onClick={goPrevWeek} className="weekly-nav-button">
          ← Previous
        </button>

        <div className="week-title">
          Week of {weekStart.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </div>

        <button onClick={goNextWeek} className="weekly-nav-button">
          Next →
        </button>
      </div>

      <div className="weekly-chart-container">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}