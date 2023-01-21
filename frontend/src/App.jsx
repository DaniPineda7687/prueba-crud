import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import ActualizarPlato from "./screens/ActualizarPlato"
import AgregarPlato from "./screens/AgregarPlato"
import EliminarPlato from "./screens/EliminarPlato"
import HomeScreen from "./screens/HomeScreen"
import VerPlatos from "./screens/VerPlatos"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/agregarplato" element={<AgregarPlato/>}/>
        <Route path="/verPlatos" element={<VerPlatos/>}/>
        <Route path="/eliminarplato" element={<EliminarPlato/>}/>
        <Route path="/actualizarplato" element={<ActualizarPlato/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
