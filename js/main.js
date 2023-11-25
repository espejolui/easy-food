"use strict"

const ham = document.querySelector(".ham");
const menuOptions = document.querySelector(".menuOptions");
const barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
    menuOptions.classList.toggle("activado");
    barras.forEach(child => { child.classList.toggle("animado") });
});


/* Función para el popUp del inicio de sesión y crear cuenta */
function entrarCrear() {

    /* Atrapo los tags necesarios */
    const buttonsContainer = document.querySelector(".buttonsContainer");
    const formLogin = document.querySelector(".formLogin");
    const formSignUp = document.querySelector(".formSignUp");

    /* Evento click ejecutado con addEventListener para los dos formularios */
    buttonsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("login")) {

            formLogin.classList.toggle("active");
            formSignUp.classList.remove("active");

        } else if (e.target.classList.contains("signUp")) {
            formSignUp.classList.toggle("active");
            formLogin.classList.remove("active"); // Asegurarse de que solo uno está activo a la vez
        }
    });
}
entrarCrear();

/* Pequeña función para los botones de cancelar y que el formulario se cierre */
function cancelar() {
    const cancels = document.querySelectorAll(".cancel");

    cancels.forEach(cancel => {
        cancel.addEventListener("click", () => {
            document.querySelectorAll(".formLogin.active, .formSignUp.active").forEach(form => {
                form.classList.remove("active");
            });
        });
    });
}
cancelar();

