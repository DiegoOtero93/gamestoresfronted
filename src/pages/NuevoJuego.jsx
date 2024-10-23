import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Styles/Styles.css'

function NuevoJuego() {
    const [nuevoJuego, setNuevoJuego] = useState({ nombre: '', descripcion: '', genero: '', valoracion: 0, precio: 0 });
    const [mensajeError, setMensajeError] = useState('');
    const navigate = useNavigate();

    function cambiarCampo(e) {
        const nombreCampo = e.target.name;
        const valorCampo = e.target.value;
        setNuevoJuego({ ...nuevoJuego, [nombreCampo]: valorCampo });
    }

    function enviarFormulario(e) {
        e.preventDefault();

        const opciones = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoJuego)
        };

        fetch('http://localhost:3000/productos', opciones)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error al crear el juego. Código de error: ' + res.status);
                }
                return res.json(); // Parseamos la respuesta como JSON
            })
            .then(data => {
                if (data.mensaje === 'Producto creado correctamente') {
                    console.log('Producto creado exitosamente:', data);
                    navigate('/panel'); // Redirige al panel después de crear el juego
                } else {
                    throw new Error('Error al crear el producto: ' + JSON.stringify(data));
                }
            })
            .catch(error => {
                console.error('Error al crear el producto:', error.message); // Imprime el mensaje de error específico
                setMensajeError('Error al crear el producto. Consulta la consola para más detalles.');
            });
    }

    return (
        <>
            <h2>Nuevo Juego</h2>
            <form onSubmit={enviarFormulario}>
                <label htmlFor="Nom"> Nombre del Juego:</label>
                <input type="text" name='nombre' id='Nom' onChange={cambiarCampo} /><br />

                <label htmlFor="desc">Descripción</label>
                <textarea name="descripcion" id="desc" cols={30} onChange={cambiarCampo}></textarea> <br />

                <label htmlFor="genero">Género</label>
                <input type="text" name='genero' id='genero' onChange={cambiarCampo} /><br />

                <label htmlFor="valoracion">Valoración</label>
                <input type="number" name='valoracion' id='valoracion' step="0.01" onChange={cambiarCampo} /><br />

                <label htmlFor="pre">Precio del Juego</label>
                <input type="number" name='precio' id='pre' step="0.01" onChange={cambiarCampo} /><br />

                <input type="submit" value='Crear' />
            </form>
            {mensajeError && <p>{mensajeError}</p>}
        </>
    );
}

export default NuevoJuego;
