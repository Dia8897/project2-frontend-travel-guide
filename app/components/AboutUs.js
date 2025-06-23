'use client';

export default function AboutUs() {
  return (
    <section id="About Us" className="bg-gray-50">
      <section className=" lg:w-5xl md:w-3xl sm:w-sm xs:w-2xs mx-auto rounded-3xl py-24 px-6 mb-25">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-xs max-h-xs mx-auto md:mx-0 group">
            <img
              src="/images/About.jpg"
              alt="Beautiful Lebanese forest"
              className="w-full h-[220px] md:h-[300px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl group-hover:opacity-75 transition-opacity duration-500" />
          </div>

          <div className="text-center md:text-left">
            <p className="text-sky-800 font-extrabold md:text-5xl text-2xl tracking-wide mb-3">
              Who We Are
            </p>
            <h2 className="text-xl mb-6 leading-tight text-sky-600">
              Sharing the Magic of Lebanon
            </h2>
            <p className="text-lg text-gray-600 mb-5 leading-relaxed">
              We’re passionate storytellers and travel enthusiasts dedicated to
              highlighting Lebanon’s rich culture, hidden gems, and breathtaking
              landscapes.
            </p>
            <ul className="space-y-3 text-left text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">✔</span>
                Authentic & curated travel insights
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">✔</span>
                Hidden spots, iconic places, and local tips
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">✔</span>
                Your trusted companion for unforgettable journeys
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
