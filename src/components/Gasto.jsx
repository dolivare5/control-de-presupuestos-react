import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css";


import { formatearFecha, formatearCantidad } from "../helpers";

import IconoAhorro from '../img/icono_ahorro.svg';
import Iconocasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoGastosVarios from '../img/icono_gastos.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';
import IconoRecargas from '../img/icono_telefono.svg';
import IconoEducacion from '../img/icono_educacion.svg';
import IconoSmartPhone from '../img/icono_smartphone.svg';
import IconoPension from '../img/icono_pension.svg';
import IconoDeudas from '../img/icono_deudas.svg';
import IconoAlimentos from '../img/icono_supermercado.svg';


const diccionarioIconos =  {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: Iconocasa,
    gastos: IconoGastosVarios,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
    recargas: IconoRecargas,
    educacion: IconoEducacion,
    supermercado: IconoAlimentos,
    deudas: IconoDeudas,
    pension: IconoPension,
    tecnologia: IconoSmartPhone,
}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
    const {categoria, nombre, cantidad, id, fecha} = gasto;
    const leadingActions = () =>(
        <LeadingActions>
            <SwipeAction onClick={( ) => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = ()  =>(
        <TrailingActions>
            <SwipeAction
                onClick={() => eliminarGasto(id) }
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList >
            <SwipeableListItem
                leadingActions = {leadingActions()}
                trailingActions={trailingActions()}>
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img
                            src={diccionarioIconos[categoria]}
                            alt=""

                        />

                        <div className="descripcion-gasto">
                            <p className="categoria">{categoria}</p>
                            <p className="nombre-gasto">{nombre} </p>
                            <p className="fecha-gasto" >Agregado el: {' '} <span>{formatearFecha(fecha)}</span></p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">{ formatearCantidad(cantidad) }</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
};

export default Gasto;