import styles from "./index.module.css";
import { useState } from "react";

export default function ProductList() {
  // Array buku yg dijual
  const books = [
    {
      id: 1,
      title: "Bulan",
      author: "Tere Liye",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2Fbulann.png?alt=media&token=63706a14-42a7-49b1-b332-b37c83babd3c",
      originalPrice: 120000,
      discountPrice: 85000,
    },
    {
      id: 2,
      title: "Bumi",
      author: "Tere Liye",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2Fbumi.png?alt=media&token=e594d733-7fcc-45e7-a50d-7775e09424a5",
      originalPrice: 95000,
      discountPrice: 79000,
    },
    {
      id: 3,
      title: "Matahari",
      author: "Tere Liye",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2Fmatahari.png?alt=media&token=08ed6777-cb20-4652-91c9-bede96b577d4",
      originalPrice: 110000,
      discountPrice: 88000,
    },
    {
      id: 4,
      title: "Bintang",
      author: "Tere Liye",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2Fcover-novel-bintang-karya-tere-liye.png?alt=media&token=22bee344-ae6f-417e-83e7-dc0b6b6924f8",
      originalPrice: 110000,
      discountPrice: 88000,
    },
    {
      id: 5,
      title: "Kala Itu Langit Biru",
      author: "Nur Saidah",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2Fkala%20itu.png?alt=media&token=66853b4d-5617-4047-9225-08fba2c4cc91",
      originalPrice: 110000,
      discountPrice: 88000,
    },
    {
      id: 6,
      title: "Kedamaian",
      author: "Riki Santo",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2Fkedamaian.png?alt=media&token=b36b467b-839b-41a0-99e8-3a01dd173ba2",
      originalPrice: 110000,
      discountPrice: 88000,
    },
    {
      id: 7,
      title: "Lukisan Senja",
      author: "Nur Saidah",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2Flukisn%20senja.png?alt=media&token=ee4e86f4-bb56-4b95-a2c0-9493cd794b98",
      originalPrice: 110000,
      discountPrice: 88000,
    },
    {
      id: 8,
      title: "Kala Itu",
      author: "Nur Saidah",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sriusnyoba.appspot.com/o/Project%20NF%2FReact%2Fmoza.png?alt=media&token=375ed2cc-a09e-4953-b809-c55b1d256d22",
      originalPrice: 110000,
      discountPrice: 88000,
    },
  ];

  const [liked, setLiked] = useState(Array(books.length).fill(false));

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
              <div className="col d-flex justify-content-center" key={index}>
                <div
                  className={`card shadow-sm ${styles.card}`}
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
                        Rp{book.discountPrice}
                      </span>
                      <span className="text-muted text-decoration-line-through">
                        Rp{book.originalPrice}
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