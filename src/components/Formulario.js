import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({setGasto, setGastoCreado}) => {

    const [ nombre, setNombre ] = useState('');
    const [ cantidad, setCantidad ] = useState(0);
    /* const [ gasto, setGasto ] = useState({
        nombre: '',
        cantidad: ''
    }) */
    const [ error, setError ] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        };

        setGasto(gasto);
        setGastoCreado(true);
        setNombre('');
        setCantidad(0);
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o el presupuesto introducido es null" /> : null}

            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    /* onChange={e => setGasto({
                        ...gasto,
                        nombre: e.target.value
                    })} */
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <button
                type="submit"
                className="button-primary u-full-width"
            >Agregar gasto</button>
        </form>
     );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setGastoCreado: PropTypes.func.isRequired
}
 
export default Formulario;