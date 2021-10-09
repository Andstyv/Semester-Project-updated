const newsEmail = document.getElementById("news-email");
const newsEmailError = document.getElementById("email-sub-error");
const newsSubBtn = document.querySelector(".newsletter-subscribe");
const emailSubSuccess = document.querySelector(".email-sub-success");

newsSubBtn.addEventListener("click", validateForm);

function validateForm(event) {
  event.preventDefault();

  if (validateEmail(newsEmail.value)) {
    newsEmailError.style.display = "none";
  } else {
    newsEmailError.style.display = "block";
  }

  if (validateEmail(newsEmail.value)) {
    newsEmail.style.display = "none";
    emailSubSuccess.style.display = "block";
  }
}

function validateEmail(contactMail) {
  const regEx = /\S+@\S+\.\S+/;
  const emailMatch = regEx.test(contactMail);
  return emailMatch;
}

//   emailSubscribeBtn.addEventListener("click", function () {
//     emailInput.style.display = "none";
//     emailSubSuccess.style.display = "block";
//   });
