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
      {/* <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
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
      </div> */}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemsCard;
