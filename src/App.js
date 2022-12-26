import { useRef } from "react"
import { addTask, deleteTask, setTask, useStore } from "./store"

const App = () => {

  const [state, dispatch] = useStore()
  const {task, tasks} = state
  const taskInput = useRef()
  const handleSetTask = (value) =>{
    dispatch(setTask(value))
  }
  const handleAddTask = () => {
    dispatch(addTask())
    dispatch(setTask(''))
    taskInput.current.focus()
  }
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className="app" style={{padding: 20}}> 
      <h1>Todo List</h1>
      <div>
        <input 
          placeholder="Enter task ...."
          ref={taskInput}
          value={task}
          onChange={e => handleSetTask(e.target.value)}
        />
        <button
          onClick={handleAddTask}
        >
          Add
        </button>
        <ul>
          { tasks.map(task => <li key={task.id}>{task.task}<b onClick={() => handleDeleteTask(task.id)}>x</b></li>) }
        </ul>
      </div>
    </div>
  )
}

export default App