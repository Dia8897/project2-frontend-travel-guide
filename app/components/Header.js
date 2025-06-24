'use client';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-sky-800 text-white sticky top-0 z-50 py-6 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center gap-4">
          <div className="text-3xl select-none">🌍</div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-shadow-sm flex-grow text-center sm:text-left">
            Lebanon Travel Guide
          </h1>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-3xl ml-auto text-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <nav
            className={`${menuOpen ? 'flex' : 'hidden'
              } sm:flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 bg-sky-800 sm:bg-transparent rounded-lg px-6 py-4 sm:p-0`}
          >
            {['About Us', 'Destinations', 'Contact Us','Home'].map((section) => {
              const links = {
                'About Us': '/about',
                'Destinations': '/destinations',
                'Contact Us': '/contact',
                'Home':'/'
              };
              return(
              <a
                key={section}
                href={links[section]}
                onClick={() => setMenuOpen(false)}
                className="text-gray-100 font-semibold text-base px-3 py-2 rounded-md hover:bg-sky-600 hover:scale-105 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
)})}
          </nav>
        </div>
      </header>

    </>
  );
}
