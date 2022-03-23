import Gasto from "./Gasto";
const ListadoGastos = ({gastos}) => {
    return (
        <div className="contenedor listado-gastos">
            <h2>{gastos.length ? "Listado De Gastos" : "¡Aun No Tienes Gastos Registrados!"}</h2>

            {gastos.map(gasto =>{
                return <Gasto
                    key = {gasto.id}
                    gasto={gasto}
                />
            })}

        </div>
    );
};

export default ListadoGastos;