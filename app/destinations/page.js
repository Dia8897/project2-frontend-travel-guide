import Header from "../components/Header";
import Hero from "../components/Hero";
import Places from "../components/Places";
import Footer from "../components/Footer";
import {places} from "../placesData"

export default function DestinationsPage() {
    return (
        <main>
            <Header />
            <Hero
                title="Explore Lebanon’s Must-See Destinations"
                description="From the majestic mountains of the Cedars to the vibrant souks of Beirut, discover Lebanon’s top travel spots. Explore historic landmarks, pristine beaches, charming villages, and cultural gems that promise to inspire and captivate every traveler."
                img1="./images/destinations.svg"
                message="Explore Destinations"
                reference="#Destinations"
                textcolor="text-gray-700"
                btnBg="bg-sky-700"
                btnHover="hover:bg-sky-600"
                btnTxt="text-white"
            />
            <Places 
            title="Destinations"
            places={places} />
            <Footer />
        </main>
    );
}
