//enlazar los elementos de HTML con elementos de tsc
const numero = document.getElementById("num_numero") as HTMLInputElement;
const resultado = document.querySelector("#div_resultado") as HTMLDivElement;
const form = document.getElementById("form_tabla_multiplicar") as HTMLFormElement;
const botonTabla = document.getElementById("btn_tabla_multiplicar") as HTMLButtonElement;

function generarTablaMultiplicar(e:Event){
    e.preventDefault()
    let valor = parseFloat(numero.value);
    //limpiar el contenido del resultado, cada vez que presione el boton el 
    //contenido se borra
    resultado.innerHTML="";
    let tabla:string = "";
    for (let i = 1; i <= 10; i++) {
        tabla+=`<p>${valor} x ${i} = ${valor * i}</p>`;
    }
    resultado.innerHTML=tabla;
    //10 x 1 = 10
    //10 x 2 = 20
    //alt 96 `
}
botonTabla.addEventListener("click",generarTablaMultiplicar);


