import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarJuego() {
    const [editarJuego, setEditarJuego] = useState({});
    const { id } = useParams();
    const navegador = useNavigate();

    useEffect(() => {
        fetch(`https://gamestore-backend-delta.vercel.app/productos/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error al obtener el juego. Código de error: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setEditarJuego(data);
            })
            .catch(error => {
                console.error('Error al obtener el juego:', error);
            });
    }, [id]);

    function cambiaValor(e) {
        const nombreCampo = e.target.name;
        const valor = e.target.value;
        setEditarJuego(prevState => ({
            ...prevState,
            [nombreCampo]: valor
        }));
    }

    function editarCampo(e) {
        e.preventDefault();

        const opciones = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editarJuego)
        };

        try {
            fetch(`http://localhost:3000/productos/${id}`, opciones)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Error al editar el juego. Código de error: ${res.status}`);
                    }
                    return res.json();
                })
                .then(data => {
                    console.log('Respuesta del servidor:', data);
                    navegador('/panel'); // Redirige a '/panel' después de editar
                });
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert(`Error: ${error.message}`); // Mostrar el error al usuario
        }
    }

    return (
        <>
            <h2>Editar Juego</h2>
            <form onSubmit={editarCampo}>
                <label htmlFor="nom">Nombre del Juego:</label>
                <input type="text" name="nombre" id="nom" value={editarJuego.nombre || ''} onChange={cambiaValor} /><br />

                <label htmlFor="desc">Descripción:</label>
                <textarea name="descripcion" id="desc" value={editarJuego.descripcion || ''} onChange={cambiaValor}></textarea><br />

                <label htmlFor="gen">Género:</label>
                <input type="text" name="genero" id="gen" value={editarJuego.genero || ''} onChange={cambiaValor} /><br />

                <label htmlFor="val">Valoración:</label>
                <input type="number" name="valoracion" id="val" value={editarJuego.valoracion || ''} onChange={cambiaValor} /><br />

                <label htmlFor="pre">Precio del Juego:</label>
                <input type="number" name="precio" id="pre" value={editarJuego.precio || ''} onChange={cambiaValor} /><br />

                <input type="submit" value="Editar" />
            </form>
            <button onClick={() => navegador('/panel')}>Cancelar</button>
        </>
    );
}

export default EditarJuego;
