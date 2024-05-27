"use client";

import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar1 from "../assets/backgrounds/avatar1.png";
import avatar2 from "../assets/backgrounds/avatar2.png";
import avatar3 from "../assets/backgrounds/avatar3.png";
import avatar4 from "../assets/backgrounds/avatar4.png";
import avatar5 from "../assets/backgrounds/avatar5.png";
import avatar6 from "../assets/backgrounds/avatar6.png";
import avatar7 from "../assets/backgrounds/avatar7.png";
import avatar8 from "../assets/backgrounds/avatar8.png";
import avatar9 from "../assets/backgrounds/avatar9.png";
import avatar10 from "../assets/backgrounds/avatar10.png";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReviewCard } from "./cards";

//Array af anmeldelser
const reviews = [
  {
    id: 1,
    text: "CyberMinds har leveret en fremragende service! Deres professionelle team var hurtige til at løse mine tekniske problemer, og de gav mig også værdifulde råd om, hvordan jeg kan forbedre min online sikkerhed.",
    name: "Anna Jensen",
    occupation: "IT Specialist",
    avatar: avatar1,
    rating: 5,
  },
  {
    id: 2,
    text: "Jeg er virkelig imponeret over den ekspertise, som CyberMinds-teamet har. De var i stand til at optimere min virksomheds hjemmeside, hvilket resulterede i en markant stigning i trafik og konverteringer. Tak CyberMinds!",
    name: "Lars Petersen",
    occupation: "Marketing Manager",
    avatar: avatar2,
    rating: 4,
  },
  {
    id: 3,
    text: "Fantastisk kundeservice fra CyberMinds! Deres supportteam var meget hjælpsomme og tålmodige, da de guidede mig gennem opsætningen af ​​mit nye IT-system. Jeg kan varmt anbefale dem til alle mine kolleger.",
    name: "Sofie Andersen",
    occupation: "Project Coordinator",
    avatar: avatar3,
    rating: 5,
  },
  {
    id: 4,
    text: "Jeg er utrolig tilfreds med CyberMinds' arbejde. De udviklede en brugerdefineret softwareløsning til min virksomhed, der overgik mine forventninger. Deres professionalisme og opmærksomhed på detaljer gjorde hele forskellen.",
    name: "Thomas Nielsen",
    occupation: "Software Developer",
    avatar: avatar4,
    rating: 4,
  },
  {
    id: 5,
    text: "CyberMinds har virkelig hjulpet mig med at beskytte min virksomhed mod cybertrusler. Deres omfattende sikkerhedsløsninger har gjort mig mere tryg ved min online tilstedeværelse. Tak for jeres fantastiske arbejde!",
    name: "Maria Kristensen",
    occupation: "Security Analyst",
    avatar: avatar5,
    rating: 4,
  },
  {
    id: 6,
    text: "Jeg er imponeret over CyberMinds' evne til at forstå mine forretningsbehov og levere skræddersyede løsninger, der passer perfekt til min virksomhed. Deres ekspertise inden for IT-konsultation er uvurderlig.",
    name: "Peter Sørensen",
    occupation: "Business Consultant",
    avatar: avatar6,
    rating: 3,
  },
  {
    id: 7,
    text: "CyberMinds er et fantastisk firma at arbejde sammen med. Deres dedikation til kundetilfredshed er tydelig i alt, hvad de gør. Jeg er meget tilfreds med resultaterne af vores samarbejde.",
    name: "Katrine Hansen",
    occupation: "Account Manager",
    avatar: avatar7,
    rating: 5,
  },
  {
    id: 8,
    text: "Jeg har haft en fantastisk oplevelse med CyberMinds. Deres hold er yderst professionelt og kyndigt. De var i stand til at løse mine tekniske problemer på kort tid og holde mig opdateret under hele processen.",
    name: "Jens Madsen",
    occupation: "Technical Support",
    avatar: avatar8,
    rating: 4,
  },
  {
    id: 9,
    text: "Jeg kan ikke takke CyberMinds nok for deres enestående service. De var hurtige til at reagere på mine henvendelser og løse mine problemer effektivt. Jeg vil helt sikkert bruge dem igen i fremtiden.",
    name: "Emma Larsen",
    occupation: "Operations Manager",
    avatar: avatar9,
    rating: 5,
  },
  {
    id: 10,
    text: "CyberMinds har virkelig været en uvurderlig ressource for min virksomhed. Deres ekspertise inden for IT-sikkerhed og teknologi har hjulpet mig med at beskytte min virksomhed mod cybertrusler og holde mine data sikre.",
    name: "Mikkel Thomsen",
    occupation: "Data Analyst",
    avatar: avatar10,
    rating: 3,
  },
];

//Funktion til at vise stjerner baseret på bedømmelse
export const Rating = ({ rating }) => {
  return (
    <div className="flex justify-between w-1/2">
      {/* 
    Opretter array med 5 elementer (standard for bedømmelse). 
    Mapper gennem arrayet af 5 eleementer; første felt (_) ignoreres, andet felt (i) er indeks
    */}
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon
          icon={faStar}
          key={i}
          className={i < rating ? "text-cmaccent" : "text-cmwhite/30"}
          /*
          Ternary operator: bestemmer klassen for ikonet baseret på indekset sammenlignet med 'rating' i reviews arrayet
          Hvis indeks er mindre end rating er stjernen udfyldt med accentfarven, ellers er den hvid med 30% gennemsigtighed
          Den let gennemsigtige stjerne indikerer at den er 'inaktiv', altså der er maksimum af 5 stjerner og baseret på rating i reviews array er de oranger stjerne en visuel repræsentation for 
            antallet af stjerner givet
          */
        />
      ))}
    </div>
  );
};

//Komponenten til at vise anmeldelserne i en karusel
export const ReviewComp = () => {
  const duplicateSlides = [...reviews, ...reviews]; // Duplikerer anmeldelserne for at simulere en uendelig karusel
  const [currentSlide, setCurrentSlide] = useState(0); // Holder styr på det aktuelle slide

  // Funktion der håndterer navigering af karusellen
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length); //Øger 'currentslide' med 1, og hvis den når enden af starten. Modulo operator (%) dividerer prevSlide + 1 med længden af arrayet for at fastlægge den aktuelle placering og går tilbage til start hvis man når enden
  };

  // Mindsker 'currentslide' med 1
  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className={`max-w-full h-auto flex flex-row pb-28 pt-4`}>
        <motion.div
          className="flex"
          animate={{
            x: `-${currentSlide * 10}%`, // Animerer karusellen til det aktuelle slide
          }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}
          style={{ width: `${reviews.length * 100}%` }}
        >
          {/* Mapper gennem anmeldelser og opretter et slide for hver */}
          {duplicateSlides.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / reviews.length}%` }}
            >
              {/* Viser en enkelt anmeldelse på et anmeldelses kort lavet i cards.jsx med props */}
              <ReviewCard
                key={review.id}
                name={review.name}
                occupation={review.occupation}
                review={review.text}
                stars={review.rating}
                avatarImg={review.avatar}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigationsknapper til skift af slides */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-2">
        <motion.button whileTap={{ scale: 0.9 }}>
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="w-[35pt] h-[35pt] text-cmaccent/75 px-4 hover:text-cmaccent hover:cursor-pointer hover:-translate-x-1 transition ease"
            onClick={handlePrevSlide} // Klik forrige slide
          />
        </motion.button>

        {/* Mapper igennem reviews arrayet (en slags breadcrumb eller pagination så man kan se ens placering i slidet) */}
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-cmaccent" : "bg-cmsecondary/40"
            }`}
            onClick={() => setCurrentSlide(index)} // Ved klik på en af dutterne går den til det bestemte slide
          />
        ))}
        <motion.button whileTap={{ scale: 0.9 }}>
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="w-[35pt] h-[35pt] text-cmaccent/75 px-4 hover:text-cmaccent hover:cursor-pointer hover:translate-x-1 transition ease"
            onClick={handleNextSlide} //Klik for næste slide
          />
        </motion.button>
      </div>
    </div>
  );
};
