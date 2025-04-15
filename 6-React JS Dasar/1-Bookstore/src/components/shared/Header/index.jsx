import { Link } from "react-router";
import { useState } from "react";
import styles from "./index.module.css";
import Login from "../../../pages/auth/login";
import Register from "../../../pages/auth/Register";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  const openRegistration = () => setShowRegistration(true);
  const closeRegistration = () => setShowRegistration(false);

  return (
    <>
      <div className={styles.container}>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link
              to="#"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2FLogo1.png?alt=media&token=b8f5e16e-9a57-4bcc-9446-ec1abc28a68a"
                style={{ width: "100px", height: "60px" }}
                alt="Logo"
              />
            </Link>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link
                to="/"
                className={`nav-link px-2 btn btn-link ${styles.navHeader}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Books"
                className={`nav-link px-2 btn btn-link ${styles.navHeader}`}
              >
                Buku
              </Link>
            </li>
            <li>
              <Link
                to="/Team"
                className={`nav-link px-2 btn btn-link ${styles.navHeader}`}
              >
                Tim
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={`nav-link px-2 btn btn-link ${styles.navHeader}`}
              >
                Kontak
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button
              className="btn me-2"
              style={{ borderColor: "#03045E", color: "#03045E" }}
              onClick={openLogin}
            >
              Masuk
            </button>

            <button
              className="btn"
              style={{ backgroundColor: "#03045E", color: "#fff" }}
              onClick={openRegistration}
            >
              Daftar
            </button>
          </div>
        </header>
      </div>
      {showLogin && <Login onClose={closeLogin} />}
      {showRegistration && <Register onClose={closeRegistration} />}{" "}
    </>
  );
}
