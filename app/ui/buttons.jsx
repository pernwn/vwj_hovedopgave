"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button, IconButton } from "@material-tailwind/react";

// Genbrugelige button components med props - lærte at lave med destructuring under mit praktikforløb hos CyberMinds

export const Primary = (props) => {
  const { title, url, icon } = props;

  // Tjekker om URL'en er ekstern
  const isExternal =
    url && (url.startsWith("http://") || url.startsWith("https://"));

  if (!url) {
    return <Button className="disabled">Missing URL</Button>; // Håndtering af manglende URL
  }

  if (isExternal) {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Button
          className={`group w-fit flex items-center justify-center translate-y-4 hover:shadow-lg hover:bg-cmdark/5 hover:ring-2 hover:ring-cmaccent hover:translate-y-3 rounded-full py-2 px-8 bg-cmaccent active:translate-y-2 duration-300 ease-linear transition`}
        >
          <p className="normal-case text-cmwhite group-hover:text-cmaccent flex items-center gap-4">
            {icon} {title}
          </p>
        </Button>
      </Link>
    );
  }

  return (
    <Link href={url}>
      <Button
        className={`group w-[16rem] flex items-center justify-center gap-2 translate-y-4 hover:drop-shadow-lg hover:bg-cmwhite/5 hover:ring-2 hover:ring-cmaccent hover:translate-y-3 rounded-full py-4 px-8 bg-cmaccent/80 active:translate-y-2 duration-300 ease-linear transition`}
      >
        
        <p className="normal-case text-cmwhite group-hover:text-cmaccent">
          {icon} {title}
        </p>
      </Button>
    </Link>
  );
};


export const Secondary = (props) => {
  const { title, url } = props;
  return (
    <Link href={url} className="w-full">
      <Button className="flex p-4 group cursor-pointer items-center justify-center w-full bg-cmprimary/30 shadow-sm hover:bg-cmprimary rounded-lg transition ease-linear duration-200">
        <p className="text-p normal-case flex text-cmprimary group-hover:text-cmwhite">
        {title}
        </p>
      </Button>
    </Link>
  );
};

//IconBtn er ikke anvendt, men er lavet til eventuel fremtidig implementering
export const IconBtn = (props) => {
  const { icon, url } = props;
  return (
    <Link href={url}>
      <IconButton className="w-fit flex font-bold items-center translate-y-0 hover:-translate-y-1 active:-translate-y-2 gap-4 py-2 px-6 my-4 mx-0 rounded-xl border-solid border-cmprimary border-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 hover:bg-cmprimary hover:bg-opacity-40 transition-all ease-in-out duration-300">
        {icon}
      </IconButton>
    </Link>
  );
};
