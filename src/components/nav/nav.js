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
};

export { NAV };
