class calculadora{
    private num1: number;
    private num2: number;

    constructor(num1: number, num2: number){
        this.num1 = num1;
        this.num2 = num2;
    }

    suma(): number{
        return this.num1 + this.num2;
    }
    resta(): number{
        return this.num1 - this.num2;
    }
    multiplicacion(): number{
        return this.num1 * this.num2;
    }
    division(): number{
        return this.num1 / this.num2;
    }
    potencia(): number{
        return Math.pow(this.num1, this.num2);
    }
    factorial(): number{
        let fact: number = 1;
        for(let i = 1; i <= this.num1; i++){
            fact *= i;
        }
        return fact;
    }
}

let calc = new calculadora(5, 2);
console.log(`Suma: ${calc.suma()}`);
console.log(`Resta: ${calc.resta()}`);
console.log(`Multiplicacion: ${calc.multiplicacion()}`);
console.log(`Division: ${calc.division()}`);
console.log(`Potencia: ${calc.potencia()}`);
console.log(`Factorial solo del primer numero: ${calc.factorial()}`);