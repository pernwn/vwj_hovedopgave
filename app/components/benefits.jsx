'use client' //Markerer filen som klientkomponent i React-baseret miljø (Nextjs)

import React from "react";

//Import af UI komponenter
import { SimpleCardTwo } from "../ui/cards";
import { FilledBtn } from "../ui/buttons";
import { ReviewComp } from "../ui/reviews";
import styles from "../style";

//Funktionel med props komponent der sikrer samme layout og stil
const Para = ({ header, body }) => {
  return (
    <div className={`${styles.flexCenter} text-center flex-col w-4/5 xl:w-2/5 pb-8 space-y-4`}>
      <h2 className="text-h2 text-cmwhite">{header}</h2>
      <p className="text-h5 text-cmwhite/90 leading-tight">{body}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    // Sektion med gradient baggrund defineret i tailwind.config og globals css - Responsivt til skærme over 1700px
    <section
      className={`bg-gradient-bl ${styles.padding} space-y-12 xl:space-y-28 w-full h-full rounded-tl-[12em] rounded-br-[12em]`}
    >
      {/* Services */}
      <div className={`flex-col ${styles.flexCenter} pb-12 pt-4 px-8 w-full h-auto`}>
      {/* Anvendelse af tidligere defineret komponent 'Para' */}
        <Para
          header="Skræddersyet IT-sikkerhedseksperthjælp"
          body="Vi specialiserer os i at forbinde virksomheder med de bedste IT-sikkerhedsfreelancere, der imødekommer dine behov. Med vores omfattende netværk sikrer vi adgang til de mest kompetente eksperter."
        />
        <div className="grid grid-cols-2 gap-4 my-4 mb-8 w-3/4 xl:w-2/4">
          <SimpleCardTwo
            content="Oplev CyberMinds' specialisering inden for avanceret IT-sikkerhed og teknologiløsninger, der skræddersyes til dine behov."
            title="Specialisering"
          />
          <SimpleCardTwo
            content="CyberMinds finder de bedste IT-talenter fra hele verden for at styrke din virksomheds digitale forsvar og innovation."
            title="Talentsourcing"
          />
          <SimpleCardTwo
            content="Vi forstår vores kunders unikke behov og tilpasser vores løsninger til at imødekomme dem, hvilket skaber værdifulde partnerskaber."
            title="Kundeindsigt"
          />
          <SimpleCardTwo
            content="Vores ekspertteam foretager nøje udvalgte match mellem teknologi og forretning, der sikrer smidige og effektive løsninger."
            title="Effektive match"
          />
        </div>
        <FilledBtn title="Book en samtale" url="#kontakt" />
      </div>

    
      {/* Testimonials / social proof */}
      <div className={`flex-col ${styles.flexCenter} w-full py-8 h-auto`}>
        <Para
          header="Hvorfor vælge CyberMinds?"
          body="Vi specialiserer os i at forbinde virksomheder med de bedste IT-sikkerhedsfreelancere, der imødekommer dine behov. Med vores omfattende netværk sikrer vi adgang til de mest kompetente eksperter."
        />
        {/* Importeret komponent til at fremvise anmeldelser - funktionaliteter og styles defineret i separat dokument */}
        <ReviewComp />
      </div>
    </section>
  );
};

export default Benefits;
