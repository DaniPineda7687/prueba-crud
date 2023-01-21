import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import AgregarPlato from "./screens/AgregarPlato"
import HomeScreen from "./screens/HomeScreen"
import VerPlatos from "./screens/VerPlatos"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/agregarplato" element={<AgregarPlato/>}/>
        <Route path="/verPlatos" element={<VerPlatos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
