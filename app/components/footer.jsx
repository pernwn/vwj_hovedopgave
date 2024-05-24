import React from "react";
import CyberMindsBlueLogo from "@/app/assets/icons/logo-blue.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-cmdark text-center p-4 static bottom-0 gap-4 py-16">
      <CyberMindsBlueLogo
        alt="CyberMinds Logo Color Blue"
      />
      <p className="text-sm">
        © {new Date().getFullYear()} CyberMinds. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
