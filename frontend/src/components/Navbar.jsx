import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark align-self-start">
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
              <a className="nav-link active" ariaCurrent="page" href="#home">
                Home
              </a>
              <a className="nav-link" href="#record">
                Record
              </a>
              <a className="nav-link" href="#leaderboard">
                Leaderboard
              </a>
              <a className="nav-link" href="#analytics">
                Analytics
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
