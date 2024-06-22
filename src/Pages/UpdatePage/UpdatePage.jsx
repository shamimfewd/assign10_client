import { toast } from "react-toastify";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

const UpdatePage = () => {
  const loadedData = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCustomize, setSelectedCustomize] = useState("");
  const [selectedStocks, setSelectedStocks] = useState("");

  const {
    _id,
    image,
    itemName,
    price,
    rating,
    shortDescription,
    userName,
    email,
    processingTime,
  } = loadedData;

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleChangeCustomize = (e) => {
    setSelectedCustomize(e.target.value);
  };
  const handleChangeStock = (e) => {
    setSelectedStocks(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const processingTime = form.processingTime.value;

    const updatedItem = {
      image,
      itemName,
      price,
      rating,
      shortDescription,
      userName,
      email,
      processingTime,
      selectedCategory,
      selectedCustomize,
      selectedStocks,
    };
    console.log(updatedItem);

    fetch(`http://localhost:5000/itemData/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Update Item Successfully");
          console.log(data);
        }
      });
  };
  return (
    <>
      <div
        className="bg-cover h-[15rem]  bg-no-repeat	bg-center	object-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/8246743/pexels-photo-8246743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="flex justify-center items-center pt-16">
          <div>
            <h2 className="text-4xl text-[#0A2D45] mb-8">Update Item</h2>
            <Link to={"/"} className="mt-6 text-2xl text-[#00b38c]">
              Home/
            </Link>
            <span>Update Item</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Helmet>
          <title>TextileTrove - Update Craft</title>
        </Helmet>
        <form onSubmit={handleSubmit} className="w-4/5 ">
          <div className="bg-[#E8F0FE]  my-24 rounded-xl shadow-xl">
            <div className="pl-6 pt-10">
              <h3 className="text-3xl mb-4 text-[#000000ca] font-bold">
                Update Craft and Item
              </h3>
            </div>
            <div className="flex  gap-x-4 p-6">
              <div className="w-full">
                <label className="font-bold text-gray-700" htmlFor="">
                  Image URL:
                </label>
                <br />
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  className="w-full p-2 outline-none rounded-lg   text-[#000000dc] bg-[#F8F8F8]"
                  placeholder="image URL"
                />
                <br />
                <br />

                <label className="font-bold text-gray-700" htmlFor="">
                  Item Name:
                </label>
                <br />
                <input
                  type="text"
                  name="itemName"
                  defaultValue={itemName}
                  className="w-full p-2 outline-none rounded-lg text-[#000000dc] bg-[#F8F8F8]"
                  placeholder="Item Name"
                />
                <br />
                <br />

                <label className="font-bold text-gray-700" htmlFor="">
                  Subcategory Name:
                </label>
                <br />

                <select
                  className="select select-bordered w-full "
                  value={selectedCategory}
                  onChange={handleChangeCategory}
                >
                  <option disabled selected value={""}>
                    Select Option
                  </option>
                  <option value={"embroidery"}>Embroidery</option>
                  <option value={"knittingandcrocheting"}>
                    Knitting & Crocheting
                  </option>
                  <option value={"quilting"}>Quilting</option>
                  <option value={"beadwork"}>Beadwork</option>
                  <option value={"tieDyeing"}>Tie-Dyeing</option>
                  <option value={"macrame"}>Macrame</option>
                </select>

                <br />
                <br />

                <label className="font-bold text-gray-700" htmlFor="">
                  Price:
                </label>
                <br />
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  className="w-full p-2 outline-none rounded-lg text-[#000000dc] bg-[#F8F8F8]"
                  placeholder="price"
                />
                <br />
                <br />

                <label className="font-bold text-gray-700" htmlFor="">
                  Rating:
                </label>
                <br />
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  className="w-full p-2 outline-none rounded-lg text-[#000000dc] bg-[#F8F8F8]"
                  placeholder="rating"
                />
                <br />
                <br />
              </div>
              <div className="w-full">
                <label className="font-bold text-gray-700" htmlFor="">
                  Customization:
                </label>
                <br />

                <select
                  className="select select-bordered w-full"
                  value={selectedCustomize}
                  onChange={handleChangeCustomize}
                >
                  <option disabled selected value={""}>
                    Select Option
                  </option>
                  <option value={"yes"}>Yes</option>
                  <option value={"no"}>No</option>
                </select>

                <br />
                <br />

                <label className="font-bold text-gray-700" htmlFor="">
                  Processing Time:
                </label>
                <br />
                <input
                  type="text"
                  name="processingTime"
                  defaultValue={processingTime}
                  className="w-full p-2 outline-none rounded-lg text-[#000000dc] bg-[#F8F8F8]"
                  placeholder="processing time"
                />
                <br />
                <br />

                <label className="font-bold text-gray-700" htmlFor="">
                  Stock Status:
                </label>
                <br />

                <select
                  className="select select-bordered w-full "
                  value={selectedStocks}
                  onChange={handleChangeStock}
                >
                  <option disabled selected value={""}>
                    Select Option
                  </option>
                  <option value={"inStock"}>In Stock</option>
                  <option value={"madeToOrder"}>Made to Order</option>
                </select>

                <br />
                <br />

                <label className="font-bold text-gray-700" htmlFor="">
                  User Email:
                </label>
                <br />
                <input
                  type="email"
                  defaultValue={email}
                  name="email"
                  className="w-full p-2 outline-none rounded-lg text-[#000000dc] bg-[#F8F8F8]"
                  placeholder="user email"
                />
                <br />
                <br />

                <label className="font-bold text-gray-700" htmlFor="">
                  User Name:
                </label>
                <br />
                <input
                  type="text"
                  defaultValue={userName}
                  name="userName"
                  className="w-full p-2 outline-none rounded-lg text-[#000000dc] bg-[#F8F8F8]"
                  placeholder="user name"
                />
                <br />
                <br />
              </div>
            </div>

            <div className="px-6">
              <label className="font-bold text-gray-700" htmlFor="">
                Short Description:
              </label>
              <br />
              <textarea
                name="shortDescription"
                id=""
                defaultValue={shortDescription}
                className="w-full p-2 outline-none rounded-lg text-[#000000dc] bg-[#F8F8F8]"
                placeholder="short description"
                cols="5"
                rows="5"
              ></textarea>
              <br />
              <br />

              <input
                type="submit"
                className="btn w-full px-6  bg-[#00b38c] hover:bg-[#00b38c] text-white text-2xl mb-6"
                value="Update Item"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePage;
