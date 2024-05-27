"use client";
import React, { useState, useEffect } from "react";

import { Divider } from "@mui/material";
import styles from "../style";
import { Rating } from "./reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";

import { CardHeader, CardBody, Card, Button } from "@material-tailwind/react";
import Image from "next/legacy/image";
import {
  faCirclePause,
  faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";

//Anmeldelseskort opdelt i to: øverst - brugerinfo, nederst - anmeldelsetekst
export const ReviewCard = ({ name, occupation, review, stars, avatarImg }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -10,
        zIndex: 1,
        transition: { duration: 0.4 },
      }}
      className="p-2 space-x-8 max-w-[22rem] min-h-[28rem] rounded-lg shadow-xl bg-cmsecondary bg-blend-soft-light bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15 border-4 border-cmsecondary"
    >
      <CardBody>
        <div className="flex flex-row pb-8 w-full h-full space-x-4">
          <div className="px-2 rounded-full">
            <Image
              src={avatarImg}
              alt="Customer Img"
              className="rounded-full"
              width={175}
              height={175}
            />
          </div>
          <div className="w-full space-y-2">
            <h5 className="text-h5 mt-3 font-semibold text-cmwhite">{name}</h5>
            <h6 className="text-h6 font-light text-cmwhite">{occupation}</h6>
            <Rating rating={stars} />
          </div>
        </div>
        <Divider className="bg-cmsecondary" />
        <div className="p-2 overflow-y-auto">
          <p className="text-p text-pretty text-cmwhite font-300">{review}</p>
        </div>
      </CardBody>
    </motion.div>
  );
};

//Simpelt kort med hover
export const SimpleCardTwo = ({ content, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.flexCenter} w-full h-fit overflow-hidden hover:cursor-pointer hover:bg-cmprimary/15 hover:ring-2 hover:ring-cmprimary transition ease-linear flex-col flex-end rounded-lg py-2 shadow-xl bg-cmsecondary bg-blend-soft-light bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25`}
    >
      <CardBody className="relative w-full h-2/3">
        <h5
          className={`text-[1.7rem] font-medium text-cmwhite flex justify-center ${
            isHovered ? "translate-y-0" : "translate-y-8 xl:translate-y-6 "
          } transition-all ease-linear duration-300 `}
        >
          {title}
        </h5>
        <div
          className={`w-fit h-fit rounded-xl transition-all ease-linear duration-400 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[1.1rem] leading-tight w-fit text-white/75">
            {content}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export const VidCard = ({ title, content, holderImg }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [showPause, setShowPause] = useState(true);
  const [iconOpacity, setIconOpacity] = useState(1); //synligheden af ikon

//Pause ikon synligt ved hover
  const handleMouseEnter = () => {
    setShowPause(true)
    setIconOpacity(1)
  };

//Hvis play er true = Pause ikon forsinder efter 2s når musen er væk
  const handleMouseLeave = () => {
    if (isPlay) {
      const timer = setTimeout(() => setIconOpacity(0), 2000);
      return () => clearTimeout(timer)
    }
  };

  const handleClick = () => {
    setIsPlay(!isPlay);
    setIconOpacity(1);
  }

  useEffect(() => {
    let timer;
    if(isPlay){
      setShowPause(true);
      setIconOpacity(1);
      timer = setTimeout (() => setIconOpacity(0), 2000)
    }
    return () => clearTimeout(timer)
  }, [isPlay])

  return (
    <Card
      className={`${styles.flexCenter} flex-col rounded-xl w-full p-2 xl:p-4 m-4 xl:mx-8 bg-cmwhite/50`}
    >
      <CardHeader onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} className="w-full relative h-[14rem] shadow-sm">
        <Image
          src={holderImg}
          layout="fill"
          objectFit="cover"
          alt="Placeholder image"
          className=""
        />
        {/* 
        Ved hvert klik ændrer værdien af isPlay fra true til false og omvendt ved hjælp af setisPlay(!isPlay). 
        Når isPlay bliver true, starter en timeout, der sætter showPauseIcon til false efter 2 sekunder.
        */}
        <div
          onClick={handleClick}
          style={{ //inline styling for at styre overgang af synlighed på ikon
            opacity: showPause ? iconOpacity : 1,
            transition: ' 0.5s ease-in-out',
          }}
          className={`${isPlay ? 'bg-cmdark/50' : 'bg-cmdark/50 backdrop-blur-sm'} absolute inset-0 text-cmaccent/50 hover:text-cmaccent flex items-center justify-center rounded transition-all ease-linear duration-300 cursor-pointer`}
        >
          {showPause ? (
            isPlay ? (
              <FontAwesomeIcon icon={faCirclePause} size="3x" />
            ) : (
              <FontAwesomeIcon icon={faPlayCircle} size="3x" />
          )
          ) : null}
        </div>
      </CardHeader>

      <CardBody className="flex flex-col justify-center items-center w-full h-1/2 p-2 py-4">
        <h3 className="text-h5">{title}</h3>
        <p className="text-p">{content}</p>
      </CardBody>
    </Card>
  );
};

//NOTE - // Bemærkning - Denne komponent var tiltænkt at have en video som placeholder, men på grund af indlæsningstiden besluttede jeg at bruge et billedplaceholder i stedet (kode lige ovenfor)
// export const VidCard = ({ title, content, vid }) => {
//   return (
//     <Card
//       className={`${styles.flexStart} m-2 flex-col rounded-lg w-full h-full `}
//     >
//       <CardMedia
//         component="video"
//         className="h-1/2 w-fit rounded-lg shadow-sm"
//         controls
//       >
//         <source src={vid} type="video/mp4" />
//         Your browser does not support the video tag.
//       </CardMedia>
//       <CardBody className="flex flex-col justify-center items-center w-full h-1/2 space-y-2 py-8 bg-cmwhite/0">
//         <h3 className="text-h5">{title}</h3>
//         <p className="text-p">{content}</p>
//       </CardBody>
//     </Card>
//   );
// };
