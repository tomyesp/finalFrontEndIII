import React from "react";
import { useState } from "react";
import Error from "./Error";
import Mensaje from "./Mensaje";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreEsValido = validarNombre(nombre);
    const emailEsValido = validarEmail(email);

    if (!nombreEsValido || !emailEsValido) {
      setMostrarError(true);
      setMostrarCard(false);
    } else {
      setMostrarError(false);
      setMostrarCard(true);
    }
  };

  const validarNombre = (nombre) => {
    const sinEspaciosAlComienzo = nombre.trimLeft();

    if (sinEspaciosAlComienzo.length > 5) {
      return true;
    } else {
      return false;
    }
  };

  const validarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return regex.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="nombre"
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" value="Send" />
      </form>

      {mostrarError && <Error />}
      {mostrarCard && <Mensaje nombre={nombre} />}
    </div>
  );
};

export default Form;
