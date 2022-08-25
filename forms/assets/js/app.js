/*https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/ */
const usernnameEl = document.querySelector("#username");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirm-password");

const form = document.querySelector("#signup");

form.addEventListener("submit", function (e) {
    //prevent the form from submitting
    e.preventDefault();
});

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
    length < min || length > max ? false : true;
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}
/*
Password RegEx	Meaning
^	                The password starts
(?=.*[a-z])	        The password must contain at least one lowercase character
(?=.*[A-Z])	        The password must contain at least one uppercase character
(?=.*[0-9])	        The password must contain at least one number
(?=.*[!@#$%^&*])	The password must contain at least one special character.
(?=.{8,})	        The password must be eight characters or longer
*/
const showError = (input, message){
    
}

