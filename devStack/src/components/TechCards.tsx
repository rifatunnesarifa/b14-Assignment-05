import "./TechCards.css";
import type { Technology } from "../types/Technology";

type TechCardProps = {
  technology: Technology;
  selected: boolean;
  onAdd: (id: string) => void;
};
export default function TechCards({ technology, selected, onAdd }: TechCardProps) {

  return (
    <div className="techCard">
      <div className="techCardTop">
        <img
          className="techIcon"
          src={technology.icon}
          alt={technology.name}
        />
        <span className="techBadge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>

      <p className="techDescription">{technology.description}</p>

      <div className="techMeta">
        <span className="techCategory">{technology.category}</span>
        <span className="techDifficulty">{technology.difficulty}</span>
        <span className="techRating">⭐ {technology.rating}</span>
      </div>

      <button
        className="techButton"
        disabled={selected}
        onClick={() => onAdd(technology.id)}
      >
        {selected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );

}