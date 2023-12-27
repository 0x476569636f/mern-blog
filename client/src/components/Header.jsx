import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <a href="" className="logo">
        MyBlog
      </a>
      <div className="navigation">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </header>
  );
};

export default Header;
