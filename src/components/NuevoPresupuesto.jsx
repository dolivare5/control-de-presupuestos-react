
const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
    return (
        <div>
            <div className="contenedor-presupuesto contenedor sombra">
                <form className="formulario">
                    <div className="campo">
                        <label>Definir Presupuesto</label>
                        <input
                            className="nuevo-presupuesto"
                            type="text"
                            placeholder="Agregue aquí su Presupuesto"
                            value={presupuesto}
                            onChange={ e => setPresupuesto(e.target.value) }
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