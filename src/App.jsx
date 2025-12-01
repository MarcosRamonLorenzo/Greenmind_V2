import "./App.css";
import LogIn from "../pages/LogIn.jsx"
import SignUp from "../pages/SignUp.jsx"
import { Route, Routes } from "react-router-dom";
import UserProvider from "../contexts/UserProvider.jsx";

function App() {
  let isLogin = false;

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
