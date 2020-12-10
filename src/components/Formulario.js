import React, { useContext } from 'react';
import { CategoriaContext } from '../context/CategoriaContext';

export const Formulario = () => {

    const { hola } = useContext(CategoriaContext);
    return (
        <form 
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Buscador de bedidas por categoria o igredientes</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingredientes"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">Selecciona categoria</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Buscar bebida"
                    />
                </div>
            </div>
        </form>
    )
}
