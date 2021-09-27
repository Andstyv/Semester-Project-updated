const hambButton = document.querySelector(".hamb-button");
const navList = document.querySelector(".nav-list");

hambButton.addEventListener("click", function () {
  navList.style.display == "block" ? (navList.style.display = "none") : (navList.style.display = "block");
});
