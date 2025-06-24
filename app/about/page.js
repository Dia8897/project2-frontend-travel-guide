import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

export default function AboutPage() {
  return (

    <main>
      <Header />
      <Hero
        title="Discover Lebanon Through Our Eyes"
        description="We are passionate explorers dedicated to unveiling the beauty and culture of Lebanon. From the ancient ruins to bustling city streets and serene coastal escapes, our mission is to guide you through authentic experiences, insider tips, and unforgettable adventures that bring Lebanon to life."
        img1="../images/about.svg"
        message="Who We Are"
        reference="#About Us"
        textcolor="text-sky-700"
        btnBg="bg-sky-800"
        btnHover="hover:bg-sky-600"
        btnTxt="text-white"
      />
      <AboutUs />
      <Footer />
    </main>
  );
}
