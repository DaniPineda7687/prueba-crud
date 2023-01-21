import express from "express"
import Plato from "../models/Platos.js";

const PlatosRoutes = express.Router();


PlatosRoutes.get("/reset",async(req,res)=>{
    
    await Plato.deleteMany({});
})

PlatosRoutes.get("/",async(req,res)=>{
    
    const platos = await Plato.find({});  
    res.send(platos);
})

PlatosRoutes.post("/registrar",async(req,res)=>{
    const idPlato = req.body.idPlato;
    const color = req.body.color;
    const precio = req.body.precio;
    const nombre = req.body.nombre;
    const fechaInicio = req.body.fecha;
    const newPlato = await Plato.insertMany({
        idPlato,
        color,
        precio,
        nombre,
        fechaInicio,
    })
    res.send(newPlato)
})

PlatosRoutes.get("/eliminar/:idPlato",async(req,res)=>{
    const{idPlato}=req.params;
    const plato =await Plato.deleteOne({idPlato:idPlato})
    if(plato){
        res.send(plato)
    }else{
        res.status(404).send("No se encontro el plato")
    }
})
PlatosRoutes.put("/actualizar",async(req,res)=>{
    const idPlato = req.body.idPlato;
    const color = req.body.color;
    const precio = req.body.precio;
    const nombre = req.body.nombre;
    const fechaInicio = req.body.fecha;
    const filter = { idPlato:idPlato };
    const update = { color,precio,nombre,fechaInicio };
    const platoObj = await Plato.findOne({idPlato:idPlato});
    if(platoObj){
        const plato = await Plato.findOneAndUpdate(filter,update);
    }else{
        res.status(404).send("No se encontro ese plato")
    }

})


export default PlatosRoutes;