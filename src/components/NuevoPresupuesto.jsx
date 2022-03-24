import { useState } from 'react';
import Mensaje from "./Mensaje";
const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
    const [mensaje, setMensaje] = useState('');
    const handlePresupuesto = (e) => {
        e.preventDefault();
        if(!Number(presupuesto)|| Number(presupuesto <= 0)){
            setMensaje('No es un presupuesto valido')
        }else{
            setMensaje('')
            setIsValidPresupuesto(true)
            ;        }
    }

    return (
        <div>
            <div className="contenedor-presupuesto contenedor sombra">
                <form onSubmit={handlePresupuesto} className="formulario">
                    <div className="campo">
                        <label>Definir Presupuesto</label>
                        <input
                            className="nuevo-presupuesto"
                            type="number"
                            placeholder="Agregue aquí su Presupuesto"
                            value={presupuesto}
                            onChange={ e => setPresupuesto(Number(e.target.value)) }
                        />
                    </div>

                    <input
                        type="submit"
                        value="Registrar Presupuesto"
                    />

                    {mensaje && <Mensaje tipo={"error"}>{mensaje}</Mensaje> }
                </form>
            </div>
        </div>
    );
};

export default NuevoPresupuesto;