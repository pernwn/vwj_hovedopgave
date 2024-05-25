import React from "react";
import styles from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faPeopleArrows, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
//import { OutlinedBtn } from "./Buttons";

const USP = () => {
  return (
    <div className={`flex flex-row justify-evenly text-h4 py-16 text-cmaccent`}>
      <div className="flex flex-col space-y-4">
        <FontAwesomeIcon icon={faShieldHalved} size="2xl"/>
        <h4 className="text-cmaccent text-h3 font-normal">Nichespecialister</h4>
      </div>
      <div className="flex flex-col space-y-4">
        <FontAwesomeIcon icon={faBrain} size="2xl"/>
        <h4 className="text-cmaccent text-h3 font-normal">Dybdegående forståelse</h4>
      </div>
      <div className="flex flex-col space-y-4">
        <FontAwesomeIcon icon={faPeopleArrows} size="2xl"/>
        <h4 className="text-cmaccent text-h3 font-normal">Bedre match</h4>
      </div>
    </div>
  );
};

export default USP;
