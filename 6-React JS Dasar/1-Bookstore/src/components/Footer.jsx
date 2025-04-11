import React from "react";

const Footer = ({ goToPage }) => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => goToPage("home")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => goToPage("team")}
            >
              Team
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => goToPage("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          &copy; Natasya Chesa Purnama - Universitas Trunojoyo Madura
        </p>
      </footer>
    </div>
  );
};

export default Footer;
