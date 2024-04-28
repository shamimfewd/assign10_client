import { Link } from "react-router-dom";

const ItemsCard = ({ item }) => {
  const {
    _id,
    image,
    itemName,
    price,
    rating,
    shortDescription,
    userName,
    email,
  } = item;
  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <h3>{price}</h3>
          <p>{shortDescription}</p>
          <div className="card-actions justify-end">
            <Link to={`/detailspage/${_id}`}>
              <button className="btn ">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
