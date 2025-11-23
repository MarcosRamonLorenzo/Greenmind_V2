import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  let isLogin = true;

  return (
    <>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<div>Home</div>} />
          </>
        ) : (
          <>
            <Route path="/log_in" element={<div>LogIn</div>} />
            <Route path="/sign_in" element={<div>SignUp</div>} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
