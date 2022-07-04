import { useEffect, useState } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";


function App() {
  const [tasksItem, setTasksItem] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  function createNewTask(taskName) {
    if (!tasksItem.find(task => task.name === taskName)) {
      setTasksItem([...tasksItem, { name: taskName, done: false }])
    }
  }

  const toggleTask = task => {
    setTasksItem(tasksItem.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    )
  }

  useEffect(() => {
    let data = localStorage.getItem('task')
    if (data) {
      setTasksItem(JSON.parse(data))
    }
  }, [])

  const cleanTasks = () => {
    setTasksItem(tasksItem.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasksItem))
  }, [tasksItem])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable
        tasks={tasksItem}
        toggleTask={toggleTask}
      />

      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      />
      {
        showCompleted === true && (
          <TaskTable
            tasks={tasksItem}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )
      }
    </div>
  );
}

export default App;
