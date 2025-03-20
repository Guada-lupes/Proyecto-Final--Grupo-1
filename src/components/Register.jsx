import { usestate } from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();

     // Verificar si el usuario ya está registrado
     if (localStorage.getItem(email)) {
        setMessage("Este correo ya está registrado.");
        return;
      }

       // Guardar los datos en localStorage (simulando una base de datos)
    localStorage.setItem("user", JSON.stringify({ email, password }));

    // Guardar el usuario en el estado (simulando que está autenticado)
    setUser(email);
  };

  if (user) {
    return <h2>Bienvenido, {user}</h2>;
  }

  return (
    <div>
      <h2>Registro</h2>
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
        <button type="submit">Registrarse</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;