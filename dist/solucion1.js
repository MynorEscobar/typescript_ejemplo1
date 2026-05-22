"use strict";
const numNumero1 = document.querySelector("#num_numero1");
const numNumero2 = document.querySelector("#num_numero2");
const numNumero3 = document.querySelector("#num_numero3");
const btnPromedio = document.querySelector("#btn_promedio");
const respuesta = document.querySelector("#resultado");
function calcularPromedio(e) {
    e.preventDefault();
    let promedio;
    promedio = (parseFloat(numNumero1.value) + parseFloat(numNumero2.value) + parseFloat(numNumero3.value)) / 3;
    respuesta.innerHTML = "El promedio es: " + promedio;
}
btnPromedio.addEventListener("click", calcularPromedio);
