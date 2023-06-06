//Get Actual Year

const footerYearEl = document.querySelector(".year");

let today = new Date();
let year = today.getFullYear();

footerYearEl.textContent = year;