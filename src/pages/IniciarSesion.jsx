import React, { useState } from 'react'; // Importa React y el hook useState desde la biblioteca de React
import axios from 'axios'; // Importa axios para realizar peticiones HTTP
import { useUser } from '../context/UsuarioContext'; // Importa el contexto de usuario personalizado

function IniciarSesion() {
    const [usuario, setUsuario] = useState({ email: '', contrasena: '' }); // Estado local para almacenar el usuario y contraseña
    const [mensaje, setMensaje] = useState(''); // Estado local para mostrar mensajes de error o éxito
    const { login } = useUser(); // Utiliza el hook useUser para acceder a la función de inicio de sesión del contexto

    // Función para manejar el envío del formulario de inicio de sesión
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        
        try {
            const response = await axios.post(import.meta.env.VITE_API_USUARIOS + '/login', usuario); // Realiza una solicitud POST para iniciar sesión
            if (response.status === 200) { // Si la solicitud es exitosa
                setMensaje(response.data.mensaje); // Establece el mensaje de respuesta
                if (response.data.usuario) { // Si hay datos de usuario en la respuesta
                    login(response.data.usuario); // Llama a la función de inicio de sesión del contexto con los datos de usuario
                    window.location.href = '/'; // Redirige a la página principal
                }
            } else {
                setMensaje('Error al Iniciar Sesión'); // Si no se recibe estado 200, muestra un mensaje de error
            }
        } catch (error) {
            console.error('Error de Usuario o Contraseña:', error); // Captura y muestra errores relacionados con la solicitud
            setMensaje('Error al Iniciar Sesión'); // Establece un mensaje de error en caso de falla
        }
    }

    // Función para manejar cambios en los campos de entrada (email y contraseña)
    const handleChange = (e) => {
        const { name, value } = e.target; // Obtiene el nombre y el valor del campo de entrada
        setUsuario({ ...usuario, [name]: value }); // Actualiza el estado del usuario con los valores modificados
    }

    // Componente de inicio de sesión
    return (
        <main className="login-form__main">
            <h2 className="login-form__titulo">Inicia Sesión</h2>
            <form onSubmit={handleSubmit} className="login-form__form">
                <label htmlFor="email" className="login-form__label">Email:</label>
                <input type="email" name="email" id="email" value={usuario.email} onChange={handleChange} className="login-form__input" required />
                <br />
                <label htmlFor="contrasena" className="login-form__label">Contraseña:</label>
                <input type="password" name="contrasena" id="contrasena" value={usuario.contrasena} onChange={handleChange} className="login-form__input" required />
                <br />
                <button type="submit" className="login-form__submit-btn">Iniciar Sesión</button>
            </form>
            {mensaje && <p className="login-form__mensaje">{mensaje}</p>}
        </main>
    );
}

export default IniciarSesion; // Exporta el componente de inicio de sesión para su uso en otras partes de la aplicación
