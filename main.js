const button = document.querySelector (".section-container_div-form_button");
const email = document.querySelector (".section-container_div-form_email");
const error = document.querySelector (".section-container_div-form_error");

button.addEventListener ("click", Event=> {
    let reGex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (reGex.test(email.value) == false){
        email.classList.toggle ("active");
        error.classList.toggle ("active-error");
    } else {
        email.classList.remove ("active");
        error.classList.remove ("active-error");
    }
})