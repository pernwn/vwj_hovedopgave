"use client";

import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ReviewCard } from "./cards";
import { reviews } from "../lib/reviewData";

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


// Funktion der håndterer navigation til næste slide
const handleNextSlide = () => {
    if (currentSlide < reviews.length - 1) {
      // Hvis 'currentSlide' ikke er ved slutningen af arrayet, øges den med 1
      setCurrentSlide(currentSlide + 1);
    } else {
      // Hvis 'currentSlide' er ved slutningen af arrayet, går den tilbage til starten
      setCurrentSlide(0);
    }
};

// Funktion der håndterer navigation til forrige slide
const handlePrevSlide = () => {
setCurrentSlide(
  (prevSlide) => (prevSlide - 1 + reviews.length) % reviews.length
);

};


  return (
    <div className="relative overflow-hidden">
      <div className={`w-full h-auto flex flex-row pb-28 pt-4`} >
              <motion.div
                    className="flex items-center justify-center"
                    animate={{
                      x: `-${currentSlide * 10}%`,
                    }}
                    transition={{
                      ease: "linear",
                      duration: 0.6,
                    }}    
                    style={{ scrollSnapType: 'x mandatory' }}
                  >
              {/* Mapper gennem anmeldelser og opretter et slide for hver */}
          {duplicateSlides.map((review, index) => {
            return (
              <div
                key={index}
                className="flex-shrink-0 justify-center items-center flex"
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
            );
              })}
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
              index === currentSlide
                ? "bg-cmaccent"
                : "bg-cmsecondary/40"
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
