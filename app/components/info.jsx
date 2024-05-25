"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../style";

import {
  CardBody,
  Card,
} from "@material-tailwind/react";
import { ImgCard } from "../ui/cards";
import Image from "next/legacy/image";

const ExplainerCard = () => {
  return (
    <section className={`${styles.flexCenter} relative my-24`}>
      <BackgroundCircles />
      <Card
        className={`${styles.flexCenter} ${styles.paddingY} overflow-hidden w-3/5 xl:w-2/5 relative rounded-2xl shadow-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-75 border border-cmdark/5 bg-cmwhite`}
      >
        <CardBody className="flex flex-row items-center justify-center w-fit h-full">
          <div className="text-center w-full flex flex-col items-center justify-center px-12 xl:px-8">
            <h2 className="text-h2">Din sikkerhed, vores ansvar</h2>
            <p className="text-p mx-12 xl:mx-80">
              Få et indblik i, hvordan vi prioriterer <b>kvalitet</b>,{" "}
              <b>pålidelighed</b> og <b>effektivitet</b> i alle vores
              handlinger. Se her, hvordan vores dedikation til disse værdier
              former hver interaktion og beslutning, vi træffer.
            </p>
            <div className="flex flex-col w-full h-fit lg:flex-row justify-center">
              <ImgCard
                title="Beskyttelsestiltag"
                content="CyberMinds beskytter din virksomhed mod cybertrusler. Vores eksperter overvåger og reagerer på sikkerhedsrisici døgnet rundt for at sikre dine data og forretningskontinuitet. Se hvordan vi gør det i denne video."
                holderImg="/placeholder1.jpg"
              />
              <ImgCard
                title="Avanceret Cybersecurity"
                content="CyberMinds tilbyder skræddersyede løsninger til at beskytte dine digitale aktiver. Med avanceret teknologi og dybdegående analyser, sikrer vi, at din virksomhed er rustet til at modstå de mest sofistikerede cyberangreb."
                holderImg="/placeholder2.png"
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

const BackgroundCircles = () => {
  const circles = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 2, yoyo: Infinity } },
  };

  return (
    <div className="absolute inset-0">
      <motion.div
        className="w-[48em] h-[48em] border-[1.8rem] border-cmaccent rounded-full absolute bottom-[4%] left-[-18%] xl:left-[12%]"
        variants={circles}
        initial="initial"
        animate="animate"

      >
        <Image
          src="/developer.png"
          alt="Developer"
          className="rounded-full"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="w-[12em] h-[12em] bg-cmaccent rounded-full absolute top-[12%] right-[5%] xl:right-[20%]"
        variants={circles}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="w-[24em] h-[24em] bg-cmprimary rounded-full absolute flex items-center justify-center top-[14%] right-[8%] xl:right-[22%]"
        variants={circles}
        initial="initial"
        animate="animate"
      />
    </div>
  );
};

export default ExplainerCard;
