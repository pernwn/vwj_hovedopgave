'use client'

import React, { useState } from "react";
import styles from "../style";
import Accordion from "../ui/accordion";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

    const accordions = [
      {
        header: "Accordion 1",
        sub: "Subheader 1",
        body: "This is the body of accordion 1.",
      },
      {
        header: "Accordion 2",
        sub: "Subheader 2",
        body: "This is the body of accordion 2.",
      },
      {
        header: "Accordion 3",
        sub: "Subheader 3",
        body: "This is the body of accordion 3.",
      },
      {
        header: "Accordion 4",
        sub: "Subheader 4",
        body: "This is the body of accordion 4.",
      },
      {
        header: "Accordion 5",
        sub: "Subheader 5",
        body: "This is the body of accordion 5.",
      },
    ];
  return (
    <section
      className={`${styles.padding} flex flex-row gap-2 items-start justify-center`}
    >
      <div className="space-y-2 w-2/4 xl:w-1/5">
        <h2 className="text-h2">Fortsat i tvivl?</h2>
        <h4 className="text-h4">Få svar i vores FAQ</h4>
        <p className="text-p">
          Find svar på oftede stillede spørgsmål for hjælp og klarhed.
        </p>
      </div>
      <div className="w-3/4 xl:w-1/4">
{accordions.map((accordion, index) => (
        <Accordion
          key={index}
          header={accordion.header}
          sub={accordion.sub}
          body={accordion.body}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
      </div>
    </section>
  );
};

export default Faq;


// 'use client'
// import React, { useState } from "react";
// import Accordion from "./Accordion"; // importér din Accordion-komponent

// const AccordionGroup = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex(index === openIndex ? null : index);
//   };

//   const accordions = [
//     {
//       header: "Accordion 1",
//       sub: "Subheader 1",
//       body: "This is the body of accordion 1.",
//     },
//     {
//       header: "Accordion 2",
//       sub: "Subheader 2",
//       body: "This is the body of accordion 2.",
//     },
//     {
//       header: "Accordion 3",
//       sub: "Subheader 3",
//       body: "This is the body of accordion 3.",
//     },
//   ];

//   return (
//     <div>
//       {accordions.map((accordion, index) => (
//         <Accordion
//           key={index}
//           header={accordion.header}
//           sub={accordion.sub}
//           body={accordion.body}
//           isOpen={openIndex === index}
//           onClick={() => handleToggle(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default AccordionGroup;

