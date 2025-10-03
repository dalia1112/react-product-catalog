import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navigations = [
  { path: "/", name: "Home" },
  { path: "/products", name: "Products" },
  { path: "/about", name: "About" },
];

const Navbar = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgb(227 230 243)" }}
        className=" px-12 flex items-center justify-between border-b-1 border-b-black/20"
      >
        <div className="px-10">
          <img src={logo} alt="logo" className="w-40 h-16 object-contain" />
        </div>

        <ul className="flex gap-5 items-center m-4 font-medium ps-5 ">
          {Navigations.map((ele, index) => (
            <NavLink to={ele.path} key={index}>
              {({ isActive }) => (
                <li
                  className={
                    isActive
                      ? "text-emerald-600  text-xl"
                      : "text-black text-lg "
                  }
                >
                  {ele.name}
                </li>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
