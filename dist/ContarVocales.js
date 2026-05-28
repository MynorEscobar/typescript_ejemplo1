export class ContarVocales {
    constructor() {
        this.texto = "";
        this.contar = 0;
        this.vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";
    }
    getTexto() {
        return this.texto;
    }
    setTexto(texto) {
        this.texto = texto;
    }
    contarVocales() {
        this.contar = 0;
        for (let letra of this.texto) {
            if (this.vocales.includes(letra)) {
                this.contar += 1;
            }
        }
        return this.contar;
    }
}
