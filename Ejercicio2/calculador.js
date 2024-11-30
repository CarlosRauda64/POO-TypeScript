var calculadora = /** @class */ (function () {
    function calculadora(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    calculadora.prototype.suma = function () {
        return this.num1 + this.num2;
    };
    calculadora.prototype.resta = function () {
        return this.num1 - this.num2;
    };
    calculadora.prototype.multiplicacion = function () {
        return this.num1 * this.num2;
    };
    calculadora.prototype.division = function () {
        return this.num1 / this.num2;
    };
    calculadora.prototype.potencia = function () {
        return Math.pow(this.num1, this.num2);
    };
    calculadora.prototype.factorial = function () {
        var fact = 1;
        for (var i = 1; i <= this.num1; i++) {
            fact *= i;
        }
        return fact;
    };
    return calculadora;
}());
var calc = new calculadora(5, 2);
console.log("Suma: ".concat(calc.suma()));
console.log("Resta: ".concat(calc.resta()));
console.log("Multiplicacion: ".concat(calc.multiplicacion()));
console.log("Division: ".concat(calc.division()));
console.log("Potencia: ".concat(calc.potencia()));
console.log("Factorial solo del primer numero: ".concat(calc.factorial()));
