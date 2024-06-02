"use client";
import React from "react";

// Funktion til visning og animation af ikon
const Icon = ({ open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={`stroke-cmaccent ${
        open ? "rotate-180" : ""
      } h-6 w-6 transition-transform`} // Rotationsklassen tilføjes, hvis menuen er åben
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const Accordion = ({ header, sub, body, isOpen, onClick }) => {
  return (
    <div className="mb-4 rounded-lg shadow-md border border-cmdark/5 p-4 px-6">
      <div
        className={`flex items-center justify-between cursor-pointer ${
          isOpen ? "bg-cmdark/5 w-full p-2 py-4 rounded-md" : "" // Baggrundsfarve tilføjes, hvis menuen er åben
        } transition-colors`}
        onClick={onClick}
      >
        <h3 className="text-h5">{header}</h3>
        <Icon open={isOpen} /> {/* Visning af ikonet, der angiver om menuen er åben eller ej */}
      </div>
      {isOpen && (
        <div className="py-6 w-fit h-auto">
          <h5 className={`text-h5 font-normal`}>{sub}</h5>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
