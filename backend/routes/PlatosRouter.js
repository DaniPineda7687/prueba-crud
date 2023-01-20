import express from "express"
import Plato from "../models/Platos.js";

const PlatosRoutes = express.Router();

PlatosRoutes.get("/platos",async(req,res)=>{
    const platos = await Plato.find({});
    res.send(platos);
})

PlatosRoutes.post("/registrar",(req,res)=>{

})


export default PlatosRoutes;