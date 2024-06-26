"use client";
import React, { useState } from "react";

import styles from "../style";


import { Button } from "@material-tailwind/react";
import CyberPartners from "../ui/basicSlider";
import Header from "./header";
import Link from "next/link";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const hovering = () => setIsHovering(true);
  const notHovering = () => setIsHovering(false);

  return (
    // Baggrundsbillede der dækker hele sektionen
    <section
      className={`bg-no-repeat bg-center bg-heroimg h-full w-full bg-cover bg-fixed`}
    >
      {/* Container til at dække billedet med mørk overlay og blur-effekt */}
      <div className="bg-cmdark/60 bg-clip-padding backdrop-filter backdrop-blur-xl h-fit">
        <div className={`${styles.padding} h-full w-full `}>
          <Header />
          {/* Hero sektionens tekst */}
          <div className={`w-full text-center flex flex-col items-center justify-center space-y-4 py-24 px-8`}>
            <h1 className={`text-2xl text-cmwhite`}>
              Cybersikkerhed til <i>dine</i> behov
            </h1>
            <h4 className="text-cmwhite text-h3 w-3/4 xl:w-1/2">
              CyberMinds er et IT-sikkerheds freelancehus, hvor vi stiller
              Danmarks bedste IT-sikkerhedseksperter til rådighed for dig.
            </h4>
    
            {/* CTA */}
            <Link href="#kontakt">
            <Button
              onMouseEnter={hovering}
              onMouseLeave={notHovering}
              className={`w-[20rem] flex items-center justify-center translate-y-4 hover:translate-y-3 rounded-full border-2 border-cmaccent hover:font-medium cursor-pointer py-4 px-8 bg-cmaccent/40 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-cmprimary hover:bg-opacity-40 hover:border-cmprimary transition ease-linear duration-300`}
            >
              {/* Ternary operator (conditional) */}
              {isHovering ? (
                //Hvis hover vis dette
                <p className="text-cmwhite normal-case">Få et uforpligtende tilbud</p>
              ) : (
                  //Hvis ikke hover vis dette
                <p className="text-cmwhite normal-case">Tag det første skridt</p>
              )}
              </Button>
            </Link>
          </div>
        </div>
        {/* Dekorativ slider over samarbejdspartnere */}
        <CyberPartners />
      </div>
    </section>
  );
};

export default Hero;
