import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UsuarioContext'; 

function Header() {
    const { usuario, logout, autenticado, esAdmin } = useUser(); 

    return (
        <header className='header'>
            <img src="logoVideoclub2.png" alt="logo de videoclub" className='header__imagen' />
            <nav className='header__nav'>
                <ul className="header__lista">
                    <li className="header__elementoLista"><Link to={'/'} className='header__link'>Inicio</Link></li>
                    <li className="header__elementoLista"><Link to={'/quienes'} className='header__link'>Quienes Somos</Link></li>
                    <li className="header__elementoLista"><Link to={'/videojuegos'} className='header__link'>Videojuegos</Link></li>
                    
                        <li className="header__elementoLista"><Link to={'/panel'} className='header__link'>Panel de control</Link></li>
                    
                </ul>
                <div className="header__enlacesExtras">
                    {!autenticado && (
                        <React.Fragment>
                            <span className="header__enlaceExtra"><Link to={'/registrarse'} className='header__link'>Registrarse</Link></span>
                            <span className="header__enlaceExtra"><Link to={'/IniciarSesion'} className='header__link'>Iniciar Sesión</Link></span>
                        </React.Fragment>
                    )}
                    {autenticado && !esAdmin && ( // Mostrar botón de cierre de sesión solo para usuarios normales
                        <span className="header__enlaceExtra"><button onClick={logout} className='header__link'>Cerrar Sesión</button></span>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
