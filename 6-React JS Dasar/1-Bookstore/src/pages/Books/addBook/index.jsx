import React, { useState } from "react";
import books from "../../../Utils/books";
import styles from "./index.module.css";

export default function AddBookForm({ onClose }) {

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    image: "",
    originalPrice: "",
    discountPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const book = JSON.parse(localStorage.getItem("books")) || books;

    const newBooks = {
      id: book.length + 1,
      title: newBook.title,
      author: newBook.author,
      image: newBook.image,
      originalPrice: parseInt(newBook.originalPrice),
      discountPrice: parseInt(newBook.discountPrice),
    };

    const updatedBooks = [...book, newBooks];

    localStorage.setItem("books", JSON.stringify(updatedBooks));

    alert("Buku berhasil ditambahkan!");
    onClose();
  };

  return (
    <div className={`modal-dialog ${styles.modalOverlay}`} role="document">
      <div className={`modal-content rounded-4 shadow ${styles.modalContent}`}>
        <div className="modal-header p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 fs-2">Form Tambah Buku</h1>
          <button
            type="button"
            className="btn-close"
            aria-label="Tutup"
            onClick={onClose}
          />
        </div>

        <div className="modal-body p-5 pt-0">
          <div style={{ maxWidth: "500px", margin: "auto" }}>
            <input
              type="text"
              name="title"
              placeholder="Judul"
              value={newBook.title}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <input
              type="text"
              name="author"
              placeholder="Penulis"
              value={newBook.author}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <input
              type="url"
              name="image"
              placeholder="URL Gambar"
              value={newBook.image}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <input
              type="number"
              name="originalPrice"
              placeholder="Harga Asli"
              value={newBook.originalPrice}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <input
              type="number"
              name="discountPrice"
              placeholder="Harga Diskon"
              value={newBook.discountPrice}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <button
              onClick={handleSubmit}
              className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
            >
              Tambah Buku
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
