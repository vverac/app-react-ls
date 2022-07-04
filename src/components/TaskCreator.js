import { useState } from "react";
import React from "react";

const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setnewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    setnewTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => {
          setnewTaskName(e.target.value);
        }}
      />
      <button>
        Save task
      </button>
    </form>
  );
};

export default TaskCreator;
