import React, { useState } from 'react';
import axios from 'axios';

function CrearUsuario() {
    const [usuario, setUsuario] = useState({ nombre: '', email: '', contrasena: '' });
    const [mensaje, setMensaje] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/usuarios', usuario);

            setMensaje(response.data.mensaje); // Mensaje de éxito del servidor
            setTimeout(() => {
                setMensaje(''); // Limpiar mensaje después de unos segundos
            }, 3000); // Limpiar el mensaje después de 3 segundos (opcional)

            // Redireccionar a la página de inicio después de un tiempo
            setTimeout(() => {
                window.location.href = '/'; // Redireccionar a la página de inicio
            }, 2000); // Redireccionar después de 2 segundos (opcional)
        } catch (error) {
            if (error.response) {
               
                console.error('Error al registrar usuario:', error.response.status);
                setMensaje('Error al registrar usuario');
            } else if (error.request) {
                // La solicitud fue hecha pero no se recibió respuesta
                console.error('No se recibió respuesta del servidor');
                setMensaje('Error al conectar con el servidor');
            } else {
                // Ocurrió un error antes de realizar la solicitud
                console.error('Error:', error.message);
                setMensaje('Error al enviar la solicitud');
            }
        }
    }

    return (
        <main className="register-form__main">
            <h2 className="register-form__titulo">Regístrate</h2>
            <form onSubmit={handleSubmit} className="register-form__form">
                <label htmlFor="nombre" className="register-form__label">Nombre:</label>
                <input type="text" name="nombre" id="nombre" value={usuario.nombre} onChange={handleChange} className="register-form__input" required />
                <br />
                <label htmlFor="email" className="register-form__label">Email:</label>
                <input type="email" name="email" id="email" value={usuario.email} onChange={handleChange} className="register-form__input" required />
                <br />
                <label htmlFor="contrasena" className="register-form__label">Contraseña:</label>
                <input type="password" name="contrasena" id="contrasena" value={usuario.contrasena} onChange={handleChange} className="register-form__input" required />
                <br />
                <button type="submit" className="register-form__submit-btn">Registrarse</button>
            </form>
            {mensaje && <p className="register-form__mensaje">{mensaje}</p>}
        </main>
    );
}

export default CrearUsuario;
