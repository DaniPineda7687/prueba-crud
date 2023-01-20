import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

dotenv.config();
mongoose.connect(process.env.ATLAS_URI)
    .then(()=>{
        console.log("Conectado con exito a la bd")
    })
    .catch((err)=>{
        console.log("Error al conectar la bd",err)
    })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
const port = 3000;
app.get("/",(req,res)=>{
    res.send("Hello world")
})


app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`)
})