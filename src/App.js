import Content from "./components/Content"
import { useContext } from "react"
import { ThemeContext } from "./storing/ThemeContext"

const App = () => {

  const theme = useContext(ThemeContext)

  return (
    <div className="app" style={{padding: 20}}> 
      <button onClick={theme.handleTheme} >Toggle</button>
      <Content />
    </div>
  )
}

export default App