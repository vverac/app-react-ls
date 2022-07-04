// eliminando tareas hechas
// 
import React from 'react';
import TaskRow from './TaskRow';



const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

  const taskTableRow = (doneValue) => {
    console.log(doneValue)
    return (
      tasks
        .filter(task => task.done === doneValue)
        .map(task => (
          < TaskRow
            task={task}
            key={task.name}
            toggleTask={toggleTask}
          />
        )))
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRow(showCompleted)
        }
      </tbody>
    </table>
  )
}

export default TaskTable