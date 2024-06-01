import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// USP'er i flexbox med ikon og tekst
const USP = ({icon,text}) => {
   const [isHovered, setIsHovered] = useState(false);
   return (
     <div
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}
       className={`flex flex-col space-y-4  p-4 w-full text-center ${
         isHovered ? "translate-y-0" : "translate-y-4"
       } transition ease-linear duration-400`}
     >
       <FontAwesomeIcon icon={icon} size="2xl" />
       <h4 className="text-cmaccent text-h3 font-normal">{text}</h4>
     </div>
   );
};

export default USP;
