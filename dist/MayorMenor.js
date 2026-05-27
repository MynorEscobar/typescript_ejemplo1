export class MayorMenor {
    constructor() {
        this.valor1 = 0;
        this.valor2 = 0;
        this.valor3 = 0;
    }
    setValor1(valor1) {
        this.valor1 = valor1;
    }
    setValor2(valor2) {
        this.valor2 = valor2;
    }
    setValor3(valor3) {
        this.valor3 = valor3;
    }
    getValor1() {
        return this.valor1;
    }
    getValor2() {
        return this.valor2;
    }
    getValor3() {
        return this.valor3;
    }
    mayor() {
        let mayor = this.valor1;
        if (this.valor2 > mayor) {
            mayor = this.valor2;
        }
        if (this.valor3 > mayor) {
            mayor = this.valor3;
        }
        return mayor;
    }
    menor() {
        let menor = this.valor1;
        if (this.valor2 < menor) {
            menor = this.valor2;
        }
        if (this.valor3 < menor) {
            menor = this.valor3;
        }
        return menor;
    }
}
