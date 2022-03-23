import { useState } from 'react';
import Mensaje from "./Mensaje";
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [mensaje, setMensaje] = useState('');

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');


    const ocultarModal = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if([ nombre, cantidad, categoria ].includes('')){
            setMensaje('Todos los campos son obligatorios')
            setTimeout(() =>{
                setMensaje('');
            }, 3000)
            return;
        }
        guardarGasto({nombre, cantidad, categoria});


    }



    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="Cerrar Modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
                onSubmit={handleSubmit}
            >
                <legend>Nuevo Gasto</legend>
                { mensaje && <Mensaje tipo="error">  {mensaje} </Mensaje> }
                <div className="campo">
                    <label htmlFor="nombre">¿Cual es el nombre del Gasto? </label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Agrega el nombre del Gasto"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">¿ Qué cantidad se gastó? </label>
                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Agregue aquí la cantidad gastada: eje. 3000"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">¿A qué categoria corresponde el gasto? </label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione una categoria </option>
                        <option value="ahorro">Ahorro </option>
                        <option value="comida">Comida </option>
                        <option value="casa">Casa </option>
                        <option value="gastos">Gastos Varios </option>
                        <option value="ocio">Ocio </option>
                        <option value="salud">Salud </option>
                        <option value="suscripciones">Suscripciones </option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="Agregar Gasto"
                />

            </form>

        </div>
    );
};

export default Modal;