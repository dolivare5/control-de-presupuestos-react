import Gasto from "./Gasto";
const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
    return (
        <div className="contenedor listado-gastos">
            {
                filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? `Listado de gastos relacionados con ${filtro}` : `No hay gastos relacionados con ${filtro}`}</h2>
                        {
                            gastosFiltrados.map(gasto =>{
                                return <Gasto
                                    key = {gasto.id}
                                    gasto={gasto}
                                    setGastoEditar = {setGastoEditar}
                                    eliminarGasto = {eliminarGasto}
                                />
                            })
                        }
                    </>
                ) : (

                    <>
                        <h2>{gastos.length ? `Listado de gastos registrados ${filtro}` : `No hay gastos registrados actualmente`}</h2>
                        {
                            gastos.map(gasto =>{
                                return <Gasto
                                    key = {gasto.id}
                                    gasto={gasto}
                                    setGastoEditar = {setGastoEditar}
                                    eliminarGasto = {eliminarGasto}
                                />
                            })
                        }
                    </>

                )
            }
        </div>
    );
};

export default ListadoGastos;