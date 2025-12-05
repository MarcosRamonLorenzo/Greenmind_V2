import { BadgeJapaneseYen } from "lucide-react";
import "./MoneyInfo.css";

export const MoneyInfo = ({number}) => {
  return (
    <div className="stat-chip">
      <span>{number}</span>
      <BadgeJapaneseYen width={15} color="goldenrod" />
    </div>
  );
};
