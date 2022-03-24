import {useState, useEffect} from 'react';

const Filtros = ({filtro, setFiltro}) => {
    return (
        <div className={"filtros sombra contenedor"}>
            <form>
                <div className={"campo"}>
                    <label>Filtrar Gastos</label>
                    <select
                        value={filtro}
                        onChange={e => setFiltro(e.target.value)}
                    >
                        <option value="">-- Todas las categorias </option>
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
            </form>
        </div>
    );
};

export default Filtros;