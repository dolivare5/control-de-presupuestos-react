import { useState, useEffect } from 'react';
import Mensaje from "./Mensaje";
import CerrarBtn from '../img/cerrar.svg'
import gasto from "./Gasto";

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {

    const [mensaje, setMensaje] = useState('');

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])

    const ocultarModal = () => {
        setAnimarModal(false);
        setGastoEditar({});
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
        guardarGasto({nombre, cantidad, categoria, id, fecha});


    }

    return (
        <div className="modal">

            <form
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
                onSubmit={handleSubmit}
            >
                <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
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
                        <option value="deudas">Deudas </option>
                        <option value="gastos">Gastos </option>
                        <option value="ocio">Ocio </option>
                        <option value="salud">Salud </option>
                        <option value="suscripciones">Suscripciones </option>
                        <option value="recargas">Recargas</option>
                        <option value="tecnologia">Tecnología </option>
                        <option value="educacion">Educacion</option>
                        <option value="pension">Pension</option>
                        <option value="supermercado">Supermecado</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value={gastoEditar.nombre ? "Guardar Cambios" : "Agregar Gasto"}
                />
                <div className="cerrar-modal">
                    <img
                        src={CerrarBtn}
                        onClick={ocultarModal}
                    />
                </div>
            </form>



        </div>
    );
};

export default Modal;