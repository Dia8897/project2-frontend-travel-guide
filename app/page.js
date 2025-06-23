import Header from "./components/Header";
import Hero from "./components/Hero";
import Places from "./components/Places";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Places />
      <Contact />
      <Footer />
    </main>
  );
}
