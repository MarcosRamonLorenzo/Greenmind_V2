import { useNavigate } from "react-router-dom";
import "./LogIn.css";
import useUser from "../hooks/useUser";

const LogIn = () => {

  const { actualizarDatoInicioSesion , iniciarSesionUsuario } = useUser();

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-img">
        <img
          src="src\assets\regist-img.svg"
          alt=""
        />
      </div>
      <div className="form-container">
        <div className="form-title">
          <h2>Log In</h2>
          <p>Enter your details to continue </p>
        </div>
        <div className="form">
          <input type="email" className="input" placeholder="Email" name="email" onChange={(e)=>{actualizarDatoInicioSesion(e)}} />
          <input type="password" className="input" placeholder="Password" name="password" onChange={(e)=>{actualizarDatoInicioSesion(e)}} />
          <button className="form-btn" onClick={()=>{iniciarSesionUsuario();}}>Log in</button>
        <p className="sign-up-label">
          Don't have an account?<span className="sign-up-link" onClick={()=>{navigate('/sign_in')}}>Sign up</span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
