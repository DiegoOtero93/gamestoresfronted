// Importación de React y Footer
import React from "react";
import QuienesSomosLocal from "../components/QuienesSomosLocal";

// Definición del componente QuienesSomos
function QuienesSomos() {
  return (
    <div className="container">
      <section className="team">
        <div className="team__card">
          <img
            src="imagenQuienes.jpg"
            className="team__imagen"
            alt="Trabajadores de la empresa"
          />
          <div className="team__contenedorTexto">
            <h2 className="team__titulo">Nuestro Equipo</h2>
            <p className="team__texto">
              Somos GameStore, una empresa dedicada al comercio online de
              videojuegos. Nuestra misión es ofrecer a los jugadores una
              experiencia similar a la de una PlayStation Store, proporcionando
              una plataforma donde puedan explorar, comprar y descargar sus
              juegos favoritos de manera rápida y segura. Nos esforzamos por
              crear un entorno accesible y emocionante para todos los
              entusiastas de los videojuegos, garantizando siempre la mejor
              calidad y servicio. ¡Bienvenidos a la revolución del gaming
              digital!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuienesSomos;
