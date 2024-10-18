
document.addEventListener('DOMContentLoaded', function() {

    function handleSubmit() {
        let firstName = document.querySelector("#firstname");
        let lastName =document.querySelector("lastname").value.trim();
        let email = document.querySelector("email").value.trim();
        let password = document.querySelector("password").value.trim();
        let errorElement = document.querySelector("error");

        errorElement.textContent = '';

        let input_container = document.querySelector(".input-container")
        inputBox.addEventListener('keyup', function (event) {
            input_container.innerHTML = firstName.value;
        })

        let contientArobase = email.indexOf('@') > 0;
        let contientPoint = email.lastIndexOf('.') > email.indexOf('@') + 1;
        let domaineValide = email.length > email.lastIndexOf('.') + 1;

        let longueurValide = password.length > 7;
        let contientLettresChiffres = /^[a-zA-Z0-9]+$/.test(password);

        console.log(firstName);

        if (firstName === ""){
            errorElement.textContent = "First name must not be empty";
            return false;
        }
        
        if (lastName === ""){
            errorElement.textContent = "Last name must not be empty";
            return false;
        }
        
        if(email !== contientArobase && contientPoint && domaineValide){
            errorElement.textContent ="Email is badly formatted";
            return false;
        }
        
        if(password !== longueurValide || contientLettresChiffres){
            errorElement.textContent ="Password must be at least 8 characters long and contain at least a letter and a number";
            return false;
        }

    return true
}

handleSubmit();

});