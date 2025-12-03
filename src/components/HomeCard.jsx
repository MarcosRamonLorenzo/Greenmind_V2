import { BiCycling } from "react-icons/bi";
import "./HomeCard.css";
import { Recycle, ShoppingBasket } from "lucide-react";

export const HomeCard = ({ text, subText, img, type = 1 }) => {
  return (
    <div className="challenge-card-small">
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
