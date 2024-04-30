import { useLoaderData } from "react-router-dom";
import CraftItems from "../../Components/CraftItems";
import Hero from "../../Components/Hero";
import { useState } from "react";
import { Helmet } from "react-helmet";
import SubCategory from "../../Components/SubCategory";
import About from "../../Components/About";

const Home = () => {
  const loadedData = useLoaderData();
  const [items, setItems] = useState(loadedData);

  return (
    <div>
      <Helmet>
        <title>TextileTrove - Home</title>
      </Helmet>
      <Hero />
      <About />
      <div>
        <h2 className="text-4xl text-center text-[#0A2D45] mb-6">Craft Items</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <CraftItems key={item._id} item={item} />
        ))}
      </div>

      <SubCategory />
    </div>
  );
};

export default Home;
