import "./style.css";
import submitCityInput from "./submitCityInput";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  submitCityInput(event);
});
