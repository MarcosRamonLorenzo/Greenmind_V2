import "./App.css";
import LogIn from "../pages/LogIn.jsx"
import SignUp from "../pages/SignUp.jsx"
import { Route, Routes } from "react-router-dom";
import UserProvider from "../contexts/UserProvider.jsx";
import useUser from "../hooks/useUser.jsx";

function App() {

  const { sesionIniciada , estadoUsuario } = useUser();
  return (
    <>
      <Routes>
        {sesionIniciada && estadoUsuario ? (
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
    
    </>
  );
}

export default App;
