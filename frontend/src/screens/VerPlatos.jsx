import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
const VerPlatos =()=>{
    const[platos,setPlatos]=useState([]);
    const navigate = useNavigate();
    const getPlatos =async()=>{
        const {data} = await axios.get("http://localhost:3000/api/platos/");
        setPlatos(data);
    }
    const columns = [
        {
            name: 'idPlato',
            selector: row => row.idPlato,
        },
        {
            name: 'Color',
            selector: row => row.color,
        },
        ,
        {
            name: 'Precio',
            selector: row => row.precio,
        },
        ,
        {
            name: 'Nombre',
            selector: row => row.nombre,
        },
        {
            name: 'Fecha',
            selector: row => row.fechaInicio,
        },
    ];
    useEffect(()=>{
        getPlatos();
    },[])
    return(
        <div>
            {
                platos.length>0
                ?
                <DataTable
                    columns={columns}
                    data={platos}
                />
                :
                <h1>No hay platos para mostrar</h1>
            }
            <button onClick={()=>navigate("/")} className="button-back">Volver atras</button>
        </div>
    )
}

export default VerPlatos;