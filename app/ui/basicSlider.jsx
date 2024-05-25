"use client";

import React from "react";
import { motion } from "framer-motion";

// Import af ikoner for CM's samarbejdspartnere
import ScanGlobalIcon from "@/app/assets/icons/scanglobal.svg";
import IncomIcon from "@/app/assets/icons/incommodities.svg";
import IncubaIcon from "@/app/assets/icons/incuba.svg";
import WristShipIcon from "@/app/assets/icons/wristship.svg";
import ObtonIcon from "@/app/assets/icons/obton.svg";

const partners = [
  { id: 1, icon: ScanGlobalIcon },
  { id: 2, icon: IncomIcon },
  { id: 3, icon: IncubaIcon },
  { id: 4, icon: WristShipIcon },
  { id: 5, icon: ObtonIcon },
];

//Viser ikonet som et react element
const IconComponent = ({ icon: Icon }) => {
  return <Icon className="w-32 h-32 text-cmprimary mix-blend-hard-light fill-current p-2" />;
};

const CyberPartners = () => {
  // Dobbelt array af partnerikoner for at skabe en loopende animation
  const duplicateSlides = [...partners, ...partners, ...partners];

  return (
    <div className="w-full h-16 overflow-hidden relative flex flex-row no-scrollbar bg-cmdark bg-opacity-35 bg-clip-padding backdrop-filter backdrop-blur-sm">
      {/* Motion.div til at animere ikonerne */}
      <motion.div
        className="flex "
        animate={{
          x: ["-100%", "0%"], //Bevægelse fra venstre til højre
        }}
        transition={{
          ease: "linear",
          duration: 50, 
          repeat: Infinity, //Gentages uendeligt
        }}
      >
      {/* Mapping af ikoner (array øverst) og visning af dem i flex-container */}
        {duplicateSlides.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center "
            style={{ width: `${80 / partners.length}%` }} //Dynamisk beregning af bredden baseret på antallet af partnere
          >
            <IconComponent icon={partner.icon} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CyberPartners;
