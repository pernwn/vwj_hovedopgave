"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import { Checkbox, FormControlLabel, styled } from "@mui/material";
import styles from "../style";


import {
  Card,
  Dialog,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const CustomCheckbox = styled(Checkbox)(({ error }) => ({
  color: error ? "#DE1704" : "#86bae2",
  "&.Mui-checked": {
    color: error ? "#DE1704" : "#86bae2",
  },
}));

export default function FormComp() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    message: "",
    check: false,
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    contact: false,
    message: false,
    contactFormat: false,
    check: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormValues((prevValues) => ({ ...prevValues, [id]: newValue }));
    if (newValue) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: false }));
      if (id === "contact") {
        setErrors((prevErrors) => ({ ...prevErrors, contactFormat: false }));
      }
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      contact: !formValues.contact,
      message: !formValues.message,
      contactFormat: !validateEmail(formValues.contact),
      check: !formValues.check,
    };
    setErrors(newErrors);

    if (
      !Object.values(newErrors).some((error) => error) &&
      validateEmail(formValues.contact)
    ) {
      setOpen(true);
    }
  };

  useEffect(() => {
    const { firstName, lastName, contact, message, check } = formValues;
    const allFieldsFilled =
      firstName && lastName && contact && message && check;
    setIsButtonDisabled(!allFieldsFilled);
  }, [formValues]);

  return (
    <Card shadow={false} className="bg-transparent text-cmwhite">
      <form className="w-full max-w-xl xl:w-full " onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-cmwhite text-h6 font-bold mb-2"
              htmlFor="firstName"
            >
              Fornavn&#x2a;
            </label>
            <input
              className={`appearance-none block w-full placeholder-cmwhite/70 bg-cmsecondary/15 border-2 rounded py-3 px-4 leading-tight focus:outline-none ${
                errors.firstName ? "border-[#DE1704]" : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="firstName"
              type="text"
              placeholder="Jane"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-[#DE1704] text-xs italic pt-2">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="pr-2"
                />
                {"Venligst udfyld feltet."}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-cmwhite text-h6 font-bold mb-2"
              htmlFor="lastName"
            >
              Efternavn&#x2a;
            </label>
            <input
              className={`appearance-none placeholder-cmwhite/70 block w-full bg-cmsecondary/15 border-2 rounded py-3 px-4 leading-tight focus:outline-none ${
                errors.lastName ? "border-[#DE1704]" : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="lastName"
              type="text"
              placeholder="Doe"
              value={formValues.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-[#DE1704] text-xs italic pt-2">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="pr-2"
                />
                {"Venligst udfyld feltet."}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-cmwhite text-h6 font-bold mb-2"
              htmlFor="contact"
            >
              Email&#x2a;
            </label>
            <input
              className={`appearance-none placeholder-cmwhite/70 block w-full bg-cmsecondary/15 border-2 rounded py-3 px-4 leading-tight focus:outline-none ${
                errors.contact || errors.contactFormat
                  ? "border-[#DE1704]"
                  : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="contact"
              type="text"
              placeholder="eksempel@email.dk"
              value={formValues.contact}
              onChange={handleChange}
            />
            {errors.contact && !errors.contactFormat && (
              <p className="text-[#DE1704] text-xs italic pt-2">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="pr-2"
                />
                {"Venligst udfyld feltet."}
              </p>
            )}
            {errors.contactFormat && (
              <p className="text-[#DE1704] text-xs italic pt-2">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="pr-2"
                />
                {"Indtast en gyldig email-adresse."}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-cmwhite text-h6 font-bold mb-2"
              htmlFor="message"
            >
              Beskriv hvordan vi kan hjælpe dig&#x2a;
            </label>
            <textarea
              className={`appearance-none placeholder-cmwhite/70 block w-full bg-cmsecondary/15 text-cmwhite border-2 rounded pt-3 pb-28 px-4 leading-tight focus:outline-none ${
                errors.message ? "border-[#DE1704]" : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="message"
              type="textarea"
              placeholder="Jeg ønsker at indlede en dialog med jeres team for at diskutere vores specifikke behov og krav til IT-sikkerhed. Vores virksomhed opererer i en branche, hvor..."
              value={formValues.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-[#DE1704] text-xs italic pt-2">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="pr-2"
                />
                {"Venligst udfyld feltet."}
              </p>
            )}
          </div>
          <div className="flex flex-wrap mx-3 flex-col">
            <div className="flex items-start">
              <FormControlLabel
                htmlFor="check"
                control={
                  <CustomCheckbox
                    id="check"
                    type="checkbox"
                    checked={formValues.check}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label={
                  <p className="text-xs leading-tight text-cmsecondary/90">
                    Jeg giver samtykke til at CyberMinds må kontakte mig med
                    information vedr. min forespørgsel. Jeg kan enhver tid
                    tilbagekalde mit samtykke.&#x2a;
                  </p>
                }
                labelPlacement="end"
              />
            </div>
            {errors.check && (
              <p className="text-[#DE1704] text-xs italic pt-2">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="pr-2"
                />
                {"Venligst bekræft samtykke."}
              </p>
            )}
          </div>
        </div>

        <div>
          <Button
            type="submit"
            variant="filled"
            className={`enabled:bg-cmaccent/65 enabled:text-cmwhite enabled:ring-cmaccent ring-2 uppercase w-full p-3 text-md font-medium transition-all ease-linear duration-200 enabled:hover:ring-[#ffad99] shadow-md enabled:hover:shadow-lg enabled:hover:bg-cmaccent enabled:hover:text-cmwhite enabled:hover:cursor-pointer translate-y-2 enabled:hover:translate-y-1 ${
              isButtonDisabled ? "bg-cmdark/40 text-cmwhite/40" : ""
            }`}
            // code for handling disabled button mode
            // ---disabled={isButtonDisabled}
          >
            <p className="text-p text-cmwhite">start dialogen</p>
          </Button>
        </div>
      </form>

      {/* Dialog Component */}
      <div className={`w-fit h-fit ${styles.padding} ${styles.flexCenter}`}>
        <Dialog
          className="bg-cmwhite/80 text-center h-fit w-fit mx-[35vw] my-[25vh] px-12 py-8 gap-2 flex flex-col items-center justify-center"
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <h3 className="text-h3">Tak for din henvendelse</h3>
          <div className="space-y-2">
            <p className="text-p">
              Vi har modtaget din besked og arbejder på at svare dig så hurtigt
              som muligt.
            </p>
            <p className="text-p">
              Hvis du har yderligere spørgsmål eller bekymringer, tøv ikke med
              at kontakte os igen. Vi er her for at hjælpe dig.
            </p>
          </div>

          <DialogFooter>
            <Button
              variant="gradient"
              onClick={handleOpen}
              className="text-p text-cmwhite bg-cmprimary hover:bg-[#001966] transition ease-linear duration-300"
            >
              <span>OK</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </Card>
  );
}
