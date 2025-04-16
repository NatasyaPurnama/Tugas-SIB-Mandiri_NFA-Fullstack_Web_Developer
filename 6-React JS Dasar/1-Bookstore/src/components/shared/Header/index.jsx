import { Link } from "react-router";
import { useState, useEffect } from "react";
import Login from "../../../pages/auth/Login";
import Register from "../../../pages/auth/Register";
import styles from "./index.module.css";
import AddBookForm from "../../../pages/Books/addBook";

export default function Header() {
  // untuk menyimpan user accoutn dengan nilai null
  const [user, setUser] = useState(null);
  // untuk membuka/menutup modal login/masuk
  const [showLogin, setShowLogin] = useState(false);
  // untuk membuka/menutup modal registrasi/daftar
  const [showRegistration, setShowRegistration] = useState(false);
  // untuk membuka/menutup dropdown pada navigasi buku
  const [showProfileDropdown, profileDropDown] = useState(false);
  // untuk membuka/menutup modal tambah buku
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  const openRegistration = () => setShowRegistration(true);
  const closeRegistration = () => setShowRegistration(false);

  const openAddBookModal = () => setShowAddBookModal(true);
  const closeAddBookModal = () => setShowAddBookModal(false);

  // untuk menyimpan login user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // untuk logout
  const buttonLogout = () => {
    setUser(null);
    profileDropDown(false);
    localStorage.removeItem("user");
  };

  const Dropdown = () => {
    profileDropDown((prevState) => !prevState);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    closeLogin();
  };

  return (
    <>
      <div className={styles.container}>
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          <Link to="/" className="d-inline-flex">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2FLogo1.png?alt=media&token=b8f5e16e-9a57-4bcc-9446-ec1abc28a68a"
              alt="Logo"
              style={{ width: "100px", height: "60px" }}
            />
          </Link>

          <ul className="nav">
            <li>
              <Link to="/" className={`nav-link ${styles.navHeader}`}>
                Home
              </Link>
            </li>
            {/* Dropwdon buku jika berhasil login sebagai admin*/}
            {user?.name === "Admin" ? (
              <li className="nav-item dropdown">
                <span
                  className={`nav-link dropdown-toggle ${styles.navHeader}`}
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Buku
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/books">
                      Lihat Koleksi Buku
                    </Link>
                  </li>
                  {/* menu untuk menambahkan buku dengan modal form tambah buku */}
                  <li>
                    <Link className="dropdown-item" onClick={openAddBookModal}>
                      Tambah Buku
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Edit Buku</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Hapus Buku</Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <Link to="/books" className={`nav-link ${styles.navHeader}`}>
                  Buku
                </Link>
              </li>
            )}
            {/* <li>
              <Link to="/Books" className={`nav-link ${styles.navHeader}`}>
                Buku
              </Link>
            </li> */}
            <li>
              <Link to="/Team" className={`nav-link ${styles.navHeader}`}>
                Tim
              </Link>
            </li>
            <li>
              <Link to="/Contact" className={`nav-link ${styles.navHeader}`}>
                Kontak
              </Link>
            </li>
          </ul>

          <div>
            {/* dropdown user jika berhasil login sebagai admin */}
            {user ? (
              <div className="d-flex align-items-center">
                <div
                  className="d-flex align-items-center gap-2"
                  style={{ cursor: "pointer" }}
                  onClick={Dropdown}
                >
                  <img
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                    alt="Profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <span>Welcome, {user.name}</span>
                </div>

                {showProfileDropdown && (
                  <div
                    className="dropdown-menu show"
                    style={{ position: "absolute", right: "10px", top: "50px" }}
                  >
                    <button className="dropdown-item" type="button">
                      Pengaturan
                    </button>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={buttonLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </header>
      </div>

      {showLogin && (
        <Login onClose={closeLogin} onLoginSuccess={handleLoginSuccess} />
      )}
      {showRegistration && <Register onClose={closeRegistration} />}
      {showAddBookModal && <AddBookForm onClose={closeAddBookModal} />}
    </>
  );
}
