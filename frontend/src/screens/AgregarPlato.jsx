import { useState } from "react";
import {toast} from "react-toastify"
const AgregarPlato=()=>{
    
    const[id,setId]=useState("");
    const[color,setColor]=useState("");
    const[precio,setPrecio]=useState(0);
    const[nombre,setNombre]=useState("");
    const[fecha,setFecha]=useState("");
    
    const handleSubmitForm=(e)=>{
        e.preventDefault();
        if(id.length===0||color.length===0||precio.length===0||nombre.length===0||fecha.length===0){
            toast("Debe completar todos los campos antes de continuar",{
                type:"error"
            })
            return;
        }
        if(precio<9||precio>25){
            toast("Error, el precio del plato debe estar entre 9 y 25 dolares",{
                type:"error"
            })
            return;
        }
        if((nombre.trim()).split(" ").length<2){
            toast("Error, el nombre del plato debe tener mínimo dos palabras",{
                type:"error"
            })
        }

    }
    return (
        <div>
            <h1>Agregar plato</h1>
            <form className="form-add-plato" onSubmit={handleSubmitForm}>
                <label htmlFor="idPlato">Id del plato
                    <input type="text" name="idPlato" id="idPlato" onChange={(e)=>setId(e.target.value)}/>
                </label>
                <label htmlFor="color">Color del plato
                    <input type="color" name="color" id="color" onChange={(e)=>setColor(e.target.value)}/>
                </label>
                <label htmlFor="precio">Precio del plato (dolares)
                    <input type="number" name="precio" id="precio" onChange={(e)=>setPrecio(e.target.value)}/>
                </label>
                <label htmlFor="nombre">Nombre del plato
                    <input type="text" name="nombre" id="nombre" onChange={(e)=>setNombre(e.target.value)}/>
                </label>
                <label htmlFor="date-start">Fecha de inicio de actividad del plato
                    <input type="date" name="date-start" id="date-start" onChange={(e)=>setFecha(e.target.value)}/>
                </label>
                <button>Registrar nuevo plato</button>
            </form>
        </div>
    );
}

export default AgregarPlato;