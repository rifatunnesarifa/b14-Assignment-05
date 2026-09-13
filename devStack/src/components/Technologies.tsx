import "./Technologies.css";
import TechCards from "./TechCards";
import YourStack from "./YourStack";
import { useEffect, useState } from "react";
import type { Technology } from "../types/Technology";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    fetch("/Technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  function handleAdd(id: string) {
    if (selectedIds.includes(id)) {
      toast.warning("This technology is already in your stack!");
      return;
    }
    setSelectedIds((prev) => [...prev, id]);
    const tech = technologies.find((t) => t.id === id);
    toast.success(`${tech?.name ?? "Technology"} added successfully!`);
  }

  function handleRemove(id: string) {
    setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
    const tech = technologies.find((t) => t.id === id);
    toast.info(`${tech?.name ?? "Technology"} removed from your stack`);
  }

  function handleRemoveAll() {
    setSelectedIds([]);
    toast.error("All technologies removed from your stack");
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

          <YourStack
            technologies={selectedTechnologies}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}