'use client';

export default function Hero({ title, description, img1, message,reference,textcolor,btnBg, btnTxt, btnHover}) {
  // console.log({ title, description, img1 });
  return (
    <>
      <section className="py-32 bg-white">
        <div className="container mx-auto lg:w-5xl md:w-3xl sm:w-sm xs:w-2xs">
          <div
            className=" bg-cover bg-center bg-no-repeat backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl px-10 py-16 text-center"
            style=
            {{
              backgroundImage: `url('${img1}')`,
            }}
          >

            <h1 className="md:text-5xl text-2xl text-sky-800 md:text-5xl max-w-xl mx-auto font-extrabold leading-tight mb-6">
              {title}
            </h1>
            <p className={"text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-md mx-auto "+textcolor}>
              {description}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href={reference}
                className={` ${btnBg} ${btnTxt} ${btnHover} font-medium font-semibold py-3 px-6 rounded-lg hover:scale-105 transition duration-300 shadow`}
              >
                {message}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
