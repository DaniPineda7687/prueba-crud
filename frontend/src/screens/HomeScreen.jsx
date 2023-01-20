import { Link } from "react-router-dom";

const HomeScreen=()=>{
    return(
        <div className="main-container">
            <h1>Inicio</h1>
            <div className="options-container">
                <Link to="/agregarplato">Agregar plato</Link>
                <Link to="/verplatos">Ver platos</Link>  
            </div>
        </div>
    );
}

export default HomeScreen;