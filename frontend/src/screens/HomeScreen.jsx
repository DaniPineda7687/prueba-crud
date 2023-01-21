import { Link } from "react-router-dom";

const HomeScreen=()=>{
    return(
        <div className="main-container">
            <h1>Inicio</h1>
            <div className="options-container">
                <Link to="/agregarplato">Agregar plato</Link>
                <Link to="/verplatos">Ver platos</Link> 
                <Link to="/eliminarplato">Eliminar plato</Link> 
                <Link to="/actualizarplato">Actualizar plato</Link>   
            </div>
        </div>
    );
}

export default HomeScreen;