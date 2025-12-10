import { BiCycling } from "react-icons/bi";
import GoBack from "../components/GoBack";
import "./Categories.css";
import { Recycle, ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Categories = () => {

  const navigate = useNavigate();

  return (
    <div className="category-container">

      <GoBack className={"categories-go-back"} />
      <h2>CATEGORÍAS</h2>
      <div class="cards" >
        <div class="card " onClick={()=>{navigate('1')}}>
          <p class="tip">Reciclaje</p>
          <Recycle size={25} color="white" />


        </div>
        <div class="card "  onClick={()=>{navigate('2')}}>
          <p class="tip">Movilidad</p>
          <BiCycling size={25} color="white" />
        </div>
        <div class="card "  onClick={()=>{navigate('3')}}>
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
