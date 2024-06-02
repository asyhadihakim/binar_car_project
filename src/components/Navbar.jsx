import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import { links } from "../utils/dummy";

// const [klik, setClick] = useState(true);
// const handleClick = (e) => {
//   console.log(e.target.value);
//   setClick(e.target.value);
//   console.log(klik);
// };
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Logo />
        <div className="navbar-links">
          {links.map((menu) => (
            <Link to={menu.url}>{menu.title}</Link>
          ))}
        </div>
        <div class="burger-btn">
          <a href="#">|||</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
