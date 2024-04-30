import { useLoaderData } from "react-router-dom";
import CraftItems from "../../Components/CraftItems";
import Hero from "../../Components/Hero";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import SubCategory from "../../Components/SubCategory";
import About from "../../Components/About";
import Contact from "../../Components/Contact";
import { AuthContext } from "../../AuthProviders/AuthProvider";

const Home = () => {
  const loadedData = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [items, setItems] = useState(loadedData);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-red-600"></span>
        ;
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>TextileTrove - Home</title>
      </Helmet>
      <Hero />
      <About />
      <div>
        <h2 className="text-4xl text-center text-[#0A2D45] mb-6">
          Craft Items
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {items.map((item) => (
          <CraftItems key={item._id} item={item} />
        ))}
      </div>

      <SubCategory />
      <Contact />
    </div>
  );
};

export default Home;
