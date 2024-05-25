/* 
Denne kode definerer styling- og layoutvariabler for at gøre det nemt 
at opretholde en konsistent visuel æstetik på tværs af forskellige sektioner og komponenter på websitet */

const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-8 sm:py-16 py-8",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  margin: "sm:mx-16 mx-8 sm:my-16 my-8",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
