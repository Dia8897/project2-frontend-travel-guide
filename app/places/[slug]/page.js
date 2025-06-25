import { places } from "../../placesData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default async function placeDetails({ params }) {
    const place = places.find(p => p.slug === params.slug);
    if (!place) {
        return <div>Place not found</div>;
    }
    return (
        <>
        <Header/>
        <main className="p-8 max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-sky-800 mb-4">
                {place.emoji} {place.name}
            </h1>
            <img src={place.image} alt={place.name} className="rounded-xl mb-4 w-full" />
            <p className="text-sky-700 text-3xl mb-4">
                {place.description}
            </p>
            <p className="text-gray-600 text-lg">
                {place.extraInfo}
            </p>
        </main>
        <Footer/>
        </>
    );
}
