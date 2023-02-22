import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"
//import NavDropdown from "react-bootstrap/NavDropdown";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img width="10%" src="green_thumb_logo.png" alt="" />
          </NavLink>
          <div className="ml-auto">
            <Link to="/signup">
              <button className="btn btn-outline-dark me-2">Sign up</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-outline-dark">Login</button>
            </Link>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
