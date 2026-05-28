export class ContarVocales{
    //atributos
    //texto que ingresa el usuario
    private texto:string="";
    private contar:number=0;
    //contiene todos los caracteres que vamos a verificar (vocales)
    private vocales:string="aeiouAEIOUáéíóúÁÉÍÓÚ";
    //métodos
    //método para asignar(set) texto y método para obtener(get) el texto ingresado
    public getTexto():string{
        return this.texto;
    }
    public setTexto(texto:string):void{
        this.texto=texto;
    }
    public contarVocales():number{
        this.contar=0;
        for(let letra of this.texto){
            
            if(this.vocales.includes(letra)){
                this.contar+=1;
            }
            
        }
        return this.contar; 
    }
}