import Header from "../components/Header";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <Hero
        title="Get in Touch with Us"
        description="Have questions or need personalized travel advice? Our friendly team is here to help! Reach out anytime for support, recommendations, or to share your own Lebanese travel stories. Let’s make your journey truly exceptional."
        img1="../images/contact.svg"
        message="We're here to help!"
        reference="#Contact Us"
      />
      <Contact />
      <Footer />
    </main>
  );
}