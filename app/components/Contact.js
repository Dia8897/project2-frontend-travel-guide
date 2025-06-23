'use client';
import { useState, useEffect } from 'react';



export default function Contact() {
  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [isFormValid, setIsFormValid] = useState(false);

useEffect(() => {
  setIsFormValid(name.trim() !== '' && email.trim() !== '' && message.trim() !== '');
}, [name, email, message]);
  return (
    <>
      <section id="Contact Us">
        <section className="lg:w-5xl md:w-3xl sm:w-sm xs:w-2xs
         bg-gray-50
        px-5 
      mx-auto
    py-12
    my-12
  
    rounded-xl
    shadow-[0_0_15px_rgba(0,51,102,0.1)]">




          <h2
            className="
          font-sans
          md:text-5xl text-2xl
          mb-6
          text-sky-800
          font-extrabold
          text-4xl
          text-center
          tracking-wide
        "
          >
            Contact Us
          </h2>

          <form className="flex flex-col gap-5 w-2/3 mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-3 text-black text-lg border-2 border-gray-300 rounded-lg transition duration-300 font-inherit focus:outline-none focus:border-[#003366] focus:shadow-[0_0_6px_rgba(0,85,170,0.53)] bg-white w-full"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 text-lg text-black border-2 border-gray-300 rounded-lg transition duration-300 font-inherit focus:outline-none focus:border-[#003366] focus:shadow-[0_0_6px_rgba(0,85,170,0.53)] bg-white w-full"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="p-3 text-black text-lg border-2 border-gray-300 rounded-lg transition duration-300 font-inherit resize-vertical focus:outline-none focus:border-[#003366] focus:shadow-[0_0_6px_rgba(0,85,170,0.53)] bg-white w-full"
            />

            <button
              type="submit"
              disabled={!isFormValid}
              className={`p-3 text-lg rounded-lg font-semibold w-full transition duration-300 focus:outline-none
      ${isFormValid
                  ? 'bg-sky-800 text-white cursor-pointer hover:bg-sky-600 hover:scale-105 hover:shadow-[0_6px_14px_rgba(0,85,170,0.6)] shadow-[0_4px_8px_rgba(0,51,102,0.3)]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
    `}
            >
              Send
            </button>
          </form>

        </section>
      </section>


    </>
  );
}
