import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="header">
        <Link className="header-title" to="/">
          <h2>DEMO Streaming</h2>
        </Link>
        <div className="header-options">
          <a href="/">Login</a>
          <button>Start your free trial</button>
        </div>
      </div>
      <div className="sub-header">
      <h3 >Popular Titles</h3>

      </div>
    </>
  );
};
