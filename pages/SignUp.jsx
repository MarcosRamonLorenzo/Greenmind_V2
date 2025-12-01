import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {

  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-img">
        <img
          src="src/assets/regist-img.svg"
          alt=""
        />
      </div>

      <div className="form-container">
        <div className="form-title">
          <h2>Sign Up</h2>
          <p>Create your account</p>
        </div>

        <div className="form">
          <input type="text" className="input" placeholder="Full name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <input type="password" className="input" placeholder="Repeat password" />

          <button className="form-btn">Sign up</button>

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
