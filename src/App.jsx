import Recompensa from "../pages/Recompensa";
import SeleccionarCategoria from "../pages/SeleccionarCategoria";
import RetosCategoria from "../pages/RetosCategoria"; // <--- IMPORTA LA NUEVA PÁGINA
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  let isLogin = true;

  return (
    <Routes>
       {isLogin ? (
         <>
           {/* Ruta 1: Selección de Categoría */}
           <Route path="/categorias" element={<SeleccionarCategoria />} />
           
           {/* Ruta 2: Página intermedia de Retos (Diagrama de flujo) */}
           <Route path="/retos" element={<RetosCategoria />} />
           
           {/* Ruta 3: Página final de Recompensas */}
           <Route path="/recompensa" element={<Recompensa />} />
           
           {/* Ruta por defecto */}
           <Route path="/" element={<SeleccionarCategoria />} />
         </>
       ) : (
         <>
           <Route path="/log_in" element={<div>LogIn</div>} />
         </>
       )}
    </Routes>
  );
}

export default App;