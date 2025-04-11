import React from "react";

const Header = ({ goToPage }) => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="#"
            className="d-inline-flex link-body-emphasis text-decoration-none"
            onClick={() => goToPage("home")}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2FLogo1.png?alt=media&token=b8f5e16e-9a57-4bcc-9446-ec1abc28a68a"
              style={{ width: "100px", height: "60px" }}
              alt="Logo"
            />
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <button
              onClick={() => goToPage("home")}
              className="nav-link px-2 btn btn-link nav-header"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => goToPage("team")}
              className="nav-link px-2 btn btn-link nav-header"
            >
              Team
            </button>
          </li>
          <li>
            <button
              onClick={() => goToPage("contact")}
              className="nav-link px-2 btn btn-link nav-header"
            >
              Contact
            </button>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          <button
            type="button"
            className="btn me-2"
            style={{ borderColor: "#03045E", color: "#03045E" }}
          >
            Masuk
          </button>
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: "#03045E", color: "#fff" }}
          >
            Daftar
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;