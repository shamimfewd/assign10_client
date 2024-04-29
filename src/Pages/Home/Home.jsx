import { useLoaderData } from "react-router-dom";
import CraftItems from "../../Components/CraftItems";
import Hero from "../../Components/Hero";
import { useState } from "react";

const Home = () => {
  const loadedData = useLoaderData();
  const [items, setItems] = useState(loadedData);

  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <CraftItems key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
