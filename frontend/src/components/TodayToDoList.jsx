import React from "react";
import StatusDropdown from "./buttons/StatusDropdown";
import "./TodayToDoList.css";

const plans = [
  {
    id: 1,
    title: "Plan 1",
    tasks: [
      "Finish task 1",
      "Review notes",
      "Complete subtask A",
    ],
  },
  {
    id: 2,
    title: "Plan 2",
    tasks: [
      "Start project outline",
      "Do research",
      "Prepare presentation",
    ],
  },
];

const TodayToDoList = () => {
  return (
    <div className="today-todo-wrapper">
      {/* Header */}
      <div className="today-todo-header">
        <h2>Today To-do List</h2>
      </div>

      {/* Plans */}
      {plans.map((plan) => (
        <div className="today-plan-card" key={plan.id}>
          <h3>{plan.title}</h3>

          <ul className="today-todo-list">
            {plan.tasks.map((task, index) => (
              <li className="todo-item" key={index}>
                <span className="todo-text">{task}</span>

                <div className="todo-status">
                  <StatusDropdown />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TodayToDoList;
