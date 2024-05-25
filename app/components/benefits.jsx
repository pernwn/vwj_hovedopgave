'use client'

import { SimpleCard, SimpleCardTwo } from "../ui/cards";
import React from "react";
import styles from "../style";
import { FilledBtn } from "../ui/buttons";
import { ReviewComp } from "../ui/reviews";




const Para = ({ header, body }) => {
  return (
    <div className={`${styles.flexCenter} text-center flex-col w-3/5 pb-8`}>
      <h2 className="text-h2 text-cmwhite">{header}</h2>
      <p className="text-p text-cmwhite/80">{body}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <section
      className={`bg-gradient-bl ${styles.padding} space-y-12 xl:space-y-28 w-full h-full rounded-tl-[12em] rounded-br-[12em]`}
    >
      {/* Services */}
      <div className={`flex-col ${styles.flexCenter} pb-12 pt-4 w-full h-auto`}>
        <Para
          header="Skræddersyet IT-sikkerhedseksperthjælp"
          body="Vi specialiserer os i at forbinde virksomheder med de bedste IT-sikkerhedsfreelancere, der imødekommer dine behov. Med vores omfattende netværk sikrer vi adgang til de mest kompetente eksperter."
        />
        <div className="grid grid-cols-2 gap-4 mb-8 w-3/4 xl:w-2/4">
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
        <FilledBtn title="Book en samtale" />
      </div>

    
      {/* Testimonials / social proof */}
      <div className={`flex-col ${styles.flexCenter} w-full py-8 h-auto`}>
        <Para
          header="Hvorfor vælge CyberMinds?"
          body="Vi specialiserer os i at forbinde virksomheder med de bedste IT-sikkerhedsfreelancere, der imødekommer dine behov. Med vores omfattende netværk sikrer vi adgang til de mest kompetente eksperter."
        />
        <ReviewComp />
      </div>
    </section>
  );
};

export default Benefits;
