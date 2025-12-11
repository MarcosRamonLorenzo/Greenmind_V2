import React from "react";
import { ChevronDown, BadgeJapaneseYen } from "lucide-react";
import GoBack from "../components/GoBack";
import { ProgressBar } from "../components/ProgressBar";
import "./Recompensas.css"

export default function Recompensas() {
    const items = [1, 2, 3, 4];

    return (
        <div className="rewards">
            <GoBack />

            <h1 className="rewards__title">Recompensas</h1>

            <div className="rewards__balance">
                <span className="rewards__balance-value">500</span>
                <BadgeJapaneseYen size={20} color="goldenrod" />
            </div>

            <div className="rewards__filter">
                <span>Lorem</span>
                <ChevronDown size={20} />
            </div>

            <div className="rewards__list">
                {items.map((_, i) => (
                    <div key={i} className="reward-card">
                        <div className="reward-card__header">
                            <span className="reward-card__title">Lorem lorem lorem</span>

                            <div className="reward-card__currency">
                                <span>1000</span>
                                <BadgeJapaneseYen size={18} color="goldenrod" />
                            </div>
                        </div>

                        <ProgressBar prc={Math.random() * 96} className="reward-card__progress" />
                    </div>
                ))}
            </div>
        </div>
    );
}
