import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Borrarjuego() {
    let { id } = useParams();
    const navegador = useNavigate();

    function noBorrar() {
        navegador('/panel');
    }

    async function siBorrar() {
        let opciones = {
            method: 'DELETE'
        };

        try {
            const response = await fetch(`http://localhost:3000/productos?id=${id}`, opciones);

            if (!response.ok) {
                throw new Error('Error al borrar el juego. Código de error: ' + response.status);
            }

            const data = await response.json();

            if (data.mensaje === 'Producto eliminado correctamente') {
                console.log('¡Borrado con éxito!'); // Mensaje de éxito en la consola
            } else {
                console.error('Error al borrar el juego:', data);
                // Aquí podrías manejar el error mostrando un mensaje al usuario
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            // Aquí podrías manejar el error de la solicitud
        }

        navegador('/panel'); // Navega a la ruta '/panel' después de borrar
    }

    return (
        <>
            <h2>¿Estás seguro que quieres borrar el juego con la ID {id}?</h2>
            <button type="button" onClick={siBorrar}>Sí</button>
            <button type="button" onClick={noBorrar}>No</button>
        </>
    );
}

export default Borrarjuego;
