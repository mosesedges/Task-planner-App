import React from "react";
import { useState } from "react";

const AddTask = ({ addNewTask }) => {
  const [text, setText] = useState("");
  const [dayTime, setDayTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    addNewTask({ text, dayTime, reminder });
    setText("");
    setDayTime("");
    setReminder(false);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Add Task</label>
      <input
        type="text"
        required
        className="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label>Day & Time</label>
      <input
        type="text"
        required
        className="text"
        placeholder="Add Day & Time"
        value={dayTime}
        onChange={(e) => setDayTime(e.target.value)}
      />
      <label className="label">Set reminder</label>
      <input
        type="checkbox"
        checked={reminder}
        className="check-reminder"
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}
      />
      <button className="submit">Submit</button>
    </form>
  );
};

export default AddTask;
