import { BiCycling } from "react-icons/bi";
import GoBack from "../components/GoBack";
import "./Categories.css";
import { Recycle, ShoppingBasket } from "lucide-react";

export const Categories = () => {
  return (
    <div className="category-container">

      <GoBack className={"categories-go-back"} />
      <h2>CATEGORÍAS</h2>
      <div class="cards">
        <div class="card ">
          <p class="tip">Reciclaje</p>
          <BiCycling size={25} color="white" />


        </div>
        <div class="card ">
          <p class="tip">Caminar</p>
          <Recycle size={25} color="white" />
        </div>
        <div class="card ">
          <p class="tip">Compras</p>
          <ShoppingBasket size={25} color="white" />
        </div>
      </div>

      {/* Menú inferior */}
      <nav className="bottom-nav">
        <div className="nav-item"></div><div className="nav-item"></div><div className="nav-item"></div><div className="nav-item"></div>
      </nav>

    </div>
  )
}
