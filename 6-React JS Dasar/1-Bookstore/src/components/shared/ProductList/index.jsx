import styles from "./index.module.css";
import { useState } from "react";

export default function ProductList({ books }) {
  const [liked, setLiked] = useState([]);

  const buttonLike = (index) => {
    const update = [...liked];
    update[index] = !update[index];
    setLiked(update);
  };

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Koleksi Kami</h1>
            <p className="lead text-body-secondary">
              Buka dunia pengetahuan—Pilih, beli buku, dan mulailah membaca hari
              ini!
            </p>
            <p>
              <a
                href="#"
                className="btn me-2"
                style={{ backgroundColor: "#03045E", color: "#fff" }}
              >
                Masuk
              </a>
              <a
                href="#"
                className="btn"
                style={{
                  borderColor: "#03045E",
                  color: "#03045E",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                Daftar
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {books.map((book, index) => (
              <div className="col d-flex justify-content-center" key={book.id}>
                <div
                  className={`card ${styles.card}`}
                  style={{
                    width: "100%",
                    maxWidth: "270px",
                    borderRadius: "12px",
                  }}
                >
                  <div className="position-relative">
                    <img
                      src={book.image}
                      className="card-img-top"
                      alt={book.title}
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                      }}
                    />
                    <button
                      className="position-absolute top-0 end-0 m-2 bg-white border-0 p-2 d-flex align-items-center justify-content-center rounded-circle shadow"
                      onClick={() => buttonLike(index)}
                      style={{
                        width: "36px",
                        height: "36px",
                      }}
                    >
                      <i
                        className={
                          liked[index]
                            ? "fa-solid fa-heart text-danger"
                            : "fa-regular fa-heart text-secondary"
                        }
                        style={{ fontSize: "16px" }}
                      ></i>
                    </button>
                  </div>
                  <div className="card-body px-3 py-2">
                    <p
                      className="mb-1 text-muted"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {book.author}
                    </p>
                    <h5
                      className="card-title mb-2"
                      style={{ fontSize: "1.05rem" }}
                    >
                      {book.title}
                    </h5>
                    <p className="mb-2">
                      <span className="text-danger fw-bold me-2">
                        Rp{book.discountPrice.toLocaleString()}
                      </span>
                      <span className="text-muted text-decoration-line-through">
                        Rp{book.originalPrice.toLocaleString()}
                      </span>
                    </p>
                    <button className="btn btn-sm btn-outline-primary w-100">
                      Beli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
