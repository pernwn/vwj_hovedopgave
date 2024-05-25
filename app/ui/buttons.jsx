"use client";
import React from "react";

import { Button, IconButton } from "@material-tailwind/react";

// Genbrugelige button components med props - lærte at lave med destructuring under mit praktikforløb hos CyberMinds
 
export const FilledBtn = (props) => {
  const { title, url, icon } = props;
  return (
    <a href={url}>
      <Button
        className={`w-[16rem] flex items-center justify-center gap-2 translate-y-4  hover:shadow-lg hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-cmaccent hover:translate-y-3 rounded-full ring-2 ring-cmaccent/60 hover:ring-[#ffad99] hover:cursor-pointer py-4 px-8 bg-cmaccent/70 active:translate-y-2 duration-300 ease-linear transition  `}
      >
        {icon}
        <p className="text-cmwhite normal-case">{title}</p>
      </Button>
    </a>
  );
};

export const OutlinedBtn = (props) => {
  const { title, url, icon } = props;
  return (
    <a href={url}>
      <Button className="flex items-center text-base translate-y-0 hover:-translate-y-1 active:-translate-y-2 gap-4 hover:cursor-pointer m-4 font-normal tracking-normal hover:font-medium bg-cmaccent rounded-xl border-solid border-cmaccent border-2 bg-clip-padding backdrop-filter backdrop-blur-sm hover:bg-cmprimary hover:text-cmwhite transition ease-linear duration-100">
        <p className="text-p flex">{icon} {title}</p>

      </Button>
    </a>
  );
};

//IconBtn er ikke anvendt, men er lavet til eventuel fremtidig implementering
export const IconBtn = (props) => {
  const { icon, url } = props;
  return (
    <a href={url}>
      <IconButton className="w-fit flex font-bold items-center translate-y-0 hover:-translate-y-1 active:-translate-y-2gap-4 hover:cursor-pointer py-2 px-6 my-4 mx-0 rounded-xl border-solid border-cmprimary border-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 hover:bg-cmprimary hover:bg-opacity-40 transition-all ease-in-out duration-300">
        {icon}
      </IconButton>
    </a>
  );
};


