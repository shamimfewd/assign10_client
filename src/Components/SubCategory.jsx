import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const SubCategory = () => {
  const loadedData = useLoaderData();
  const [categoryItem, setCategoryItem] = useState(loadedData);

  useEffect(() => {
    const categoryMap = new Map();
    loadedData.forEach((item) => {
      if (!categoryMap.has(item.selectedCategory)) {
        categoryMap.set(item.selectedCategory, item);
      }
    });
    setCategoryItem(Array.from(categoryMap.values()));
  }, [loadedData]);

  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryItem.map((item) => (
          <div key={item._id}>
            <div className="card  bg-base-100 shadow-xl  h-[35rem] cursor-pointer">
              <figure>
                <img className="h-[15rem]" src={item.image} alt="image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.itemName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions w-full">
                  <Link to={`/detailspage/${item._id}`} className="w-full">
                    <button className="btn w-full  bg-[#00b38c] hover:bg-[#00b38c] text-white">
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
// -----------------------------------------------
