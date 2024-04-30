import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";
// import ItemsCard from "../../Components/ItemsCard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { IoIosArrowDown } from "react-icons/io";

const MyArtList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [filterItmes, setFilterItems] = useState([]);

  // Filter by Customization--------------
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
              setFilterItems(remainingItem);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/item/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilterItems(data);
      });
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>TextileTrove - My Craft List</title>
      </Helmet>

      <div
        className="bg-cover h-[15rem]  bg-no-repeat	bg-center	object-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/8246743/pexels-photo-8246743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="flex justify-center items-center pt-16">
          <div>
            <h2 className="text-4xl text-[#0A2D45] mb-8">
              My Art And Craft LIst
            </h2>
            <Link to={"/"} className="mt-6 text-2xl text-blue-600">
              Home/
            </Link>
            <span>My Art And Craft LIst</span>
          </div>
        </div>
      </div>

      {/* Dropdown for filtering */}
      <div className="text-center mt-6">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#01EEFF] flex items-center">
            <span>Filter By Customization Advantage</span> <IoIosArrowDown />
          </summary>
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

      <div className="mx-auto text-center mt-6">
        <h2 className="text-4xl text-[#0A2D45] mb-6">My Art And Craft List</h2>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 p-2">
        {filterItmes.map((item) => (
          <div key={item._id} className="">
            <div className="card h-[35rem] cursor-pointer bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-[15rem] hover:scale-125 transition-all"
                  src={item.image}
                  alt="image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.itemName}</h2>
                <h3>{item.price}</h3>
                <p>{item.shortDescription}</p>
                <p>{item.selectedCustomize}</p>

                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-orange-600"
                  >
                    Delete
                  </button>
                  <Link to={`/updatePage/${item._id}`}>
                    <button className="btn bg-[#01EEFF]  ">Update</button>
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

          // />
        ))}
      </div>
    </div>
  );
};

export default MyArtList;
