const form = document.querySelector(".contact-form");

const contactSelect = document.getElementById("contact-select");
const contactName = document.getElementById("contact-name");
const contactMail = document.getElementById("contact-mail");
const contactTel = document.getElementById("contact-tel");
const contactMsg = document.getElementById("contact-msg");

const reasonError = document.getElementById("reasonError");
const nameError = document.getElementById("nameError");
const mailError = document.getElementById("mailError");
const addressError = document.getElementById("telError");
const textError = document.getElementById("msgError");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(contactSelect.value, 1)) {
    reasonError.style.display = "none";
  } else {
    reasonError.style.display = "block";
  }

  if (checkLength(contactName.value, 3)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (validateEmail(contactMail.value)) {
    mailError.style.display = "none";
  } else {
    mailError.style.display = "block";
  }
  if (checkLength(contactTel.value, 8)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  if (checkLength(contactMsg.value, 10)) {
    textError.style.display = "none";
  } else {
    textError.style.display = "block";
  }

  if (checkLength(contactSelect.value, 1) && checkLength(contactName.value, 3) && checkLength(contactTel.value, 8) && validateEmail(contactMail.value) && checkLength(contactMsg.value, 10)) {
    form.innerHTML = `<div class="contact-form-success">Your message has been sent</div>`;
  } else {
    console.log("NO");
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(contactMail) {
  const regEx = /\S+@\S+\.\S+/;
  const emailMatch = regEx.test(contactMail);
  return emailMatch;
}
