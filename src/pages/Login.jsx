import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [datos, setDatos] = useState({ nombre: '', contrasena: '', error: '' });
    const linkAdmin = import.meta.env.VITE_API_ADMIN;
    const navigate = useNavigate();
    const { login, setEsAdmin } = useUser(); // Añadimos setEsAdmin para gestionar el estado de administrador

    function cambiarDatos(e) {
        let valor = e.target.value;
        let nombreCampo = e.target.name;
        setDatos({ ...datos, [nombreCampo]: valor });
    }

    async function enviarForm(e) {
        e.preventDefault();

        try {
            const response = await axios.get(`${linkAdmin}?nombre=${datos.nombre}&contrasena=${datos.contrasena}`);
            
            if (response.data.length > 0) {
                const adminData = response.data[0];
                login(adminData); // Guarda los datos del administrador en el contexto de usuario
                setEsAdmin(true); // Marca como administrador en el contexto de usuario
                navigate('/panel'); // Redirige al panel de control
            } else {
                setDatos({ ...datos, error: 'Usuario no encontrado' });
            }
        } catch (error) {
            console.error('Error al iniciar sesión como administrador:', error);
            setDatos({ ...datos, error: 'Error al iniciar sesión' });
        }
    }

    return (
        <>
            <p className="login__error">{datos.error}</p>
            <form className="login__form" onSubmit={enviarForm}>
                <label htmlFor="nom" className="login__label">Nombre de usuario</label>
                <input type="text" name='nombre' id='nom' className="login__input" onChange={cambiarDatos} />

                <br />
                <label htmlFor="pass" className="login__label">Contraseña</label>
                <input type="password" name='contrasena' id='pass' className="login__input" onChange={cambiarDatos} />

                <br /><br />
                <input type="submit" value={'Iniciar Sesión'} className="login__submit-btn" />
            </form>
        </>
    );
}

export default Login;
