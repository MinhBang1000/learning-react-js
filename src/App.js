import Header from "./components/Header"
import Control from "./components/Control"
import TaskList from "./components/TaskList"
import Card from "./components/Card"
const App = () => {

  return (
    <> 
      <Header />
      <Card>
        <Control />
      </Card>
      <Card>
        <TaskList />
      </Card>
    </>
  )
}

export default App