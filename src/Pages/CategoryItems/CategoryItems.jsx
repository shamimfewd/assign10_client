import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CategoryItems = () => {
  const loadedData = useLoaderData();
  const [subCate, setSubCate] = useState([loadedData]);
  console.log(loadedData);
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/cate/${loadedData.category}`)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);
  return (
    <div>
      <h1>thi si sub category</h1>
      {subCate.map((cate) => (
        <div key={cate._id}>
          <div>
            <h1>{cate.subCategory_Name}</h1>
            <h1>{cate.subcategory_Name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;
