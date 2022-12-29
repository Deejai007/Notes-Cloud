import { React } from "react";
import { useLocation, Link } from "react-router-dom";
const Navbar = () => {
  let location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NoteCloud
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={`nav-item  ${
                  location.pathname === "/"
                    ? "active text-decoration-underline"
                    : ""
                } `}
              >
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/about"
                    ? "active text-decoration-underline"
                    : ""
                } `}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search"> */}
            {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                placeholder="Search"
                aria-label="Search"
              /> */}

            {/* </form> */}
            <Link
              className="btn btn-outline-primary mx-1"
              to="login"
              role="button"
            >
              Login
            </Link>
            <Link className="btn btn-primary mx-1" to="signup" role="button">
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
