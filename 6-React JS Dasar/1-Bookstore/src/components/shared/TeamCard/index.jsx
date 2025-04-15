import { Link } from "react-router";

export default function TeamCard() {
  return (
    <>
      <div className="container pt-3 pb-5">
        <div className="text-center mb-5">
          <h3 className="fw-bold">Tentang Pembuat</h3>
          <p className="lead text-secondary">
            Pikiran kreatif di balik <strong>BukaBuku</strong>
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg p-3 mb-5 bg-white text-center rounded-5">
              <div className="position-relative">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2FIMG_6242.JPG?alt=media&token=a8e99471-4b45-406e-bc8b-7112a8e768dc"
                  className="rounded-circle mx-auto d-block"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    marginTop: "20px",
                  }}
                />
              </div>
              <div className="card-body mt-3">
                <h4 className="card-title fw-semibold">
                  Natasya Chesa Purnama
                </h4>
                <span className="badge bg-primary mb-2">
                  Junior Fullstack Developer
                </span>
                <p className="card-text text-muted">
                  Mahasiswi Universitas Trunojoyo Madura yang aktif dan antusias
                  dalam bidang <strong>UI/UX Design</strong> &{" "}
                  <strong>Web Development</strong>. Saat ini sedang menjalani
                  program magang sebagai Fullstack Developer di PT. Nurul Fikri
                  Cipta Inovasi.
                </p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <Link
                    to="mailto:natasya@example.com"
                    className="btn btn-outline-dark btn-sm"
                  >
                    <i className="fa-solid fa-envelope me-1"></i>Email
                  </Link>
                  <Link
                    to="https://linkedin.com/in/natasya"
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin me-1"></i>LinkedIn
                  </Link>
                </div>
              </div>
              <div className="card-footer bg-transparent border-0">
                <small className="text-muted">
                  Universitas Trunojoyo Madura • 2022
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
