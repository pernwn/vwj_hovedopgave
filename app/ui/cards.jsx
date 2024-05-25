"use client";
import React, { useState } from "react";

import { Divider } from "@mui/material";
import styles from "../style";
import { Rating } from "./reviews";

import { motion } from "framer-motion";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  CardHeader,
  CardBody,
  Card,
} from "@material-tailwind/react";
import Image from "next/legacy/image";

export const ReviewCard = ({ name, occupation, review, stars, avatarImg }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -10,
        zIndex: 1,
        transition: { duration: 0.4 },
      }}
      className="p-8 space-x-8 max-w-[22rem] min-h-[28rem] rounded-lg shadow-xl bg-cmsecondary bg-blend-soft-light bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15 border-4 border-cmsecondary"
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

export const SimpleCardTwo = ({ content, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.flexCenter} w-full h-fit overflow-hidden hover:cursor-pointer hover:bg-cmprimary/15 hover:ring-2 hover:ring-cmprimary transition ease flex-col flex-end rounded-lg pt-8 pb-4 px-8  shadow-xl bg-cmsecondary bg-blend-soft-light bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25`}>
      <CardBody className="relative w-full h-2/3">
        <h5 className={`text-[1.6rem] font-medium text-cmwhite flex justify-center ${isHovered ? "translate-y-0" : "translate-y-16 xl:translate-y-12"} transition-all ease-linear duration-300 `}>{ title }</h5>
        <div
          className={`w-fit h-fit py-2 rounded-xl transition-all ease-linear duration-400 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[1.1rem] leading-tight w-fit text-white/70">
            {content}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};


export const ImgCard = ({ title, content, holderImg }) => {
  return (
    <Card
      className={`${styles.flexCenter} m-2 flex-col rounded-xl xl:w-1/3 w-full h-fit p-2 space-y-4 bg-cmwhite/80`}
    >
      <CardHeader className="w-full relative h-[12rem]">
        <Image
          src={holderImg}
          layout="fill"
          objectFit="cover"
          alt="Placeholder image"
        />
      </CardHeader>

      <CardBody className="flex flex-col justify-center items-center w-full h-full space-y-2 py-2">
        <h3 className="text-h5">{title}</h3>
        <p className="text-p">{content}</p>
      </CardBody>
    </Card>
  );
};

//NOTE - This component was intended to have a video as placeholder, but due to load time I decided to put a placerholder img instead (code right above)
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
