import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import ItemsCard from "../../Components/ItemsCard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [filterItmes, setFilterItems] = useState([]);
  console.log(items);

  const handleFilterItems = (filter) => {
    if (filter === "all") {
      setFilterItems(items);
    } else if (filter === "yes") {
      const yesItems = items.filter((itm) => itm.selectedCustomize === "yes");
      setFilterItems(yesItems);
    } else if (filter === "no") {
      const noItems = items.filter((itm) => itm.selectedCustomize === "no");
      setFilterItems(noItems);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/item/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilterItems(data);
      });
  }, [user]);



  // Delete Function------------------
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
        fetch(`http://localhost:5000/item/${_id}`, {
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
            console.log(data);
          });
      }
    });
  };

  return (
    <div>
      <div className="text-center">
        <details className="dropdown">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilterItems("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilterItems("yes")}>
              <a>Yes</a>
            </li>
            <li onClick={() => handleFilterItems("no")}>
              <a>No</a>
            </li>
          </ul>
        </details>
      </div>

      <h1>All Art And Craft List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filterItmes.map((item) => (
          <div key={item._id} className="">
            <div className="card  bg-base-100 shadow-xl">
              <figure>
                <img src={item.image} alt="image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.itemName}</h2>
                <h3>{item.price}</h3>
                <p>{item.shortDescription}</p>
                <p>{item.selectedCustomize}</p>

                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn"
                  >
                    Delete
                  </button>
                  <Link to={`/updatePage/${item._id}`}>
                    <button className="btn">Update</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          // <>
          //   <p>{item.selectedCustomize}</p>
          // </>
          // <ItemsCard
          //   key={item._id}
          //   item={item}
          //   items={items}
          //   setItems={setItems}
          //   setFilterItems={setFilterItems}
          // />
        ))}
      </div>
    </div>
  );
};

export default MyArtList;
