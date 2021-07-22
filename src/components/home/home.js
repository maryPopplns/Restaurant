import coverImg from "./img/coverImg.webp";

const HOME = () => {
  const HOME = document.createElement("main");
  const COVER_IMG = document.createElement("img");

  HOME.id = "home";
  COVER_IMG.src = coverImg;

  document.body.append(HOME);
  HOME.append(COVER_IMG);
};

export { HOME };
