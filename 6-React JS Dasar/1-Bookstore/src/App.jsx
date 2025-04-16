import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Books from "./pages/books";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import './App.css';
import AddBookForm from "./pages/Books/addBook";
import { useState } from "react";

function App() {
  const [setBook] = useState([]);
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route
              path="books/add"
              element={<AddBookForm setBooks={setBook} />}
            />

            <Route path="Contact" element={<Contact />} />
            <Route path="Team" element={<Team />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;