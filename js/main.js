'use strict'

const ham = document.querySelector('.ham');
const menuOptions = document.querySelector('.menuOptions');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    menuOptions.classList.toggle('activado');
    barras.forEach(child => { child.classList.toggle('animado') });
});


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