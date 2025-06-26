import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>

    <div className="max-w-5xl mx-auto">
      <Accordion open={open === 1}
        className="bg-gray-50 rounded-lg border border-sky-800 shadow-md mb-8"
      >
        <AccordionHeader onClick={() => handleOpen(1)}
          className="text-sky-800 font-semibold hover:bg-sky-200 rounded-md px-4 py-3"
            >What makes Lebanon a unique travel destination?</AccordionHeader>
        <AccordionBody className="text-gray-700 px-4 py-2">
        Lebanon is a country rich in history, culture, and natural beauty. From the ancient ruins of Baalbek to the breathtaking cedars of Bsharri and the vibrant souks of Tripoli, travelers can experience a diverse range of landscapes and heritage in a compact area.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className= " mb-8 bg-gray-50 rounded-lg border border-sky-800 shadow-md">
        <AccordionHeader onClick={() => handleOpen(2)}     className="text-sky-800 font-semibold hover:bg-sky-200 rounded-md px-4 py-3">
         When is the best time to visit Lebanon?
        </AccordionHeader>
        <AccordionBody className="text-gray-700 px-6 py-4 leading-relaxed">
          The best time to visit Lebanon depends on your interests. Spring and autumn offer mild weather perfect for sightseeing and hiking, while winter brings snowy mountain resorts like Faraya for skiing. Summers are ideal for beach lovers along the Mediterranean coast.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="bg-gray-50 rounded-lg border border-sky-800 shadow-md">
        <AccordionHeader onClick={() => handleOpen(3)} className="text-sky-800 font-semibold hover:bg-sky-200 rounded-md px-4 py-3">
           How can I make the most of my trip to Lebanon?
        </AccordionHeader>
        <AccordionBody>
          To get the most from your visit, plan to explore both the well-known landmarks and hidden gems. Use local guides for authentic experiences, try the diverse Lebanese cuisine, and engage with the warm and welcoming local communities to truly understand the culture.
        </AccordionBody>
      </Accordion>
      </div>
    </>
  );
}