import { Link } from "react-router-dom";

const CraftItems = ({ item }) => {
  const { _id, image, itemName, price, shortDescription,selectedCustomize } = item;

  
  return (
    <div>
      
      <div className="card  bg-base-100 shadow-xl h-[35rem] cursor-pointer">
        <figure>
          <img className="h-[15rem] hover:scale-125 transition-all" src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p>${price}</p>
          <p>{shortDescription}</p>
          <div className="card-actions">
            <Link to={`/detailspage/${_id}`} className="w-full">
              <button className="btn bg-[#01EEFF] w-full ">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItems;
