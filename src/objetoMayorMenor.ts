/*importar la clase = necesitamos instanciar =crear un objeto de tipo MayorMenor */
import { MayorMenor} from "./MayorMenor.js";
/*crear un objeto = instanciar la clase */
const mayorMenor = new MayorMenor();
const boton = document.getElementById("btn_verificar") as HTMLButtonElement;
const respueta = document.getElementById("resultado2") as HTMLParagraphElement;

/*funcion flecha, se puede colocar de una vez el funcionamiento*/
boton.addEventListener("click",()=>{
    const valor1 = Number((document.getElementById("num_numero1") as HTMLInputElement).value);
    const valor2 = Number((document.querySelector("#num_numero2") as HTMLInputElement).value);
    const valor3 = Number((document.getElementById("num_numero3") as HTMLInputElement).value);
    /*utlizo el objeto para asignar valores y mostrar resultado*/
    mayorMenor.setValor1(valor1);
    mayorMenor.setValor2(valor2);
    mayorMenor.setValor3(valor3);
    /*ejecutar los metodos para obtener el mayor y menor y mostrar resultado*/
    respueta.innerHTML = `Mayor: ${mayorMenor.mayor()} Menor:${mayorMenor.menor()}` ;
});



