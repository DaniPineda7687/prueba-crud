import mongoose from "mongoose";

const platosSchema = mongoose.Schema({
    idPlato:String,
    color:String,
    precio:Number,
    nombre:String,
    fechaInicio:String,
})

const Plato = mongoose.model("Plato",platosSchema);

export default Plato;