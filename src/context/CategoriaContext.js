import React, { createContext, useState } from 'react';

export const CategoriaContext = createContext();

const CategoriasProvider = (props) => {
    const [hola, setHola] = useState('Holaaa!!!')

    return (
        <CategoriaContext.Provider
            value={{
                hola
            }}
        >
            { props.children }
        </CategoriaContext.Provider>
    )
}

export default CategoriasProvider;