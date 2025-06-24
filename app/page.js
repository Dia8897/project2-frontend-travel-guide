import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero 
       title =" Welcome to Your Ultimate Lebanon Travel Guide"
        description="Start your adventure in Lebanon with us! Whether you’re seeking stunning landscapes, rich history, delicious cuisine, or vibrant culture, our guide offers everything you need to plan an unforgettable trip. Dive into expert tips, must-see places, and local secrets—all in one place."
        img1="/images/hero.svg"
        message="Explore Destinations"
        reference="../destinations"
      />
      <Footer />
    </main>
  );
}
