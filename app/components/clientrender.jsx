'use client'

import Loading from "../(overview)/loading";
import React, { useState, useEffect } from "react";


const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};


const ClientRender = ({ children }) => {
  const isClient = useIsClient();

  if (!isClient) {
    return <Loading/>
  }

  return <>{children}</>;
};

export default ClientRender;
