import { BiCycling } from "react-icons/bi";
import "./HomeCard.css";
import { Recycle, ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HomeCard = ({ text, subText, img, type = 1, navigateTo = '/' }) => {

  const navigate = useNavigate();

  return (
    <div style={{ cursor: "pointer" }} className="challenge-card-small" onClick={() => { navigate(navigateTo) }} >
      <div
        className="small-image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="small-card-content">
        <h3>{text}</h3>
        {type === 1 ? (
          <BiCycling size={20} color="white" className="category-chip" />
        ) : type === 2 ? (
          <Recycle size={20} color="white" className="category-chip" />
        ) : (
          <ShoppingBasket size={20} color="white" className="category-chip" />
        )}
      </div>
    </div>
  );
};
