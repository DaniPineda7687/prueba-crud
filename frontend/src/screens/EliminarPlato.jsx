import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const EliminarPlato=()=>{
    const[id,setId]=useState("");
    const navigate = useNavigate();
    const handleEliminarPlato=async(e)=>{
        e.preventDefault();
        try{
            const {data} = await axios.get(`http://localhost:3000/api/platos/eliminar/${id}`);
            console.log(data);
            if(data.deletedCount>0){
                toast("Se elimino el plato correctamente",{
                    type:"success"
                })
            }else{
                toast("No se encontro el plato con ese id",{
                    type:"error",
                })
            }
        }catch(err){
            toast("Ocurrio un error, reintentelo",{
                type:"error",
            })
        }
    
    }
    return(
        <div>
            <form className="form-add-plato" onSubmit={handleEliminarPlato}>
                <label htmlFor="idPlato">Id del plato
                    <input type="text" name="idPlato" id="idPlato" onChange={(e)=>setId(e.target.value)}/>
                </label>
                <button>Eliminar plato</button>
            </form>
            <button onClick={()=>navigate("/")} className="button-back">Volver atras</button>
        </div>
    );
}

export default EliminarPlato;