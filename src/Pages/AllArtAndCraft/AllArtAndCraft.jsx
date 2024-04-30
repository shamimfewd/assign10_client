import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ItemsCard from "../../Components/ItemsCard";
import { Helmet } from "react-helmet";

const AllArtAndCraft = () => {
  const loadedData = useLoaderData();
  const [items, setItems] = useState(loadedData);

  return (
    <div className="">
      <Helmet>
        <title>TextileTrove - All Craft</title>
      </Helmet>

      <div
        className="bg-cover h-[15rem]  bg-no-repeat	bg-center	object-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/8246743/pexels-photo-8246743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="flex justify-center items-center pt-16">
          <div>
            <h2 className="text-4xl text-[#0A2D45] mb-8">
            All Art And Craft Item
            </h2>
            <Link to={"/"} className="mt-6 text-2xl text-blue-600">
              Home/
            </Link>
            <span>All Art And Craft Item</span>
          </div>
        </div>
      </div>

      <div className="bg-[#E8F0FE] mt-6 mb-6 p-6 rounded-xl max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-center my-6">
            All Art And Craft Item
          </h1>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="font-bold text-lg">Item Name</th>
                <th className="font-bold text-lg">Price</th>
                <th className="font-bold text-lg">Category</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <th></th>
                  <td>{item.itemName}</td>
                  <td>{item.price}</td>
                  <td>{item.selectedCategory}</td>
                  <td>
                    <Link to={`/detailspage/${item._id}`}>
                      <button className="btn bg-[#01EEFF] ">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArtAndCraft;
