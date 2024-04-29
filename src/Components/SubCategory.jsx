import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const SubCategory = () => {
  const loadedData = useLoaderData();
  const [categoryItem, setCategoryItem] = useState(loadedData);
  console.log(loadedData);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categoryItem.map((item) => (
          <div key={item._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={item.image} alt="image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.itemName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <Link to={`/detailspage/${item._id}`}>
                      <button className="btn bg-[#00b38c] text-white">
                        View Details
                      </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
