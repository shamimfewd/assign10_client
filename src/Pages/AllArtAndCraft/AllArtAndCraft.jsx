import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ItemsCard from "../../Components/ItemsCard";

const AllArtAndCraft = () => {
  const loadedData = useLoaderData();
  const [items, setItems] = useState(loadedData);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-[#E8F0FE] my-24 p-6 rounded-xl">
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
                      <button className="btn bg-[#00b38c] text-white">
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
