"use client"; //Markerer filen som klientkomponent i React-baseret miljø (Nextjs)

import React from "react";

//Import af UI komponenter
import { SimpleCardTwo } from "../ui/cards";
import { Primary } from "../ui/buttons";
import { ReviewComp } from "../ui/reviews";
import styles from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeAngle,
  faLightbulb,
  faRankingStar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

//Funktionel med props komponent der sikrer samme layout og stil
const Para = ({ header, body }) => {
  return (
    <div
      className={`${styles.flexCenter} text-center flex-col w-4/5 xl:w-2/4 pb-8 space-y-4`}
    >
      <h2 className="text-h2 text-cmwhite">{header}</h2>
      <p className="text-h5 text-cmwhite/90 leading-tight">{body}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    // Sektion med gradient baggrund defineret i tailwind.config og globals css - Responsivt til skærme over 1700px
    <section
      className={`bg-gradient-bl ${styles.padding} space-y-20 xl:space-y-28 w-full h-full rounded-tl-[12em] rounded-br-[12em]`}
    >
      {/* Services */}
      <div
        className={`flex-col ${styles.flexCenter} pb-12 pt-4 px-8 w-full h-auto`}
      >
        {/* Anvendelse af tidligere defineret komponent 'Para' */}
        <Para
          header="Skræddersyet IT-sikkerhedseksperthjælp"
          body="Få et indblik i, hvordan vi prioriterer
                kvalitet, pålidelighed og effektivitet i
                alle vores handlinger. Se her, hvordan vores dedikation til
                disse værdier former hver interaktion og beslutning, vi træffer."
        />
        <div className="flex items-center justify-center gap-4 px-12 my-4 mb-8 w-full xl:w-3/4">
          <SimpleCardTwo
            content="Oplev CyberMinds' specialisering inden for avanceret IT-sikkerhed og teknologiløsninger, der skræddersyes til dine behov."
            title="Specialisering"
            icon={<FontAwesomeIcon icon={faUserTie} size="xl" />}
          />
          <SimpleCardTwo
            content="Vi forstår vores kunders unikke behov og tilpasser vores løsninger til at imødekomme dem, hvilket skaber værdifulde partnerskaber."
            title="Kundeindsigt"
            icon={<FontAwesomeIcon icon={faLightbulb} size="xl" />}
          />
          <SimpleCardTwo
            content="CyberMinds finder de bedste IT-talenter fra hele verden for at styrke din virksomheds digitale forsvar og innovation."
            title="Talentsourcing"
            icon={<FontAwesomeIcon icon={faRankingStar} size="lg" />}
          />
          <SimpleCardTwo
            content="Vores ekspertteam foretager nøje udvalgte match mellem teknologi og forretning, der sikrer smidige og effektive løsninger."
            title="Effektive match"
            icon={<FontAwesomeIcon icon={faHandshakeAngle} size="xl" />}
          />
        </div>
        <Primary title="Book en samtale" url="#kontakt" />
      </div>

      {/* Testimonials / social proof */}
      <div className={`flex-col ${styles.flexCenter} w-full py-8 h-auto`}>
        <Para
          header="Hvorfor vælge CyberMinds?"
          body="Få indsigt i, hvordan virksomheder som din har oplevet øget sikkerhed og tillid med CyberMinds ved deres side."
        />
        {/* Importeret komponent til at fremvise anmeldelser - funktionaliteter og styles defineret i separat dokument */}
        <ReviewComp />
      </div>
    </section>
  );
};

export default Benefits;
