import Header from "../../components/shared/Header";
import Hero from "../../components/shared/Hero";
import ProductList from "../../components/shared/ProductList";
import Testimonials from "../../components/shared/Testimonials";
import Footer from "../../components/shared/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductList />
      <Testimonials />
      <Footer />
    </>
  );
}