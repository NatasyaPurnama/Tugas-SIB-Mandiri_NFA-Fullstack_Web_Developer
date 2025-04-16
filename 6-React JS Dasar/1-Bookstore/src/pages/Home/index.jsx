import Header from "../../components/shared/Header";
import Hero from "../../components/shared/Hero";
import ProductList from "../../components/shared/ProductList";
import Testimonials from "../../components/shared/Testimonials";
import Footer from "../../components/shared/Footer";
import books from "../../Utils/books";

export default function Home() {
  const book = books.slice(0, 8);
  return (
    <>
      <Header />
      <Hero />
      <ProductList books={book} />
      <Testimonials />
      <Footer />
    </>
  );
}
