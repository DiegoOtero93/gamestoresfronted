import React from 'react';
import { useUser } from '../context/UsuarioContext';
import { Navigate } from 'react-router-dom';

function RutaPrivada({ componentePintar }) {
  const { usuario } = useUser();

  return (
    <>
      {usuario == null ? (
        <Navigate to="/login" />
      ) : (
        componentePintar
      )}
    </>
  );
}

export default RutaPrivada;
