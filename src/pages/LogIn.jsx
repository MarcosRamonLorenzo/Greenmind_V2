import { useNavigate } from "react-router-dom";
import "./LogIn.css";
import useUser from "../hooks/useUser";

const LogIn = () => {

  const { actualizarDatoInicioSesion, iniciarSesionUsuario } = useUser();

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-img">
        <img
          src="https://aicfonsrrwpikljcmsym.supabase.co/storage/v1/object/sign/imgs/regist-img.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTI2NDM5OS01YTBmLTRjZTItYjIwOC0yM2QwNjhlMWVlYTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWdzL3JlZ2lzdC1pbWcuc3ZnIiwiaWF0IjoxNzY1MzY4ODI2LCJleHAiOjE3OTY5MDQ4MjZ9._C4sULAPgfOK50Nv0j2TLoQRePu9JigckI51_6XO-KE"
          alt=""
        />
      </div>
      <div className="form-container">
        <div className="form-title">
          <h2>Log In</h2>
          <p>Enter your details to continue </p>
        </div>
        <div className="form">
          <input type="email" className="input" placeholder="Email" name="email" onChange={(e) => { actualizarDatoInicioSesion(e) }} />
          <input type="password" className="input" placeholder="Password" name="password" onChange={(e) => { actualizarDatoInicioSesion(e) }} />
          <button className="form-btn" onClick={() => { iniciarSesionUsuario(); }}>Log in</button>
          <p className="sign-up-label">
            Don't have an account?<span className="sign-up-link" onClick={() => { navigate('/sign_in') }}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
