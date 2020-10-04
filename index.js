const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Function to show Error
function showError(input, message){
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('small');
    formControl.className = 'form-control error';
    errorMessage.innerHTML = message;

}

// Function to show Success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// function to check valid email
function isEmailValid(input){
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email);
    console.log(regEx.test(String(input).toLowerCase()));
    return regEx.test(String(input).toLowerCase());
}

/*
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value===''){
        showError(username,'Username is required');
    }
    else{
        showSuccess(username);
    }
    if(email.value===''){
        showError(email,'Email is required');
    }

    else if(!(isEmailValid(email.value))){
        showError(email, 'Email is not Valid');
    }
    else{
        showSuccess(email);
    }  
    if(password.value===''){
        showError(password,'Password is required');
    }
    else{
        showSuccess(password);
    }
    if(password2.value===''){
        showError(password2,'password is required');
    }
    else{
        showSuccess(password2);
    }
});
*/


//To check length of inputs
function checkLength(input, min, max){
    if(input.value.length <= min){
        console.log(input.value);
        showError(input,`${getElement(input.id)} must be greater than ${min} `);
    }
    else if(input.value.length >= max){
        showError(input,`${getElement(input.id)} must be less than ${max}`);
    }
    else{
        showSuccess(input);
    }
}

// function to match the passwords
function matchPassword(password, password2){
    if(password.value !== password2.value){
        showError(password2, `${getElement(password2.id)} does not match`);
    }
}

function checkRequired(inputArray){
    inputArray.forEach(element => {
        if(element.value.trim()==='')
            showError(element, getElement(element.id)+ ` is required`);
        else if(element.id === 'email' && !(isEmailValid(element.value))){
            showError(element, `${getElement(element.id)} is not valid`);
        }
        else{
            showSuccess(element);
        }    
    });
}

function getElement(element){
    return element.charAt(0).toUpperCase() +''+element.slice(1);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 2, 15);
    checkLength(password, 8, 25);
    matchPassword(password, password2);
})