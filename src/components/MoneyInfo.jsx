import { BadgeJapaneseYen } from "lucide-react";
import "./MoneyInfo.css";

export const MoneyInfo = ({ number, size = 15 }) => {
  return (
    <div className="stat-chip">
      <span>{number}</span>
      <BadgeJapaneseYen width={size} color="goldenrod" />
    </div>
  );
};
