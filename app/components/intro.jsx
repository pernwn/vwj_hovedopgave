"use client";

import React, { useEffect } from "react";

import styles from "../style";
import { motion } from "framer-motion";

import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import USP from "../ui/usp";
import { Primary } from "../ui/buttons";
import Image from "next/legacy/image";
import { useInView } from "react-intersection-observer";
import {
  faBrain,
  faPeopleArrows,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const circles = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: 40, transition: { duration: 1 } },
};

//Samme cirkler/animation som i info.jsx, blot med andre størrelser - BackgroundCircles kan laves til sin egen komponent for at implementerer på tværs af hjemmesiden hvis CyberMinds ønsker flere undersider
const BackgroundCircles = () => {
  //Anvender useInView hook for at tjekke om elmentet er indenfor viewport
  const [ref, inView] = useInView({
    threshold: 0.4, // Procentdel af elementet, der skal være synligt før det betragtes som "inView"
  });

  return (
    //Cirkler i forskellige størrelser
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        ref={ref}
        className="w-[30em] h-[30em] xl:w-[36em] xl:h-[36em] border-[1.8rem] border-cmaccent rounded-full absolute top-[2%] left-[12%] xl:left-[20%] xl:top-0"
        variants={circles}
        initial="initial"
        animate={inView ? "animate" : "hidden"} //Aktiverer animationen hvis den er inview
      >
        <Image
          src="/roundbuilding.webp"
          alt="Decorative Circle 3"
          className="rounded-full"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        ref={ref}
        className="w-[18em] h-[18em] xl:w-[22em] xl:h-[22em] bg-cmaccent rounded-full absolute top-[40%] left-[22%] xl:left-[30%]"
        variants={circles}
        initial="initial"
        animate={inView ? "animate" : "hidden"}
      />
      <motion.div
        ref={ref}
        className="w-[24em] h-[24em] xl:w-[28em] xl:h-[28em] bg-cmprimary rounded-full absolute top-[38%] right-[16%] xl:right-[28%] "
        variants={circles}
        initial="initial"
        animate={inView ? "animate" : "hidden"}
      />
    </div>
  );
};

const CircleCard = () => {
  const [ref, inView] = useInView({
    threshold: 0.4, // Procentdel af elementet, der skal være synligt før det betragtes som "inView"
  });

  return (
    <section className="pb-28 xl:pb-16">
      <div
        className={`flex flex-row justify-around text-h4 py-12 text-cmaccent`}
      >
        <USP icon={faShieldHalved} text="Nichespecialister" />
        <USP icon={faBrain} text="Dybdeindsigt" />
        <USP icon={faPeopleArrows} text="Bedre match" />
      </div>
      <section
        className={`${styles.padding} relative flex items-center justify-center min-h-screen`}
      >
        <BackgroundCircles />
        <Card
          className={`${styles.padding} xl:bottom-16 relative z-90 flex flex-col items-center justify-center w-[38em] h-[38em] xl:w-[44em] xl:h-[44em] bg-cmwhite bg-opacity-75 shadow-lg rounded-full bg-clip-padding backdrop-filter backdrop-blur-xl border border-cmdark/5`}
        >
          <CardBody className="text-center">
            <h2 className="text-h2">Hvem er CyberMinds?</h2>
            <h4 className="text-h4">Beskyt din virksomhed mod cybertrusler</h4>
            <p className="text-p p-4">
              CyberMinds er din pålidelige partner i kampen mod digitale angreb.
              Vi tilbyder skræddersyede IT-sikkerhedstjenester, der beskytter
              din virksomhed mod cyberkriminalitet og datasikkerhedsbrud.
            </p>
          </CardBody>
          <Primary title="Øg din sikkerhed" url="#kontakt" />
        </Card>
      </section>
      <motion.div
        ref={ref}
        variants={circles}
        initial="initial"
        animate={inView ? "animate" : "hidden"}
        className="flex justify-center"
      >
        <Card
          className={`p-2 mb-4 relative shadow-lg w-[60%] h-full xl:h-[28em] xl:w-2/4 xl:p-8 xl:mb-8 grid grid-cols-2 bg-clip-padding backdrop-filter backdrop-blur-lg bg-cmwhite/75 bg-opacity-75 border border-cmdark/5`}
        >
          <CardHeader floated={false} className="inset-0 mb-4 rounded-md">
            <Image
              objectPosition="top"
              objectFit="cover"
              src="/bjarke-profil.webp"
              alt="Bjarke Petersen"
              className=" shadow-md flex"
              layout="fill"
            />
          </CardHeader>
          <CardBody className="flex flex-col gap-2 inset-0 mb-4">
            <div>
              <h3 className="text-h3">Bjarke Petersen</h3>
              <h6 className="text-h6">IT Security Entrepreneur</h6>
            </div>

            <p className="text-p ">
              CyberMinds er hjemstedet for Danmarks bedste cybersec freelancere,
              samt industriens go-to for cybersec ydelser.
            </p>
            <p className="text-p">
              Vi taler cybersec&apos;sk, vi tager branchens laveste cut og vi
              kan bedre end de fleste, hjælpe med at italesætte
              forretningsbehovet og omsætte det til løsninger.
            </p>
            <Primary
              url="https://www.linkedin.com/in/bjarke-n-petersen/"
              icon={<FontAwesomeIcon icon={faLinkedin} size="xl" />}
              title="Skab forbindelse"
            />
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
};

export default CircleCard;
