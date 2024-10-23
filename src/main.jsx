import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/Styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BotonSubir from './components/BotonSubir';
import Inicio from './pages/Inicio';
import QuienesSomos from './pages/QuienesSomos';
import VideoJuegos from './pages/VideoJuegos';
import Login from './pages/Login';
import { UserProvider } from './context/UsuarioContext';
import RutaPrivada from './components/RutaPrivada';
import PanelControl from './pages/PanelControl';
import NuevoJuego from './pages/NuevoJuego';
import BorrarJuego from './pages/BorrarJuego';
import EditarJuego from './pages/EditarJuego';
import IniciarSesion from './pages/IniciarSesion';
import CrearUsuario from './pages/CrearUsuario';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/quienes' element={<QuienesSomos />} />
        <Route path='/videojuegos' element={<VideoJuegos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/panel' element={<RutaPrivada componentePintar={<PanelControl />} />} />
        {/* Añade el parámetro ':id' a las rutas de BorrarJuego y EditarJuego */}
        <Route path='/borrarJuego/:id' element={<RutaPrivada componentePintar={<BorrarJuego />} />} />
        <Route path='/editarJuego/:id' element={<RutaPrivada componentePintar={<EditarJuego />} />} />
        <Route path='/nuevoJuego' element={<RutaPrivada componentePintar={<NuevoJuego />} />} />
        {/* Rutas para CrearUsuario y IniciarSesion */}
        <Route path='/IniciarSesion' element={<IniciarSesion />}/>
        <Route path='/Registrarse' element={<CrearUsuario />} />
        
      </Routes>
      <BotonSubir />
      <Footer />
    </UserProvider>
  </Router>
);

