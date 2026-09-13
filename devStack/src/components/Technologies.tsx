import "./Technologies.css";
import TechCards from "./TechCards";
import { useEffect, useState } from "react";
import type { Technology } from "../types/Technology";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  function handleAdd(id: string) {
    setSelectedIds((prev) => [...prev, id]);
    const tech = technologies.find((t) => t.id === id);
    toast.success(`${tech?.name ?? "Technology"} added successfully!`);
  }

  function handleRemove(id: string) {
    setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
  }

  function handleRemoveAll() {
    setSelectedIds([]);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const selectedTechnologies = technologies.filter((tech) =>
    selectedIds.includes(tech.id)
  );

  return (
    <section>
      <ToastContainer position="top-right" autoClose={2000} aria-label="Notifications" />

      <div className="layout1">
        <div className="pageHeader">
          <h1>
            Explore the <span className="highlight">Technologies</span>
          </h1>
          <p>Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="techLayout">
          <div className="techGrid">
            {technologies.map((technology) => (
              <TechCards
                key={technology.id}
                technology={technology}
                selected={selectedIds.includes(technology.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>

          <aside className="stackSidebar">
            <h2>Your Stack</h2>
            <p className="stackCount">
              {selectedIds.length} Technology Selected
            </p>

            <div className="stackList">
              {selectedTechnologies.map((tech) => (
                <div key={tech.id} className="stackItem">
                  <img src={tech.icon} alt={tech.name} className="stackIcon" />
                  <div className="stackItemText">
                    <span className="stackItemName">{tech.name}</span>
                    <span className="stackItemCategory">{tech.category}</span>
                  </div>
                  <button
                    className="stackRemoveBtn"
                    onClick={() => handleRemove(tech.id)}
                    aria-label={`Remove ${tech.name}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {selectedIds.length > 0 && (
              <button className="removeAllBtn" onClick={handleRemoveAll}>
                Remove All
              </button>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}