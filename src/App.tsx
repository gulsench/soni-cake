import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Cakes from "./sections/Cakes";
import Gallery from "./sections/Gallery";
import WhyUs from "./sections/WhyUs";
import HowToOrder from "./sections/HowToOrder";
import CakeCare from "./sections/CakeCare";
import Policies from "./sections/Policies";
import Faq from "./sections/Faq";
import Visit from "./sections/Visit";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Cakes />
        <Gallery />
        <WhyUs />
        <HowToOrder />
        <CakeCare />
        <Policies />
        <Faq />
        <Visit />
      </main>

      <Footer />
    </>
  );
}
