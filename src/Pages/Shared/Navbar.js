import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import img from "../../assets/images/navLogo.png"

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const menuItems = (
    <>
      <li><Link to="/"> <span className="font-bold text-lg text-gray-500">Home</span> </Link></li>
      <li><Link to="/appointment"><span className="font-bold text-lg text-gray-500">Appointment</span></Link></li>
      <li><Link to="/doctors"><span className="font-bold text-lg text-gray-500">Doctors</span></Link></li>
      <li><Link to="/contact"><span className="font-bold text-lg text-gray-500">Contact</span></Link></li>
      <li><Link to="/about"><span className="font-bold text-lg text-gray-500">About</span></Link></li>
      {
        user && <li><Link to="/dashboard"><span className="font-bold text-lg text-gray-500">Dashboard</span></Link></li>
      }

    </>
  );

  return (

    <div className="navbar bg-base-200 px-12 py-3 mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl"><img className='rounded' src={img} width="90px" alt="" /></a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 mt-5 text-lg">
          {menuItems}
        </ul>
      </div>

      <div className="navbar-end">
        <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        {user ? <button className="btn btn-ghost font-bold bg-white text-gray-500" onClick={logout} >Sign Out</button> : <Link to="/login" className="btn btn-ghost font-bold bg-white text-gray-500">Login</Link>}
      </div>

    </div>
  );
};

export default Navbar;