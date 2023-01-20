import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import AgregarPlato from "./screens/AgregarPlato"
import HomeScreen from "./screens/HomeScreen"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/agregarplato" element={<AgregarPlato/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
