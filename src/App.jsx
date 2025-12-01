import "./App.css";
import LogIn from "../pages/LogIn.jsx"
import SignUp from "../pages/SignUp.jsx"
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UserProvider from "../contexts/UserProvider.jsx";

function App() {
  let isLogin = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/log_in');
    }
  
  }, [])
  

  return (
    <>
      <UserProvider>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<div>Home</div>} />
          </>
        ) : (
          <>
            <Route path="/log_in" element={<LogIn/>} />
            <Route path="/sign_in" element={<SignUp/>} />
          </>
        )}
      </Routes>
      </UserProvider>
    </>
  );
}

export default App;
