import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-between align-items-start">
        <div className="col-md-6 mb-4">
          <h2 className="fw-bold mb-3">
            Masukanmu Membantu Kami Lebih Baik
          </h2>
          <p className="text-muted">
            Kami siap membantu dan senang terhubung denganmu.
            <br />
            Kami akan membalas dalam waktu 24 jam.
          </p>

          <div
            className="p-4 border rounded bg-light"
            style={{ marginTop: "175px" }}
          >
            <h6 className="fw-bold">Dukung Misi Kami</h6>
            <p className="text-muted mb-3">
              <strong>bukabuku</strong> ingin menghubungkan pembaca dengan
              buku-buku terbaik dari seluruh Indonesia.
            </p>
            <button
              className="btn rounded-pill px-4"
              style={{ backgroundColor: "#03045E", color: "#fff" }}
            >
              Dukung Sekarang
            </button>
          </div>
        </div>

        <div className="col-md-5">
          <form>
            <div className="mb-3">
              <label htmlFor="topik" className="form-label">
                Topik
              </label>
              <select className="form-select input" id="topik" required>
                <option value="">Pilih topik</option>
                <option>Pesanan</option>
                <option>Kerja Sama</option>
                <option>Kritik & Saran</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="nama" className="form-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control input"
                id="nama"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control input"
                id="email"
                placeholder="nama@email.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="pesan" className="form-label">
                Pesan
              </label>
              <textarea
                className="form-control input"
                id="pesan"
                rows="4"
                placeholder="Tulis pesan Anda..."
                required
              ></textarea>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="notRobot"
                required
              />
              <label className="form-check-label" htmlFor="notRobot">
                Saya bukan robot
              </label>
            </div>

            <button
              type="submit"
              className="btn w-100"
              style={{ backgroundColor: "#03045E", color: "#fff" }}
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
