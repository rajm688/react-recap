import React from "react";
import { FaTimesCircle } from "react-icons/fa";
function Task({ text, day, onDelete, id, toggleRemainder, reminder }) {
  return (
    <div
      className={`task ${reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleRemainder(id)}
    >
      <h3>
        {text}
        <FaTimesCircle
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(id)}
        />
      </h3>
      <p>{day}</p>
    </div>
  );
}

export default Task;
