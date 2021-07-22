import storeLogo from "../../img/logo.webp";

const CATERING = () => {
  const CATERING = document.createElement("main");
  const LOGO = document.createElement("img");
  const CONTACT_TEXT = document.createElement("div");
  const HR = document.createElement("hr");
  const DETAILS = document.createElement("div");
  const FORM = document.createElement("form");

  CATERING.id = "catering_page";
  LOGO.src = storeLogo;
  LOGO.id = "catering_store_logo";
  CONTACT_TEXT.id = "contact_text";
  CONTACT_TEXT.innerText = "Contact Us Today For A Custom Catering Solution";
  HR.id = "catering_page_hr";
  DETAILS.id = "details";
  DETAILS.innerText =
    "Provide: Date of Event, Time of Event, Number of People, & any details or requests that you may have in mind.";
  FORM.id = "catering_form";

  document.body.append(CATERING);
  CATERING.append(LOGO);
  CATERING.append(CONTACT_TEXT);
  CATERING.append(HR);
  CATERING.append(DETAILS);
  CATERING.append(FORM);

  const FORM_IDS = ["name_input", "email_input", "message_input"];
  const LABEL_TEXT = ["Name", "Email", "Message"];
  for (let i = 0; i < 3; i++) {
    const INPUT_CONTAINER = document.createElement("div");
    const LABEL = document.createElement("label");
    const INPUT = document.createElement("input");

    INPUT_CONTAINER.id = `input_container_${i}`;
    INPUT_CONTAINER.classList = "input_container";
    LABEL.setAttribute("for", FORM_IDS[i]);
    LABEL.innerText = LABEL_TEXT[i];
    INPUT.id = FORM_IDS[i];
    INPUT.classList = "catering_input";
    INPUT.setAttribute("name", FORM_IDS[i]);
    INPUT.setAttribute("type", "text");

    FORM.append(INPUT_CONTAINER);
    INPUT_CONTAINER.append(LABEL);
    INPUT_CONTAINER.append(INPUT);
  }
};

export { CATERING };
