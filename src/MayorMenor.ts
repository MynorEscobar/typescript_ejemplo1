/*export servira para poder utilizar la clase en otro archivo que será donde cree el objeto */
export class MayorMenor{
    /*atributos*/
    private valor1: number=0;
    private valor2: number=0;
    private valor3: number=0;
    /*métodos*/
    /*void = método sin retorno*/
    setValor1(valor1: number):void{
        /*this = atributo de la clase
            solo el nombre parametro
        */
        this.valor1 = valor1;
    }
    setValor2(valor2:number):void{
        this.valor2 = valor2;
    }
    setValor3(valor3:number):void{
        this.valor3 = valor3;
    }
    /*mostrar información*/
    getValor1():number{
        return this.valor1
    }
    getValor2():number{
        return this.valor2
    }
    getValor3():number{
        return this.valor3
    }

    /*metodo para mayor */
    mayor():number{
        let mayor= this.valor1;
        if(this.valor2>mayor){
            mayor=this.valor2
        }
        if(this.valor3>mayor){
            mayor=this.valor3
        }
        return mayor 
    }
    menor():number{
        let menor= this.valor1;
        if(this.valor2<menor){
            menor=this.valor2
        }
        if(this.valor3<menor){
            menor=this.valor3
        }
        return menor 
    }
    

}