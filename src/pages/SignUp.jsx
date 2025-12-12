import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import useUser from "../hooks/useUser";

const SignUp = () => {

  const { actualizarDatoRegistro, registrarUsuario } = useUser();


  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-img">
        <img
          src="https://aicfonsrrwpikljcmsym.supabase.co/storage/v1/object/sign/imgs/regist-img.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTI2NDM5OS01YTBmLTRjZTItYjIwOC0yM2QwNjhlMWVlYTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWdzL3JlZ2lzdC1pbWcuc3ZnIiwiaWF0IjoxNzY1MzY4ODI2LCJleHAiOjE3OTY5MDQ4MjZ9._C4sULAPgfOK50Nv0j2TLoQRePu9JigckI51_6XO-KE"
          alt=""
        />
      </div>

      <div className="form-container">
        <div className="form-title">
          <h2>Sign Up</h2>
          <p>Create your account</p>
        </div>

        <div className="form">
          <input type="text" className="input" placeholder="Full name" name="name" onChange={(e) => { actualizarDatoRegistro(e) }} />
          <input type="email" className="input" placeholder="Email" name="email" onChange={(e) => { actualizarDatoRegistro(e) }} />
          <input type="password" className="input" placeholder="Password" name="password" onChange={(e) => { actualizarDatoRegistro(e) }} />

          <button className="form-btn" onClick={() => { registrarUsuario(); }}>Sign up</button>

          <p className="sign-up-label">
            Already have an account?
            <span className="sign-up-link" onClick={() => navigate('/log_in')}>
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
