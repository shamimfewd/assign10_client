import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((reslut) => {
        console.log(reslut);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>

              <li>
                <NavLink to={"/allArtAndCraft"}>All Art & craft Items</NavLink>
              </li>

              {user && (
                <li>
                  <NavLink to={"/addCraftItem"}>Add Craft Item</NavLink>
                </li>
              )}

              {user && (
                <li>
                  <NavLink to={"/myArt&CraftList"}>My Art&Craft List</NavLink>
                </li>
              )}
              <li>
                <NavLink to={"/register"}>Register</NavLink>
              </li>
              {/* <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li> */}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/allArtAndCraft"}>All Art & craft Items</NavLink>
            </li>

            {user && (
              <li>
                <NavLink to={"/addCraftItem"}>Add Craft Item</NavLink>
              </li>
            )}

            {user && (
              <li>
                <NavLink to={"/myArt&CraftList"}>My Art&Craft List</NavLink>
              </li>
            )}

            <li>
              <NavLink to={"/register"}>Register</NavLink>
            </li>
            {/* <li>
              <NavLink to={"/login"}>  </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName || "Name not found"}
              >
                <img
                  className="w-10 h-10 rounded-full cursor-pointer "
                  src={
                    user?.photoURL ||
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  }
                  alt=""
                />
              </div>

              <button onClick={handleLogOut} className="btn">
                Log Out
              </button>
            </>
          ) : (
            <Link to={"/login"}>
              <button className="btn">LogIn</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
