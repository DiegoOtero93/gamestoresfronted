import React, { useState, useEffect } from "react"; // Importa React, useState y useEffect desde la biblioteca de React
import axios from 'axios'; // Importa axios para realizar peticiones HTTP
import { IoStar } from "react-icons/io5"; // Importa el ícono IoStar de React Icons
import Carousel from "../components/Carousel"; // Importa el componente Carousel

function VideoJuegos() {
  let link = import.meta.env.VITE_API_PRODUCTOS; // Obtiene la URL de la API de productos desde las variables de entorno de Vite

  const [videojuegos, setVideojuegos] = useState([]); // Estado local para almacenar la lista de videojuegos

  // useEffect se utiliza para realizar la petición GET cuando el componente se monta
  useEffect(() => {
    axios.get(link).then(response => { // Realiza una solicitud GET a la URL de la API de productos
      setVideojuegos(response.data); // Actualiza el estado de videojuegos con los datos recibidos
    })
    .catch(error => {
      console.error('Error al obtener datos:', error); // Maneja errores en la solicitud GET
    });
  }, []); // El segundo argumento del useEffect es un arreglo vacío, lo que significa que se ejecuta solo una vez al montar el componente

  return (
    <main>
      <Carousel /> {/* Renderiza el componente Carousel */}
      <section className="videojuegos">
        {videojuegos.map(juego => { // Mapea cada juego en la lista de videojuegos
          return (
            <article className="videojuegos__contenedorJuego" key={juego.id}>
              <h2 className="videojuegos__titulo">{juego.nombre}</h2> {/* Muestra el título del juego */}
              <p>Genero: {juego.genero}</p> {/* Muestra el género del juego */}
              <p>Sinopsis: <br />{juego.descripcion}</p> {/* Muestra la sinopsis del juego */}
              <p>Precio: {juego.precio}$</p> {/* Muestra el precio del juego */}
              <p>Valoracion: {juego.valoracion}<IoStar /></p> {/* Muestra la valoración del juego junto con el ícono de estrella */}
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default VideoJuegos; // Exporta el componente VideoJuegos para su uso en otras partes de la aplicación
