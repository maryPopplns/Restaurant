import coverImg from "./img/coverImg.webp";
import storeLogo from "../../img/logo.webp";

const HOME = () => {
  const HOME = document.createElement("main");
  const COVER_IMG = document.createElement("img");
  const PHONE_NUMBER = document.createElement("div");
  const HR = document.createElement("hr");
  const LOGO = document.createElement("img");

  HOME.id = "home_page";
  COVER_IMG.src = coverImg;
  COVER_IMG.alt = "image showing somone preparing barbeque";
  COVER_IMG.id = "coverImg";
  PHONE_NUMBER.id = "phone_number";
  PHONE_NUMBER.innerText = "(602) 996-2017";
  HR.id = "home_page_hr";
  LOGO.src = storeLogo;
  LOGO.id = "home_page_store_logo";

  document.body.append(HOME);
  HOME.append(COVER_IMG);
  HOME.append(PHONE_NUMBER);
  HOME.append(HR);
  HOME.append(LOGO);
};

export { HOME };
