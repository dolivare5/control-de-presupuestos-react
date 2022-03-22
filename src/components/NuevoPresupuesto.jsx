
const NuevoPresupuesto = () => {
    return (
        <div>
            <div className="contenedor-presupuesto contenedor sombra">
                <form className="formulario">
                    <div className="campo">
                        <label>Definir Presupuesto</label>
                        <input
                            className="nuevo-presupuesto"
                            type="text"
                            placeholder="Agreue aquí su Presupuesto"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Registrar Presupuesto"
                    />
                </form>
            </div>
        </div>
    );
};

export default NuevoPresupuesto;