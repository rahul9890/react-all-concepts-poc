import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="btn btn-primary m-1">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/adduser" className="btn btn-primary m-1">
                    AddUser
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/showuser" className="btn btn-primary m-1">
                    Show Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
