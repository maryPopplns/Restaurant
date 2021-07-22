import { HOME } from "../home/home.js";
import { MENU } from "../menu/menu.js";
import { CATERING } from "../catering/catering.js";

const NAV = () => {
  const NAVBAR = document.createElement("nav");
  const UL = document.createElement("ul");

  NAVBAR.setAttribute("id", "navbar");
  UL.setAttribute("id", "nav_ul");

  document.body.append(NAVBAR);
  NAVBAR.append(UL);

  const LIST_ITEMS = ["home", "menu", "catering"];
  for (let i = 0; i < LIST_ITEMS.length; i++) {
    const LI = document.createElement("li");
    const BUTTON = document.createElement("button");
    LI.setAttribute("id", LIST_ITEMS[i]);
    LI.setAttribute("class", "nav_menu");
    BUTTON.setAttribute("id", `${LIST_ITEMS[i]}_button`);
    BUTTON.setAttribute("class", "nav_button");
    BUTTON.innerText = LIST_ITEMS[i];
    UL.append(LI);
    LI.append(BUTTON);
  }

  const NAV_HANDLER = (e) => {
    document.querySelector("main").remove();

    if (e.target.id.includes("home")) {
      HOME();
    }
    if (e.target.id.includes("menu")) {
      MENU();
    }
    if (e.target.id.includes("catering")) {
      CATERING();
    }
  };

  for (let i = 0; i < 3; i++) {
    document
      .getElementById(LIST_ITEMS[i])
      .addEventListener("click", NAV_HANDLER);
  }
};

export { NAV };
