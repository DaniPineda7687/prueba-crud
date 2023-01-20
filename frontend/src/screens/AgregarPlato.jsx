const AgregarPlato=()=>{
    
    return (
        <div>
            <h1>Agregar plato</h1>
            <form>
                <label htmlFor="idPlato">Id del plato
                    <input type="text" name="idPlato" id="idPlato" />
                </label>
                <label htmlFor="color">Color del plato
                    <input type="text" name="color" id="color" />
                </label>
                <label htmlFor="precio">Precio del plato
                    <input type="text" name="precio" id="precio" />
                </label>
                <label htmlFor="nombre">Nombre del plato
                    <input type="text" name="nombre" id="nombre" />
                </label>
                <label htmlFor="date-start">Fecha de inicio de actividad del plato
                    <input type="date" name="date-start" id="date-start" />
                </label>
            </form>
        </div>
    );
}

export default AgregarPlato;