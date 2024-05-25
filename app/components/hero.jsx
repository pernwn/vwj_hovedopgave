"use client";
import React, { useState } from "react";

import styles from "../style";


import { Button } from "@material-tailwind/react";
import CyberPartners from "../ui/basicSlider";
import Header from "./header";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const hovering = () => setIsHovering(true);
  const notHovering = () => setIsHovering(false);

  return (
    <section
      className={`bg-no-repeat bg-center bg-heroimg h-full w-full bg-cover`}
    >
      <div className="bg-cmdark/60 bg-clip-padding backdrop-filter backdrop-blur-xl">
        <div className={`${styles.padding} h-full w-full `}>
          <Header />
          <div className={`w-3/4 space-y-4 xl:w-2/3 ${styles.padding} xl:px-64`}>
            <h1 className={`text-h1 text-cmwhite`}>
              Cybersikkerhed til <br/> <i>dine</i> behov
            </h1>
            <h4 className="text-cmwhite text-h4">
              CyberMinds er et IT-sikkerheds freelancehus, hvor vi stiller
              Danmarks bedste IT-sikkerhedseksperter til rådighed for dig.
            </h4>
            <Button
              onMouseEnter={hovering}
              onMouseLeave={notHovering}
              className={`flex items-center translate-y-4 hover:bg-cmprimary/20 hover:translate-y-3 rounded-full border-2 border-cmprimary hover:font-medium cursor-pointer py-4 px-8 bg-cmprimary active:translate-y-2 transition-all duration-300 ease-out transform`}
            >
              {isHovering ? (
                <p className="text-cmwhite text-p">Få uforpligtende tilbud</p>
              ) : (
                <p className="text-cmwhite text-p">Kontakt os</p>
              )}
            </Button>
          </div>
        </div>

        <CyberPartners />
      </div>
    </section>
  );
};

export default Hero;
