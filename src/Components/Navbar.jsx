import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import Loading from "../pages/Loading";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContex);

  const handleLogout = () => {
    logOut().catch(console.error);
  };

  // If Firebase is still checking auth, show loading skeleton
  if (loading) {
    return (
      <div className="navbar bg-base-100 shadow-sm px-4 ">
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
      {/* Navbar Start */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          Social Events
        </Link>
      </div>

      {/* Navbar Center */}
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

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        {!user ? (
         
          <Link to="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        ) : (
          <>
            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={user.displayName || "User"}
              >
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL || "https://i.ibb.co/2kRzZ0n/user.png"}
                    alt="User"
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

            {/* Logout Button */}
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
