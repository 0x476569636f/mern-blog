import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="" className="logo">
        MyBlog
      </Link>
      <div className="navigation">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </header>
  );
};

export default Header;
