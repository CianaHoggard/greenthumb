import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext, useToken } from "./Token";

function Nav() {

  const { token, setToken } = useAuthContext();
  const { logout } = useToken();
  const [nonAuthButtons, setNonAuthButtons] = useState("")
  const [AuthButtons, setAuthButtons] = useState("")

  const isLoggedIn = () => {
    if (!token) {
      setNonAuthButtons("ml-auto")
      setAuthButtons("dropdown d-none")
    } else {
      setNonAuthButtons("ml-auto d-none")
      setAuthButtons("dropdown")
    }
  }

  useEffect(() => {
    isLoggedIn();
  });

  const handleLogOut = async () => {
    await logout()
    setToken(null)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img width="20%" src="small_green_thumb_logo.png" alt="" />
        </NavLink>
        <div className={nonAuthButtons}>
          <Link to="/signup">
            <button className="btn btn-outline-dark me-2">Sign up</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-outline-dark">Login</button>
          </Link>
        </div>

        <div className={AuthButtons}>
          <button className="btn text-dark dropdown-toggle pe-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Quick Links
          </button>
          <ul className="dropdown-menu">
            {/* WORK ON THESE 3 */}
            <li>
              <NavLink className="dropdown-item" aria-current="page" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" aria-current="page" to="/favorites">My Plants</NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" aria-current="page" to="/categories">Search Categories</NavLink>
            </li>
            {/* DONE */}
            <li>
              <button className="dropdown-item" onClick={handleLogOut}>Log Out</button>
            </li>
          </ul>
        </div>

      </div>
    </nav >
  );
}

export default Nav;
