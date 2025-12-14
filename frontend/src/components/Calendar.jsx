import React, { useState, useEffect } from "react";
import "./Calendar.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Calendar() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    renderCalendar(currentDate);
  }, [currentDate]);

  const renderCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const daysArray = [];

    // Previous month
    for (let i = firstDay; i > 0; i--) {
      daysArray.push({
        day: prevMonthLastDay - i + 1,
        type: "fade"
      });
    }

    // Current month
    for (let i = 1; i <= lastDay; i++) {
      let type = "";
      if (
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        type = "today";
      }
      daysArray.push({ day: i, type });
    }

    // Next month
    const nextDays = 7 - new Date(year, month + 1, 0).getDay() - 1;
    for (let i = 1; i <= nextDays; i++) {
      daysArray.push({ day: i, type: "fade" });
    }

    setCalendarDays(daysArray);
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="btn" onClick={prevMonth}>
          <FaArrowLeft />
        </div>
        <div className="month-year">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <div className="btn" onClick={nextMonth}>
          <FaArrowRight />
        </div>
      </div>

      <div className="weekdays">
        <div>Sun</div><div>Mon</div><div>Tue</div>
        <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
      </div>

      <div className="days">
        {calendarDays.map((d, i) => (
          <div key={i} className={d.type}>{d.day}</div>
        ))}
      </div>
    </div>
  );
}
