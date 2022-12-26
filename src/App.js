import { useReducer } from "react";

// initState
const initState = 0

// Action 
const UP_COUNT = 'up'
const DOWN_COUNT = 'down'

// Reducer function
const reducer = (state, action) => {
  switch (action) {
    case UP_COUNT: {
      return state + 1
    }
    case DOWN_COUNT: {
      return state - 1
    }
    default: {
      throw new Error("Invalid action !")
    }
  }
}

const App = () => {
  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div className="app" style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_COUNT)}>Down</button>
      <button onClick={() => dispatch(UP_COUNT)}>Up</button>
    </div>
  );
}

export default App;
