import Logo from "./Logo";
import { links } from "../utils/dummy";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Logo />
        <div className="navbar-links">
          {links.map((menu) => (
            <a href="/">{menu}</a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
