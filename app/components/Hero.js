'use client';

export default function Hero() {
  return (
    <>
      <section className="py-32 bg-white">
        <div className="container mx-auto lg:w-5xl md:w-3xl sm:w-sm xs:w-2xs">
          <div className="lg:bg-[url('/images/hero.svg')] md:bg-[url('/images/hero-md.svg')] bg-[url('/images/hero.svg')] bg-cover bg-center bg-no-repeat backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl px-10 py-16 text-center">
            <h1 className="md:text-5xl text-2xl text-sky-800 md:text-5xl max-w-xl mx-auto font-extrabold leading-tight mb-6">
              Discover the Beauty of Lebanon
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
              Your ultimate guide from the majestic mountains to the sparkling
              Mediterranean coast.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#destinations"
                className="bg-sky-800 text-white font-medium py-3 px-6 rounded-lg hover:bg-sky-600 hover:scale-105 transition duration-300 shadow"
              >
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <style jsx>{`


        @media (max-width: 600px) {
          .hero {
            padding: 4rem 1rem;
            border-radius: 8px;
          }
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style> */}
    </>
  );
}
