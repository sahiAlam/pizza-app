import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import { Link, NavLink } from "react-router-dom";
import Home from "../Pages/Home";

const NavBar = () => {
  return (
    <>
      <div className="md:container m-auto flex items-center justify-between px-4 py-2">
        <Link to={<Home />}>
          <img src={logo} alt="logo" className="w-16 md:w-20" />
        </Link>
        <div>
          <ul>
            <li className="space-x-4 md:space-x-6 flex items-center font-medium">
              <NavLink to="/" className="text-sm md:text-lg">
                Home
              </NavLink>
              <NavLink to="/products" className="text-sm md:text-lg">
                Products
              </NavLink>
              <span className="bg-yellow-500 py-1 px-2 md:px-4 rounded-xl md:rounded-full">
                <p className="inline-block font-bold">10</p>
                <button className="inline-block">
                  <Link to="/cart">
                    <img src={cart} alt="cart" />
                  </Link>
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;