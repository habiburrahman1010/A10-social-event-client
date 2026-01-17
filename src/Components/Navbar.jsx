import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);

  const handleLogout = () => {
    logOut().catch(console.error);
  };

  const links = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/events">Upcoming Events</Link></li>
      <li><Link to= "/create-event">Create Events</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Social Events</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                className="w-9 h-9 rounded-full"
                src={user.photoURL || "https://i.ibb.co/2kRzZ0n/user.png"}
                alt=""
              />
            </div>
            <button onClick={handleLogout} className="btn btn-sm btn-neutral">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm">Login</Link>
            <Link to="/register" className="btn btn-sm btn-outline">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
