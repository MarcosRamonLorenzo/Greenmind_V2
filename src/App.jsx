import { Home } from "./pages/Home";
import "./App.css";
import LogIn from "./pages/LogIn.jsx"
import SignUp from "./pages/SignUp.jsx"
import { Navigate, Route, Routes } from "react-router-dom";
import UserProvider from "./contexts/UserProvider.jsx";
import useUser from "./hooks/useUser.jsx";
import { Categories } from "./pages/Categories.jsx";
import { Profile } from "./pages/Profile.jsx";
import { ChallengeInfo } from "./pages/ChallengeInfo.jsx";
import { Scan } from "./pages/Scan.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Recompensas from "./pages/Recompensas.jsx";

function App() {

  const { sesionIniciada, estadoUsuario } = useUser();
  return (
    <>
      <Routes>
        {sesionIniciada && estadoUsuario ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path={`/challenge/:id`} element={<ChallengeInfo />} />
            <Route path={`/scan`} element={<Scan />} />
            <Route path={`/categorias/:id`} element={<CategoryPage />} />
            <Route path={`/recompensas`} element={<Recompensas />} />


          </>
        ) : (
          <>
            <Route path="/log_in" element={<LogIn />} />
            <Route path="/sign_in" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/log_in" replace />} />

          </>
        )}
      </Routes>

    </>
  );
}

export default App;
