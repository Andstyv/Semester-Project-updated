const hambButton = document.querySelector(".hamb-button");
const navList = document.querySelector(".nav-list");
const openingDay = document.querySelector(".opening-txt");
const openingHours = document.querySelector(".opening-txt-hours");

const emailInput = document.getElementById("news-email");
const emailSubscribeBtn = document.querySelector(".newsletter-subscribe");
const emailSubSuccess = document.querySelector(".email-sub-success");

hambButton.addEventListener("click", function () {
  navList.style.display == "block" ? (navList.style.display = "none") : (navList.style.display = "block");
});

emailSubscribeBtn.addEventListener("click", function () {
  emailInput.style.display = "none";
  emailSubSuccess.style.display = "block";
});

let todaysDate = new Date();
let numberOfDay = todaysDate.getDay();

function getOpeningHours() {
  if (numberOfDay === 1) {
    console.log("monday");
    openingDay.innerHTML = "CLOSED TODAY";
    openingHours.innerHTML = "";
  }
  if (numberOfDay === 2 || numberOfDay === 3 || numberOfDay == 4) {
    console.log("tue, wed, thu");
    openingHours.innerHTML = "10:00 - 16:00";
  }
  if (numberOfDay === 5) {
    console.log("friday");
    openingHours.innerHTML = "10:00 - 19:00";
  }
  if (numberOfDay === 6) {
    console.log("saturday");
    openingHours.innerHTML = "09:00 - 16:00";
  }
  if (numberOfDay === 7) {
    console.log("sunday");
    openingHours.innerHTML = "09:00 - 13:00";
  }
}
getOpeningHours();
