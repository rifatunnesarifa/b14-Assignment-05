import "./YourStack.css";
import type { Technology } from "../types/Technology";

type YourStackProps = {
  technologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};
export default function YourStack({ technologies, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <aside className="stackSidebar">
      <h2>Your Stack</h2>
      <p className="stackCount">
        {technologies.length > 0
          ? `${technologies.length} Technology Selected`
          : "No technologies selected yet."}
      </p>

      {technologies.length === 0 && (
        <div className="stackEmpty">Your stack is empty.</div>
      )}

      <div className="stackList">
        {technologies.map((tech) => (
          <div key={tech.id} className="stackItem">
            <img src={tech.icon} alt={tech.name} className="stackIcon" />
            <div className="stackItemText">
              <span className="stackItemName">{tech.name}</span>
              <span className="stackItemCategory">{tech.category}</span>
            </div>
            <button
              className="stackRemoveBtn"
              onClick={() => onRemove(tech.id)}
              aria-label={`Remove ${tech.name}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {technologies.length > 0 && (
        <button className="removeAllBtn" onClick={onRemoveAll}>
          Remove All
        </button>
      )}
    </aside>
  );
}