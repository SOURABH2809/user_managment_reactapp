import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

  return (
    <header className="flex items-center justify-between p-4  bg-violet-800 text-white shadow-lg">
      <h1 className="text-xl font-bold ml-10 font-sans">
        USER ACCOUNT MANAGMENT APP
      </h1>

      <div className="flex items-center space-x-4">
        <button
          onClick={handleLogout}
          className="hidden sm:block px-4 py-1 mr-10 text-black font-bold  bg-slate-50 rounded-xl hover:bg-slate-800 hover:text-white transition"
        >
          Logout
        </button>

        <div className="sm:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
