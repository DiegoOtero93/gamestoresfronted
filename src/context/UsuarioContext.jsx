import React, { useState, createContext, useContext, useEffect } from 'react';

const UsuarioContext = createContext();

export const useUser = () => {
    return useContext(UsuarioContext);
}

export const UserProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [autenticado, setAutenticado] = useState(false);
    const [esAdmin, setEsAdmin] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('usu');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUsuario(userData);
            setAutenticado(true);
            setEsAdmin(userData.esAdmin || false);
        }
    }, []);

    const login = (datosUsu) => {
        localStorage.setItem('usu', JSON.stringify(datosUsu));
        setUsuario(datosUsu);
        setAutenticado(true);
        setEsAdmin(datosUsu.esAdmin || false);
    }

    const logout = () => {
        localStorage.removeItem('usu');
        setUsuario(null);
        setAutenticado(false);
        setEsAdmin(false);
    }

    return (
        <UsuarioContext.Provider value={{ usuario, login, logout, autenticado, esAdmin, setEsAdmin }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioContext;
