import { useReducer, useRef } from "react";

let id = 0;
const initState = {
  task: '',
  tasks: []
}
const setTask = (payload) => {
  return {
    name: "set",
    payload
  }
}
const addTask = () => {
  return {
    name: "add"
  };
};
const delTask = (payload) => {
  return {
    name: "del",
    payload,
  };
};
const reducer = (state, action) => {
  switch (action.name) {
    case "set": {
      return {
        ...state,
        task: action.payload
      }
    }
    case "add": {
      id += 1
      const obj = {
        id: id,
        name: state.task,
      };
      return {
        ...state,
        tasks: [...state.tasks, obj]
      };
    }
    case "del":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      throw new Error("Invalid action !");
  }
};

const App = () => {
  const [todo, dispatch] = useReducer(reducer, initState);
  const taskInput = useRef()

  const handleAddTask = () => {
    dispatch(addTask())
    dispatch(setTask(''))
    taskInput.current.focus()
  }

  const handleSetTask = (value) => {
    dispatch(setTask(value))
  }

  return (
    <div className="app" style={{ padding: 20 }}>
      <h1>Todo List</h1>
      <div>
        <input
          placeholder="Enter task ..."
          value={todo.task}
          ref={taskInput}
          onChange={(e) => handleSetTask(e.target.value)}
        />
        <button
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          { todo.tasks.map((task) => {
            return <li key={task.id}>{task.name}<b onClick={() => dispatch(delTask(task.id))}>X</b></li>
          }) }
        </ul>
      </div>
    </div>
  );
};

export default App;
