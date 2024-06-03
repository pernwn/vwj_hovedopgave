'use client' //Klientkomponent

//Import af Loading som viser skeleton ved indlæsning af siden
import Loading from "../(overview)/loading";
import React, { useState, useEffect } from "react";

// Bestemmer, om komponenten kører på klienten eller serveren
//Hook funktion der tjekker om komponenten kører på på klient eller server
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false); //State variabel 'isClient', starter som false

  //Hook - kører én gang efter første render
  useEffect(() => {
    setIsClient(true); //Hvis komponenten kører på klienten er isClient = true
  }, []); //Tom afhængighedsarray sikrer at useEffect kun kører 1 gang ved indlæsning

  return isClient;
};


const ClientRender = ({ children }) => {
  const isClient = useIsClient();

  if (!isClient) { // Hvis man er server side returnerer den load (ikke på klient)
    return <Loading/> 
  }

  return <>{children}</>; // Hvis man er client side returnerer den børneelementer (ikke skeleton)
};

export default ClientRender;
