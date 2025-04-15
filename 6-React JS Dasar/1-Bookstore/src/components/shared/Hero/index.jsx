import styles from "./index.module.css";

export default function Hero() {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1
              className="display-6 fw-bold lh-1 text-start"
              style={{ color: "#03045E", marginBottom:"25px" }}
            >
              Temukan, Beli, dan Nikmati Buku Favorit Anda!
            </h1>
            <p className="lead text-start">
              Jelajahi koleksi buku yang luas dari berbagai genre, beli dengan
              mudah, dan nikmati pengalaman membaca yang lancar—semuanya hanya
              dalam beberapa klik!
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className={`btn btn-lg px-4 me-md-2 fw-bold ${styles.btnPrimaryCustom}`}
              >
                Beli Sekarang
              </button>

              <button
                type="button"
                className={`btn btn-outline-secondary btn-lg px-4 ${styles.btnOutlineCustom}`}
              >
                Buku Terbaik
              </button>
            </div>
          </div>

          <div className="col-lg-4 offset-lg-1 p-2 overflow-hidden">
            <img
              className="rounded-lg-3 img-fluid mx-auto d-block"
              src="https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2FReading%20book-pana.png?alt=media&token=5e31f307-1040-4f0d-887a-c37828727c8e"
              style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}