import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const loadedData = useLoaderData();
  const { id } = useParams();

  const currentItem = loadedData.find((item) => item._id === id);
  const {  image,
    itemName,
    price,
    rating,
    shortDescription,
    
    processingTime,
    selectedCategory,
    selectedCustomize,
    selectedStocks, } = currentItem;

  return (
    <div>
      <Helmet>
        <title>TextileTrove - Craft Details</title>
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
              Art And Craft Details
            </h2>
            <Link to={"/"} className="mt-6 text-2xl text-blue-600">
              Home/
            </Link>
            <span> Details Page</span>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-6">
        <figure>
          <img className="h-[30rem]" src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p>Rating: {rating}</p>
          <p>Price: ${price}</p>
          <p>Processing Time: {processingTime}hr</p>
          <p>Customize: {selectedCustomize}</p>
          <p>Stock Status: {selectedStocks}</p>
          <p>Category: {selectedCategory}</p>
          <hr />
          <p>
            {" "}
            <span className="text-xl"> Description:</span> {shortDescription}
          </p>
          <div className="card-actions justify-end">
            <Link to={"/allArtAndCraft"}>
              <button className="btn btn-primary">Go Back</button>
            </Link>
            <button className="btn bg-[#01EEFF] ">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
