import express from "express";

const app = express();
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