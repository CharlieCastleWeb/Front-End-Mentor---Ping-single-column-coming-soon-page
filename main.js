
const form = document.getElementById("form");
const emailInput = document.getElementById("email-input");
const notifyButton = document.getElementById("submit-button");
const warningMessage = document.getElementsByClassName("warning");

const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

notifyButton.addEventListener("click", validate);

function showWarning() {
    warningMessage[0].classList.add("show");
    form.classList.add("form-warning");
}

function removeWarning() {
    warningMessage[0].classList.remove("show");
    form.classList.remove("form-warning");
}

function validate(e) {
    e.preventDefault();
    if (!emailInput.value || !emailInput.value.match(regex)) {
        showWarning();
        
    } else {
        removeWarning();
    }
}