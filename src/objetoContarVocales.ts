/*importar nos permite utilizar un archivo externo*/
import { ContarVocales } from "./ContarVocales.js";
/*recibir datos de la Interfaz grafica (pagina web)*/
const texto = document.getElementById("txt_texto") as HTMLInputElement;
const btnContarVocales = document.getElementById("btn_contar_vocales") as HTMLButtonElement;
const respuesta = document.getElementById("resultado_vocales") as HTMLParagraphElement;

btnContarVocales.addEventListener("click",()=>{
    //crear un objeto de tipo ContarVocales = instanciar la clase
    const objeto = new ContarVocales();
    //asignar el texto, necesito hacer un parceo/casting = convertir el valor ingresa a texto
    objeto.setTexto(String(texto.value));
    respuesta.innerHTML = "Cantidad de vocales: "+ objeto.contarVocales();
});