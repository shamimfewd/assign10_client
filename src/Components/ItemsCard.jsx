// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemsCard = ({ item, items, setItems, setFilterItems }) => {
  // console.log(item.selectedCustomize);

  const {
    _id,
    image,
    itemName,
    price,
    rating,
    shortDescription,
    userName,
    email,
    selectedCustomize,
  } = item;
  setFilterItems(selectedCustomize);
  
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9-assignment-10-server-sooty.vercel.app/item/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingItem = items.filter((itm) => itm._id !== _id);
              setItems(remainingItem);
            }
          });
      }
    });
  };
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
          <p>{selectedCustomize}</p>

          <div className="card-actions justify-end">
            <button onClick={() => handleDelete(_id)} className="btn">
              Delete
            </button>
            <Link to={`/updatePage/${_id}`}>
              <button className="btn">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
