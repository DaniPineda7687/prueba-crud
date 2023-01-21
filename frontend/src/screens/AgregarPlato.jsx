import { useState } from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import axios from "axios"
const AgregarPlato=()=>{
    const navigate = useNavigate();
    const[idPlato,setId]=useState("");
    const[color,setColor]=useState("");
    const[precio,setPrecio]=useState(0);
    const[nombre,setNombre]=useState("");
    const[fecha,setFecha]=useState("");
    
    const handleSubmitForm=async(e)=>{
        e.preventDefault();
        if(idPlato.length===0||color.length===0||precio.length===0||nombre.length===0||fecha.length===0){
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
            return;
        }

        try{
            const{data}=await axios.post("http://localhost:3000/api/platos/registrar",{
                idPlato,
                color,
                precio,
                nombre,
                fecha,
            })
            console.log(data);
            toast("Registro exitoso",{
                type:"success"
            })
        }catch(err){

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

            <button onClick={()=>navigate("/")} className="button-back">Volver atras</button>
        </div>
    );
}

export default AgregarPlato;