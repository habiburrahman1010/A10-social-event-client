import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../provider/AuthProvider";
import Loading from "../pages/Loading";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContex);

  const handleLogout = () => logOut().catch(console.error);


  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  if (loading) {
    return (
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="flex items-center justify-between w-full">
          <div className="bg-gray-200 dark:bg-gray-700 h-8 w-32 rounded animate-pulse"></div>
          <div className="flex gap-2">
            <div className="bg-gray-200 dark:bg-gray-700 h-8 w-20 rounded animate-pulse"></div>
            <div className="bg-gray-200 dark:bg-gray-700 h-8 w-8 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
   
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold">
          Social <span className="text-blue-700">Events</span>
        </Link>
      </div>

  
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Upcoming Events</Link>
          </li>
        </ul>
      </div>

   
      <div className="navbar-end flex items-center gap-3">
   
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => handleTheme(e.target.checked)}
          />
          <BsMoon className="swap-on text-xl text-gray-700" />
          <BsSun className="swap-off text-xl text-yellow-400" />
        </label>

        {!user ? (
          <Link to="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        ) : (
          <>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={user.displayName || "User"}
              >
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/vxrpPf75/man-in-suit-and-tie.png"
                    }
                    alt={user.displayName || "User"}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <Link to="/create-event">Create Event</Link>
                </li>
                <li>
                  <Link to="/my-events">Manage Events</Link>
                </li>
                <li>
                  <Link to="/joined-events">Joined Events</Link>
                </li>
              </ul>
            </div>

            <button onClick={handleLogout} className="btn btn-sm btn-primary">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
