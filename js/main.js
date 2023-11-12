'use strict'

const buttonsContainer = document.querySelector('.buttonsContainer');
let formLoging = document.querySelector('.formLoging');

buttonsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('login')) {
        formLoging.classList.toggle('active');
    }
    else if (e.target.classList.contains('signUp')) {
        console.log('botón de registro');
    }
});

