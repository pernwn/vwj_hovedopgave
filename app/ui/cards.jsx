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

export const SimpleCard = ({ content, action }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Popover
      open={isHovered}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <PopoverHandler>
        <div
          className={`${styles.flexCenter} w-full hover:cursor-pointer hover:bg-cmprimary/15 hover:mix-blend-color-dodge hover:ring-2 hover:ring-cmprimary transition ease flex-col rounded-lg p-8 mb-4 shadow-xl bg-cmsecondary bg-blend-soft-light bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h5 className="text-[1.6rem] font-medium text-cmwhite">{action}</h5>
        </div>
      </PopoverHandler>
      <PopoverContent className="bg-clip-padding bg-cmwhite/75 w-1/3 p-4 rounded-xl backdrop-filter backdrop-blur-xl border border-cmdark/5">
        <p className="text-[1.1rem] leading-tight w-fit min-h-[8rem] text-cmdark/90">
          {content}
        </p>
      </PopoverContent>
    </Popover>
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
