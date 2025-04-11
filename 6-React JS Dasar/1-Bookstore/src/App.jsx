import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("home");

  const render = () => {
    if (page === "home") return <Home />;
    if (page === "team") return <Team />;
    if (page === "contact") return <Contact />;
  };

  return (
    <>
      <Header goToPage={setPage} />
      {render()}
      <Footer goToPage={setPage} />
    </>
  );
}

export default App;