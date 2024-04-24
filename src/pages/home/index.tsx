import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Home from "../../components/home/Home";
import Services from "../../components/services/Services";
// import Services from "../../components/services/Services-reserva";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
