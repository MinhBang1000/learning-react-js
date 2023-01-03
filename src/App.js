import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import Navbar from "./components/Navbar"
const App = () => {

  return (
    <> 
      <Navbar />
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/contact" element={<ContactPage />}/>
      </Routes>
    </>
  )
}

export default App