import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import ItemsCard from "../../Components/ItemsCard";

const MyArtList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/item/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);

  return (
    <div>
      <h1>All Art And Craft List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ItemsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyArtList;
