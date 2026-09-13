import "./TechCards.css";
import type { Technology } from "../types/Technology";

type TechCardProps = {
  technology: Technology;
};
export default function TechCards({ technology }: TechCardProps) {

  return (
    <div className="tech-card">
      <img
  className="tech-icon"
  src={technology.icon}
  alt={technology.name}
/>

      <span className="tech-badge">{technology.badge}</span>

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <span>{technology.category}</span>

      <p>{technology.difficulty}</p>

      <p>⭐ {technology.rating}</p>

      <button>Add to Stack</button>
    </div>
  );

}