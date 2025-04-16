import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import ProductList from "../../components/shared/ProductList";
import React, { useEffect, useState } from "react";
import books from "../../Utils/books";

export default function Books(){
    const [newBook, setNewBook] = useState([]);

    useEffect(() => {
      const storedBooks = JSON.parse(localStorage.getItem("books")) || books;
      setNewBook(storedBooks);
    }, []);
    return (
      <>
        <Header />
        <ProductList books={newBook} />
        <Footer />
      </>
    );
}