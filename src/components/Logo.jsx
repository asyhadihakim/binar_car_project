import LogoImage from "../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="logo">
        <img src={LogoImage} alt="logo" />
      </div>
    </Link>
  );
};

export default Logo;
