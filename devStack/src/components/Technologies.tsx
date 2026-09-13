import "./Technologies.css";
import TechCards from "./TechCards";
import { useEffect, useState } from "react";
import type { Technology } from "../types/Technology";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h2>Explore the Technologies</h2>
          <div className="tech-grid">
      {technologies.map((technology) => (
        <TechCards
          key={technology.id}
          technology={technology}
        />
      ))}
    </div>
    </section>
  );
}