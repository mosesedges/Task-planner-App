import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, reminder }) => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          reminder={() => reminder(task.id)}
        />
      ))}
    </div>
  );
};

// Tasks.defaultProps = {
//   tasks: [
//     {
//       id: 1,
//       text: "Milk the Cow",
//       day: "Nov 5th at 10am",
//       reminder: true,
//     },
//   ],
// };

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Tasks;
