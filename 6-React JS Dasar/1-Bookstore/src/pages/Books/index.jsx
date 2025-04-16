import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import ProductList from "../../components/shared/ProductList";
import books from "../../Utils/books";

export default function Books(){
    return (
      <>
        <Header />
        <ProductList books={books} />
        <Footer />
      </>
    );
}