import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // Verificar si hay un usuario guardado en localStorage al cargar la página
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", email); // Guarda el email en localStorage
    setUser(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Borra el usuario guardado
    setUser(null);
  };

  return (
    <div>
      {user && (
        <div>
          <p>Bienvenido, {user}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
      {user === null && (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
          <button type="submit">Iniciar sesión</button>
        </form>
      )}
    </div>
  );
};

export default Login;