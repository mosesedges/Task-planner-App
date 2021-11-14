import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import ReactTooltip from "react-tooltip";

const Task = ({ task, onDelete, reminder }) => {
  return (
    <section className="task-container" onDoubleClick={reminder}>
      <h3 className="task-text">
        {task.text}
        <FaTrashAlt onClick={onDelete} className="icon" />
      </h3>
      <p className="task-day">
        {" "}
        {task.dayTime} {task.reminder ? (<BiTimer className="icon2" data-tip="Double Click to Remove Reminder"/>):(<BiTimer className="iconNone" data-tip="Double Click to Set Reminder"/>)}
        <ReactTooltip />
      </p>
    </section>
  );
};

export default Task;
