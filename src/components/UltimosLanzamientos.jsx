import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UltimosLanzamientos() {
    let link = import.meta.env.VITE_API_PRODUCTOS;
    const [tresultimos, setTresUltimos] = useState([]);

    useEffect(() => {
        axios.get(`${link}/latest`)
            .then(response => {
                setTresUltimos(response.data);
            })
            .catch(error => {
                console.error('Error fetching latest products:', error);
            });
    }, []);

    return (
        <section className='seccionCardsInicio'>
            {tresultimos.map(videojuego => (
                <div key={videojuego.id} className='seccionCardsInicio__Cards'>
                    <p className='seccionCardsInicio__titulo'>{videojuego.nombre}</p>
                    <p className='seccionCardsInicio__genero'>{videojuego.genero}</p>
                    <p className='seccionCardsInicio__precio'>{videojuego.precio}$</p>
                </div>
            ))}
        </section>
    );
}

export default UltimosLanzamientos;
