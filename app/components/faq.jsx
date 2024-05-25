"use client";

import React, { useState } from "react";
import styles from "../style";
import Accordion from "../ui/accordion"; //import af accordion ui komponent

/*
Render en FAQ-sektion med tekstintroduktion og en liste af akkordion-elementer, som kan foldes ud for at vise mere information
*/
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); //Definition af state variabel til at håndtere åbning af akkordion

  // Funktion der håndterer åben/luk ved brug af tenary operator (conditional statement)
  /*Hvis den klikkede akkordion allerede er åben (index === openIndex), luk den ved at sætte openIndex til null
  Ellers, åbn den klikkede akkordion ved at sætte openIndex til index*/
  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index); //Sikrer at kun én akkordion kan være åben af gangen
  };

  //Array af data til akkordion - header, subheader og body tekst
  const accordions = [
    {
      header: "Accordion 1",
      sub: "Subheader 1",
      body: "This is the body of accordion 1.",
    },
    {
      header: "Accordion 2",
      sub: "Subheader 2",
      body: "This is the body of accordion 2.",
    },
    {
      header: "Accordion 3",
      sub: "Subheader 3",
      body: "This is the body of accordion 3.",
    },
    {
      header: "Accordion 4",
      sub: "Subheader 4",
      body: "This is the body of accordion 4.",
    },
    {
      header: "Accordion 5",
      sub: "Subheader 5",
      body: "This is the body of accordion 5.",
    },
  ];
  return (
    <section
      className={`${styles.padding} flex flex-row items-start justify-center`}
    >
      <div className="space-y-2 w-1/3 xl:w-1/5">
        <h2 className="text-h2">Fortsat i tvivl?</h2>
        <h4 className="text-h4">Få svar i vores FAQ</h4>
        <p className="text-p">
          Find svar på oftede stillede spørgsmål for hjælp og klarhed.
        </p>
      </div>
      <div className="w-1/2 xl:w-1/4">
        {/* Går igennem accordions array og returnerer en Accordion komponent for hvert element */}
        {accordions.map((accordion, index) => (
          <Accordion
            key={index}
            header={accordion.header}
            sub={accordion.sub}
            body={accordion.body}
            isOpen={openIndex === index} //Bestemmer om akkordion er åben baseret på openIndex
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
