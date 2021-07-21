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
    LI.setAttribute("id", LIST_ITEMS[i]);
    LI.setAttribute("class", "nav_menu");
    UL.append(LI);
  }
};

export { NAV };
