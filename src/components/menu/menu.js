import storeLogo from "../../img/logo.webp";

const MENU = () => {
  const MENU = document.createElement("main");
  const LOGO = document.createElement("img");
  const MENU_TEXT = document.createElement("h1");
  const HR = document.createElement("hr");
  const MENU_ITEMS = document.createElement("ol");

  MENU.id = "menu_page";
  LOGO.src = storeLogo;
  LOGO.id = "menu_store_logo";
  MENU_TEXT.id = "menu_header";
  MENU_TEXT.innerText = "MENU";
  HR.id = "menu_page_hr";
  MENU_ITEMS.id = "menu_items";

  document.body.append(MENU);
  MENU.append(LOGO);
  MENU.append(MENU_TEXT);
  MENU.append(HR);
  MENU.append(MENU_ITEMS);

  const PRICES = [84.99, 77.99, 49.99, 62.99];
  const FEEDS = ["6-8", "6-8", "3-4", "5-6"];
  const DESCRIPTIONS = [
    "1.5 lbs brisket, 1.5 lbs pulled pork, 1 lb mix/match hot links, sausage, or chicken. 1 pint house bbq, choice 6 sides, and 8 cornbread muffins",
    "Full slab ribs, 1 lb brisket, 1 lbs mix/match pork, chicken, or sausage, pint coleslaw, pint pit beans, pints mac n cheese, and 8 cornbread muffins",
    "1/2 slab ribs, 1/2 lb brisket, half lb pulled pork, 1/2 pint bbq sauce side pit beans, Full pint of mac n cheese, side coleslaw, 4 cornbread muffins",
    "3/4 lb brisket, 3/4 lb pulled pork, 1/2 lb chicken breast, 1/2 lb hot links, 1/2 pint bbq, choice of 4 sides, and 4 cornbread muffins",
  ];

  for (let i = 0; i < 4; i++) {
    const MENU_ITEM = document.createElement("li");
    const NUM_PRICE_CONTAINER = document.createElement("div");
    const SPECIAL_NUM = document.createElement("div");
    const PRICE = document.createElement("div");
    const DESCRIPTION_CONTAINER = document.createElement("div");
    const FEEDS_TEXT = document.createElement("div");
    const DESCRIPTION = document.createElement("div");

    MENU_ITEM.id = `menu_item_${i + 1}`;
    MENU_ITEM.classList = "menu_item";
    NUM_PRICE_CONTAINER.id = `num_price_container_${i + 1}`;
    NUM_PRICE_CONTAINER.classList = "num_price_container";
    SPECIAL_NUM.id = `special_${i + 1}`;
    SPECIAL_NUM.classList = "special_item";
    SPECIAL_NUM.innerText = `SPECIAL #${i + 1}`;
    PRICE.id = `item_${i + 1}_price`;
    PRICE.classList = "item_price";
    PRICE.innerText = PRICES[i];
    DESCRIPTION_CONTAINER.id = `desciption_container_${i + 1}`;
    DESCRIPTION_CONTAINER.classList = "description_container";
    FEEDS_TEXT.innerText = `(feeds ${FEEDS[i]})`;
    DESCRIPTION.innerText = DESCRIPTIONS[i];

    MENU_ITEMS.append(MENU_ITEM);
    MENU_ITEM.append(NUM_PRICE_CONTAINER);
    NUM_PRICE_CONTAINER.append(SPECIAL_NUM);
    NUM_PRICE_CONTAINER.append(PRICE);
    MENU_ITEM.append(DESCRIPTION_CONTAINER);
    DESCRIPTION_CONTAINER.append(FEEDS_TEXT);
    DESCRIPTION_CONTAINER.append(DESCRIPTION);
  }
};

export { MENU };
