import {useState, useEffect} from 'react';

import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

import { formatearCantidad } from '../helpers';

const ControlPresupuesto = ({gastos, setgastos, presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [disponible, setDisponible]  = useState(0);
    const [gastado, setGastado]  = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);


    useEffect(() =>{
        const totalGastado =  gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        setGastado(totalGastado)
        setDisponible(totalDisponible)

        // Calcular el porcentaje gastado
        const nuevoPorcentaje =(((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1000)
    }, [gastos])

    useEffect(() => {
        localStorage.setItem('presupuesto', presupuesto ?? 0)
    }, [presupuesto])


    const handleResetApp = ( () => {
        const resultado = confirm('¿Desea resetear o reiniciar el presupuesto y los gastos?');
        if ( resultado ){
            setgastos([]);
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    })

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor : porcentaje > 100 ? '#D62626' : '#3B82F6',
                        trailColor: '#f5f5f5',
                        textColor : porcentaje > 100 ? '#D62626' : '#3B82F6'
                    })}
                    value={porcentaje}

                    text = {`${porcentaje}% Gastado `}
                />
            </div>

            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={handleResetApp}>
                    Resetear App
                </button>
                <p><span>Presupuesto: </span>  {formatearCantidad(presupuesto)}</p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}><span>Disponible: </span>  {formatearCantidad(disponible)}</p>
                <p><span>Gastado: </span>  {formatearCantidad(gastado)}</p>
            </div>
        </div>
    );
};

export default ControlPresupuesto;