"use strict";
const numero = document.getElementById("num_numero");
const resultado = document.querySelector("#div_resultado");
const form = document.getElementById("form_tabla_multiplicar");
const botonTabla = document.getElementById("btn_tabla_multiplicar");
function generarTablaMultiplicar(e) {
    e.preventDefault();
    let valor = parseFloat(numero.value);
    resultado.innerHTML = "";
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
        tabla += `<p>${valor} x ${i} = ${valor * i}</p>`;
    }
    resultado.innerHTML = tabla;
}
botonTabla.addEventListener("click", generarTablaMultiplicar);
