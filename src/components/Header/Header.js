import Navbar from "../Navbar/Navbar";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content container">
        <div className="logo">
          <a href="#">
            <img src="images/logo.png" />
          </a>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
