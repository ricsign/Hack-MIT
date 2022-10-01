import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i><b>Sus Tainability</b></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            dataBsToggle="collapse"
            dataBsTarget="#navbarNavAltMarkup"
            ariaControls="navbarNavAltMarkup"
            ariaExpanded="false"
            ariaLabel="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" ariaCurrent="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
