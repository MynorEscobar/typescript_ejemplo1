import { ContarVocales } from "./ContarVocales.js";
const texto = document.getElementById("txt_texto");
const btnContarVocales = document.getElementById("btn_contar_vocales");
const respuesta = document.getElementById("resultado_vocales");
btnContarVocales.addEventListener("click", () => {
    const objeto = new ContarVocales();
    objeto.setTexto(String(texto.value));
    respuesta.innerHTML = "Cantidad de vocales: " + objeto.contarVocales();
});
