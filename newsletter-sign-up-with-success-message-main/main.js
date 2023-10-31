const form = document.getElementById("form");
const email = document.getElementById("email");
const button = document.getElementById("button");
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        msg.innerHTML = "<h4 class='error'>Email address required<h4>";
        email.style.border = "1px solid red";

        setTimeout(() => document.querySelector(".error").remove(), 2000);
    } else if (!isValidEmail(emailValue)) {
        msg.innerHTML = "<h4 class='error'>Valid email required<h4>";

        setTimeout(() => document.querySelector(".error").remove(), 2000);
    } else {
        email.style.border = "1px solid lightgray";
        form.submit();
    }
}