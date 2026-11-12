import { useState } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";
import imagesData from "../imagesData";

const Portfolio = () => {
  const [count, setCount] = useState("All");

  const filters = ["All", "Websites", "Flayers", "Business Cards"];

  const filterImages =
    count === "All"
      ? imagesData
      : imagesData.filter((item) => item.category === count);

  const handleSelectFilter = (item) => {
    setCount(item);
  };

  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selected={count}
        onSelectFilter={handleSelectFilter}
      />
      <ProjectList filterImages={filterImages} />
    </div>
  );
};

export default Portfolio;
