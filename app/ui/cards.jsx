"use client";
import React, { useState, useEffect } from "react";

import { Divider } from "@mui/material";
import styles from "../style";
import { Rating } from "./reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";

import { CardHeader, CardBody, Card } from "@material-tailwind/react";
import Image from "next/legacy/image";
import {
  faCirclePause,
  faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";
import { Secondary } from "./buttons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from "../lib/observer";

//Anmeldelseskort opdelt i to: øverst - brugerinfo, nederst - anmeldelsetekst
export const ReviewCard = ({ name, occupation, review, stars, avatarImg }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.8 });
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -10,
        zIndex: 1,
        transition: {duration: 0.4 },
      }}
      className="px-1"

    >
      <Card ref={ref} className={`p-4 min-w-[14rem] max-w-[24rem] min-h-[26rem] transition ease-linear duration-300 ${!isIntersecting ? 'opacity-50 pointer-events-none scale-75' : 'scale-100'} rounded-lg shadow-xl bg-cmsecondary bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15 border-2 border-cmsecondary/75`}>

          <div className="flex flex-row items-center justify-center py-4">
            <div className="pr-6 rounded-full ">
              <Image
                src={avatarImg}
                alt="Customer Img"
                className="rounded-full"
                width={100}
                height={100}
              />
            </div>
            <div className="w-1/2 space-y-2">
              <h5 className="text-h5 mt-3 font-semibold text-cmwhite">
                {name}
              </h5>
              <h6 className="text-h6 font-light text-cmwhite">{occupation}</h6>
              <Rating rating={stars} />
            </div>
          </div>{" "}
          <Divider className="bg-cmsecondary/40" />

            <p className="text-p text-pretty text-cmwhite/75 font-300 p-4">
              {review}
            </p>


      </Card>
    </motion.div>
  );
};

//Simpelt kort med hover
export const SimpleCardTwo = ({ content, title, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.flexCenter} w-full min-h-[16rem] max-h-[18rem] overflow-hidden bg-cmsecondary/10 px-4 hover:bg-cmprimary/50 ring-2 ring-cmsecondary/10 hover:ring-cmprimary transition ease-linear rounded-lg shadow-lg `}
    >
      <CardBody className="relative group space-y-2">
        <h5
          className={`text-[1.7rem] font-medium text-cmsecondary mix-blend-screen group-hover:text-cmwhite flex flex-col gap-2 items-center justify-center ${
            isHovered ? "translate-y-0" : "translate-y-12 xl:translate-y-6 "
          } transition-all ease-linear duration-300 `}
        >
          {icon} {title}
        </h5>
        <div
          className={`w-fit h-fit rounded-xl transition-all ease-linear duration-400 ${
            isHovered ? "opacity-1 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <p className="text-[1.1rem] text-center font-normal leading-tight text-white/70">
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
    if (isPlay) {
    setShowPause(true)
    setIconOpacity(1)
    } 
  };

//Hvis play er true = Pause ikon forsinder efter 5s
  const handleMouseLeave = () => {
    if (isPlay) {
      const timer = setTimeout(() => setIconOpacity(0), 5000);
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
      className={`grid grid-row-2 rounded-xl w-full h-[28rem] mx-4 overflow-hidden`}
    >
      <CardHeader
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full h-full mx-0`}
      >
        <Image
          src={holderImg}
          layout="fill"
          objectFit="cover"
          alt="Placeholder image"
        />
        {/* 
        Ved hvert klik ændrer værdien af isPlay fra true til false og omvendt ved hjælp af setisPlay(!isPlay). 
        Når isPlay bliver true, starter en timeout, der sætter showPauseIcon til false efter 0,3 sekunder.
        */}
        <div
          onClick={handleClick}
          style={{
            //inline styling for at styre overgang af synlighed på ikon
            opacity: showPause ? iconOpacity : 1,
            transition: "0.3s ease-in-out",
          }}
          className={`absolute inset-0 text-cmaccent/70 hover:text-cmaccent flex items-center justify-center transition-opacity ease-linear duration-300 ${
            isPlay ? "bg-cmdark/50" : "bg-cmdark/60 backdrop-blur-sm"
          }`}
        >
          {showPause ? (
            isPlay ? (
              <div className="flex justify-center">
                <FontAwesomeIcon
                  icon={faCirclePause}
                  size="3x"
                  className="absolute top-28"
                />
                <FontAwesomeIcon
                  icon={faExpand}
                  className="absolute inset-6 text-h4 text-cmaccent/50 hover:text-cmaccent transition ease-in-out duration-300"
                />
              </div>
            ) : (
              <FontAwesomeIcon
                icon={faPlayCircle}
                size="3x"
                className="absolute top-28 "
              />
            )
          ) : null}
        </div>
      </CardHeader>

      <CardBody
        className={`${
          showPause ? (isPlay ? "opacity-0" : "opacity-1") : "opacity-1"
        } p-4 pt-16 space-y-8 bg-gradient-to-t from-cmdark via-cmdark/80 to-cmdark/0 transition ease-linear duration-300 flex flex-col justify-between place-self-end w-full h-ful absolute`}
      >
        <div className="space-y-2">
          <h3 className="text-h4 text-cmwhite/80 ">{title}</h3>
          <p className="text-p text-cmwhite/65 ">{content}</p>
        </div>

        <div className="w-full h-full">
          <Secondary title="Find ud af hvordan" url=":" />
        </div>
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
