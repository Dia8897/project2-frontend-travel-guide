import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"
import {places} from "./placesData"
import Places from "./components/Places";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero
        title=" Welcome to Your Ultimate Lebanon Travel Guide"
        description="Start your adventure in Lebanon with us! Whether you’re seeking stunning landscapes, rich history, delicious cuisine, or vibrant culture, our guide offers everything you need to plan an unforgettable trip. Dive into expert tips, must-see places, and local secrets—all in one place."
        img1="/images/hero.svg"
        message="Explore Destinations"
        reference="../destinations"
        textcolor="text-gray-700"
        btnBg="bg-gray-400"
        btnHover="hover:bg-gray-300"
        btnTxt="text-sky-800"
      />

      <AboutUs
        content="Start your journey through Lebanon with handpicked recommendations, expert travel tips, and hidden gems you won't find in typical guides. From city buzz to mountain calm, this platform is your trusted companion to explore Lebanon's diverse beauty with confidence and ease."
        direction="left"
      />

      <Places
        title="Top Destinations"
        places={places.slice(0,3)}
      />
      <Footer />
    </main>
  );
}
