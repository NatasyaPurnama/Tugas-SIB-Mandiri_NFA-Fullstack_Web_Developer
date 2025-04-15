import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Books from "./pages/books";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import './App.css';


function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Team" element={<Team />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;