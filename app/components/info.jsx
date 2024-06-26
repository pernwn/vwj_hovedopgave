"use client";
import React from "react";
import { motion } from "framer-motion"; //import af motion fra framer-motion animation library
import styles from "../style";
import { useInView } from "react-intersection-observer";

import { CardBody, Card } from "@material-tailwind/react";

import { VidCard } from "../ui/cards"; // Import af ui billedekort komponent
import Image from "next/legacy/image";

//Komponent for dekorative animerede baggrundscirkler
const BackgroundCircles = () => {
  //Anvender useInView hook for at tjekke om elmentet er indenfor viewport
  const [ref, inView] = useInView({
    threshold: 0.4, // Procentdel af elementet, der skal være synligt før det betragtes som "inView"
  });

  //Variabel til at definere animation
  const circles = {
    initial: { opacity: 0, y: 50 }, // Cirkel synlighed og startposition
    animate: { opacity: 1, y: 0, transition: { duration: 2 } }, //Animations egenskaber
    hidden: {opacity:0, y:40, transition:{duration: 1} }, // Når cirkelerne er ude af syne
  };

  return (
    //Cirkler i forskellige størrelser
    <div className="absolute inset-0">
      {/* Cirkel med tyk kant og billede */}
      <motion.div
        ref={ref}
        className="w-[48em] h-[48em] border-[1.8rem] border-cmaccent rounded-full absolute bottom-[10%] left-[-18%] xl:left-[12%]"
        variants={circles} //Kalder variabel hvor animation er defineret
        initial="initial" //Starten på animation
        animate={inView ? "animate" : "hidden"} //Aktiverer animationen når elementet er synligt ellers er den hidden
      >
        <Image
          src="/developer.webp"
          alt="Developer"
          className="rounded-full"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        ref={ref}
        className="w-[12em] h-[12em] bg-cmaccent rounded-full absolute bottom-[4%] right-[12%] xl:right-[24%] xl:bottom-[12%]"
        variants={circles}
        initial="initial"
        animate={inView ? "animate" : "hidden"}
      />
      <motion.div
        ref={ref}
        className="w-[24em] h-[24em] bg-cmprimary rounded-full absolute flex items-center justify-center top-[28%] right-[2%] xl:right-[16%]"
        variants={circles}
        initial="initial"
        animate={inView ? "animate" : "hidden"}
      />
    </div>
  );
};

const ExplainerCard = () => {
  return (
    //Sektion til kort med dekorative animerede cirkler i baggrunden
    <section className={`${styles.flexCenter} relative my-24`}>
      <BackgroundCircles />
      <Card
        className={`${styles.flexCenter} py-8 overflow-hidden w-2/3 xl:w-2/5 relative rounded-2xl shadow-sm bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-65 border border-cmdark/5 bg-cmwhite`}
      >
        {/* Tekstcontainer */}
        <CardBody className="flex flex-row items-center justify-center w-fit h-full">
          <div className=" w-full flex flex-col items-center justify-center space-y-8 px-16 xl:px-12">
            <div className="text-center">
              <h2 className="text-h2">Din sikkerhed, vores ansvar</h2>
              <p className="text-p mx-12 xl:mx-24">
                Vi specialiserer os i at forbinde virksomheder med de bedste
                IT-sikkerhedsfreelancere, der imødekommer dine behov. Med vores
                omfattende netværk sikrer vi adgang til de mest kompetente
                eksperter. 
              </p>
            </div>
            {/* Container til 2 billedkort som originalt var tænkt til videoer* (Note i cards.jsx) */}
            <div className="flex flex-col w-full h-full lg:flex-row justify-center">
              <VidCard
                title="Beskyttelsestiltag"
                content="Vores eksperter overvåger og reagerer på sikkerhedsrisici døgnet rundt for at sikre dine data og forretningskontinuitet."
                holderImg="/placeholder1.webp"
              />
              <VidCard
                title="Avanceret Cybersecurity"
                content="Vi anvender en række avancerede teknologier og metoder for at sikre, at din virksomhed er rustet til at modstå cyberangreb."
                holderImg="/placeholder2.webp"
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default ExplainerCard;
