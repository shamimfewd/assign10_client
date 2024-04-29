import { Link } from "react-router-dom";

const CraftItems = ({ item }) => {
  const { _id, image, itemName, price, shortDescription } = item;

  
  return (
    <div>
      <h1>this is craft item</h1>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p>${price}</p>
          <p>{shortDescription}</p>
          <div className="card-actions justify-end">
            <Link to={`/detailspage/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItems;
