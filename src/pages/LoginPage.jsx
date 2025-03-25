import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Importamos el contexto de autenticación
import { useNavigate, Link } from "react-router-dom"; // useNavigate para redirigir, Link para el enlace a registro

const LoginPage = () => {
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const { login } = useContext(AuthContext); // Accedemos a la función login del contexto
  const navigate = useNavigate(); // Hook para redirigir a otras páginas

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    const isLoggedIn = login(username, password); // Intenta iniciar sesión
    if (isLoggedIn) {
      navigate("/home"); // Redirige a la página principal si el login es exitoso
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo."); // Muestra un mensaje si el login falla
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Actualiza el estado con el input del usuario
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualiza el estado con el input de la contraseña
        />
        <button type="submit">Iniciar Sesión</button> {/* Botón para enviar el formulario */}
      </form>
      {/* Enlace para redirigir a la página de registro */}
      <p>
        ¿Aún no te has registrado? <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default LoginPage;
