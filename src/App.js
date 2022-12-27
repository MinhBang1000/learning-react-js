import Control from "./components/Controling"
import Header from "./components/Heading"
import List from "./components/Listing"


const App = () => {

  return (
    <div className="app" style={{padding: 20}}> 
      <Header />
      <Control />      
      <List />
    </div>
  )
}

export default App