import Header from "../components/Header";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs"

export default function ContactPage() {
  return (
    <main>
      <Header />
      <Hero
        title="Get in Touch with Us"
        description="Have questions or need personalized travel advice? Our friendly team is here to help! Reach out anytime for support, recommendations, or to share your own Lebanese travel stories. Let’s make your journey truly exceptional."
        img1="./images/contact.svg"
        message="We're here to help!"
        reference="#Contact Us"
        textcolor="text-sky-700"
        btnBg="bg-white"
        btnTxt="text-sky-800"
      />
      <AboutUs 
      content="Have questions, feedback, or looking for custom travel suggestions? We’re just a message away. Let us know how we can help make your Lebanese journey smoother, deeper, and more memorable — we love hearing from fellow travelers!"
      direction ="right"
      />
      <Contact />
      <Footer />
    </main>
  );
}