import React, { useEffect, useState } from 'react';
import { FaRegPlusSquare, FaTrashAlt } from 'react-icons/fa';
import { RiEdit2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UsuarioContext';

function PanelDeControl() {
  const { usuario, logout, esAdmin } = useUser();
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    if (!esAdmin) {
      // Si no es administrador, redirige a la página de inicio u otra página apropiada
      window.location.href = '/'; // Redirigir usando window.location.href
    } else {
      // Si es administrador, cargar los juegos desde la API
      fetch('http://localhost:3000/productos')
        .then(res => res.json())
        .then(datos => {
          setJuegos(datos);
        });
    }
  }, [esAdmin]);

  function handleLogout() {
    const confirmarCerrarSesion = window.confirm('¿Estás seguro de cerrar sesión?');
    if (confirmarCerrarSesion) {
      logout(); // Cerrar sesión
      window.location.href = '/'; // Redirigir a la página de inicio u otra página apropiada
    }
  }

  return (
    <section className="seccion__main">
      {esAdmin && (
        <div className="seccion__grid">
          {juegos.map(juego => (
            <div key={juego.id} className="seccion__cards">
              <h2>{juego.nombre}</h2>
              <p>{juego.descripcion}</p>
              <p>{juego.precio}</p>
              <Link to={`/borrarJuego/${juego.id}`}>
                <FaTrashAlt />
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={`/editarJuego/${juego.id}`}>
                <RiEdit2Fill />
              </Link>
            </div>
          ))}
        </div>
      )}
      {esAdmin && (
        <p>
          Añadir nuevo juego{' '}
          <Link to="/nuevoJuego">
            <FaRegPlusSquare />
          </Link>
        </p>
      )}
      {usuario && (
        <button className="boton__cerrarSesion" onClick={handleLogout}>Cerrar Sesión</button>
      )}
    </section>
  );
}

export default PanelDeControl;
