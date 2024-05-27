"use client";


import React, { useState } from "react";
import CyberMindsWhiteLogo from "@/app/assets/icons/logo-white.svg";

import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import styles from "../style";

const Header = () => {

  const [isHovering, setIsHovering] = useState(false); //state variabel til at håndtere hover
  const handleHover = () => setIsHovering(true);
  const handleNotHover = () => setIsHovering(false);

  return (
    <div
      className={`flex flex-row justify-between ${styles.paddingX} xl:px-64`}
    >
      <CyberMindsWhiteLogo
        className="w-75 h-75"
        alt="CyberMinds Logo Color White"
      />


      <Button
        onMouseEnter={handleHover}
        onMouseLeave={handleNotHover}
        className="translate-y-0 hover:-translate-y-1 active:-translate-y-2 hover:cursor-pointer h-fit w-[16rem] shadow-md  bg-cmaccent rounded-full border-solid border-cmaccent border-2 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-cmprimary hover:bg-opacity-40 hover:border-cmprimary transition ease-linear duration-300"
      >
        {/* Ternary operator (conditional) der tjekker om musen er over knappen eller ej. Hvis den ikke er viser knappen default, hvis den er viser knappen hover-state */}
        {isHovering ? (
          //Hvis hover vis denne tekst
          <p className="font-semibold text-lg text-cmwhite">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              size="2xl"
              className="pr-2"
            />
            {"+45 1234 5678"}
          </p>
        ) : (
            //Ellers hvis ikke hover så vis denne tekst
          <p className="font-medium text-lg text-cmwhite">
            <FontAwesomeIcon
              icon={faPhone}
              size="2xl"
              className="pr-2"
            />
            {"+45 1234 5678"}
          </p>
        )}
      </Button>
    </div>
  );
};

export default Header;
