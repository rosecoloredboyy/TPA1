import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-slate-500 z-10">
        <h1 className="w-full text-3xl font-bold text-amber-400">AAP.</h1>
        <ul className="hidden md:flex">
          <Link to="/home">
            <li className="p-4 hover:text-amber-400">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-4 hover:text-amber-400">About</li>
          </Link>
          <Link to="/portfolio">
            <li className="p-4 hover:text-amber-400">Portfolio</li>
          </Link>
          <Link to="/artikel">
            <li className="p-4 hover:text-amber-400">Article</li>
          </Link>
        </ul>

        <div onClick={handleNav} className="fixed right-4 md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div className={!nav ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-amber-200 bg-amber-50 ease-in-out duration-500 md:hidden" : "fixed left-[-100%] ease-in-out duration-500"}>
          <h1 className="w-full text-3xl font-bold text-amber-400 m-8">AAP.</h1>
          <ul className="pt-1">
            <Link to="/home">
              <li className="p-4 hover:text-amber-400">Home</li>
            </Link>
            <Link to="/about">
              <li className="p-4 hover:text-amber-400">About</li>
            </Link>
            <Link to="/portfolio">
              <li className="p-4 hover:text-amber-400">Portfolio</li>
            </Link>
            <Link to="/artikel">
              <li className="p-4 hover:text-amber-400">Article</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
