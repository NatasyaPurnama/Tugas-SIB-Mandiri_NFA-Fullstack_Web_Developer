import React from "react";
import styles from "../index.module.css";

export default function Register({ onClose }) {
  return (
    <div className={`modal-dialog ${styles.modalOverlay}`} role="document">
      <div className={`modal-content rounded-4 shadow ${styles.modalContent}`}>
        <div className="modal-header p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 fs-2">Buat Akun Baru</h1>
          <button
            type="button"
            className="btn-close"
            aria-label="Tutup"
            onClick={onClose}
          />
        </div>

        <div className="modal-body p-5 pt-0">
          <form>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-3"
                id="fullName"
                placeholder="Nama Lengkap"
              />
              <label htmlFor="fullName">Nama Lengkap</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control rounded-3"
                id="registerEmail"
                placeholder="nama@email.com"
              />
              <label htmlFor="registerEmail">Alamat Email</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control rounded-3"
                id="registerPassword"
                placeholder="Kata Sandi"
              />
              <label htmlFor="registerPassword">Kata Sandi</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control rounded-3"
                id="confirmPassword"
                placeholder="Konfirmasi Kata Sandi"
              />
              <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
            </div>

            <button
              className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
              type="submit"
            >
              Daftar
            </button>

            <small className="text-body-secondary">
              Dengan mendaftar, kamu menyetujui syarat dan ketentuan layanan
              kami.
            </small>

            <div className="d-flex align-items-center my-4">
              <div className="flex-grow-1 border-top"></div>
              <span className="mx-3 text-muted fw-bold">
                Atau daftar dengan
              </span>
              <div className="flex-grow-1 border-top"></div>
            </div>

            <div className="d-flex justify-content-center gap-3 mb-4">
              <button
                className={`btn btn-outline-secondary ${styles.roundButton}`}
                type="button"
              >
                <i className="fab fa-google fa-lg"></i>
              </button>
              <button
                className={`btn btn-outline-secondary ${styles.roundButton}`}
                type="button"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </button>
              <button
                className={`btn btn-outline-secondary ${styles.roundButton}`}
                type="button"
              >
                <i className="fab fa-github fa-lg"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
