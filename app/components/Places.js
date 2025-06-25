'use client';

export default function Places({title,places = []}) {


  return (
    <section id="Destinations" className="bg-white">
      <section className="px-4 py-8 md:max-w-5xl max-w-sm  mx-auto">
        <h2 className="text-center text-sky-800 font-sans md:text-5xl text-2xl mb-8 font-extrabold">
          {title}
        </h2>

        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {places.map(({ name, emoji, description, image }) => (
            <div
              key={name}
              className="group md:h-[350px] bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col cursor-pointer
                       transition-transform duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full md:h-35 h-25 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col justify-center flex-grow">
                <h3 className="mb-2 text-sky-700 font-bold font-sans text-lg">
                  {emoji} {name}
                </h3>
                <p className="text-gray-600 text-base leading-snug">
                  {description}
                </p>

                <div className=" flex gap-3 mt-5">
                  <button className="bg-sky-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-600 transition hover:scale-105 cursor-pointer">
                    Read More
                  </button>
                  <button className="border border-sky-600 text-sky-600 hover:scale-105 transition cursor-pointer px-4 py-2 rounded-lg text-sm ">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
