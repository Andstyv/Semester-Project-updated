const hambButton = document.querySelector(".hamb-button");
const navList = document.querySelector(".nav-list");
const openingDay = document.querySelector(".opening-txt");
const openingHours = document.querySelector(".opening-txt-hours");

hambButton.addEventListener("click", function () {
  navList.style.display == "block" ? (navList.style.display = "none") : (navList.style.display = "block");
});

let todaysDate = new Date();
let numberOfDay = todaysDate.getDay();

function getOpeningHours() {
  if (numberOfDay === 1) {
    openingDay.innerHTML = "CLOSED TODAY";
    openingHours.innerHTML = "";
  }
  if (numberOfDay === 2 || numberOfDay === 3 || numberOfDay == 4) {
    openingHours.innerHTML = "10:00 - 16:00";
  }
  if (numberOfDay === 5) {
    openingHours.innerHTML = "10:00 - 19:00";
  }
  if (numberOfDay === 6) {
    openingHours.innerHTML = "09:00 - 16:00";
  }
  if (numberOfDay === 7) {
    openingHours.innerHTML = "09:00 - 13:00";
  }
}
getOpeningHours();
