import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180 text-sky-500" : "text-sky-800"} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
     {[{
                id: 1,
                title: "What makes Lebanon a unique travel destination?",
                content: "Lebanon is a country rich in history, culture, and natural beauty. From the ancient ruins of Baalbek to the breathtaking cedars of Bsharri and the vibrant souks of Tripoli, travelers can experience a diverse range of landscapes and heritage in a compact area."
            }, {
                id: 2,
                title: "When is the best time to visit Lebanon?",
                content: "The best time to visit Lebanon depends on your interests. Spring and autumn offer mild weather perfect for sightseeing and hiking, while winter brings snowy mountain resorts like Faraya for skiing. Summers are ideal for beach lovers along the Mediterranean coast."
            }, {
                id: 3,
                title: "How can I make the most of my trip to Lebanon?",
                content: "To get the most from your visit, plan to explore both the well-known landmarks and hidden gems. Use local guides for authentic experiences, try the diverse Lebanese cuisine, and engage with the warm and welcoming local communities to truly understand the culture."
            }].map(({ id, title, content }) => (
        <Accordion
          key={id}
          open={open === id}
          icon={<Icon id={id} open={open} />}
          className="bg-gray-50 rounded-lg border border-sky-800 shadow-md mb-8"
        >
          <AccordionHeader
            onClick={() => handleOpen(id)}
            className={`text-sky-800 font-semibold rounded-md px-6 py-3 flex items-center cursor-pointer
              ${open === id ? "bg-sky-200 text-sky-900" : "hover:bg-sky-100"}`}
            style={{ gap: "12px" }}
          >
            <span className="flex-1">{title}</span>
          </AccordionHeader>
          <AccordionBody className="text-gray-700 px-6 py-4 leading-relaxed">
            {content}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
