class cuenta{
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numCuenta: number;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numCuenta: number){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numCuenta = numCuenta;
    }

    depositar(cantidad: number): void{
        if(cantidad < 5){
            console.log('Valor a depositar debe ser mayor o igual $5.00');
        }
        else if(cantidad < 0){
            console.log('Valor a depositar debe ser positivo');
        }
        else{
            console.log('Se ha depositado $' + cantidad + ' a la cuenta');
            this.cantidad += cantidad;
        }
    }

    retirar(cantidad: number): void{
        if (cantidad == 0){
            console.log('No se puede retirar $0.00 de la cuenta');
        }
        else if(cantidad < 0){
            console.log('Valor a retirar debe ser positivo');
        }
        else if(cantidad > this.cantidad){
            console.log('No se puede retirar esa cantidad, saldo insuficiente');
        }
        else{
            console.log('Se ha retirado $' + cantidad + ' de la cuenta');
            this.cantidad -= cantidad;
        }
    }

    mostrarCuenta(): void{
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Cantidad: $${this.cantidad}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Numero de cuenta: ${this.numCuenta}`);
    }
}

let cuenta1 = new cuenta('Juan Perez', 1000, 'Ahorros', 123456789);
cuenta1.mostrarCuenta();
cuenta1.depositar(1);
cuenta1.depositar(5);
cuenta1.depositar(10);
cuenta1.retirar(0);
cuenta1.retirar(5);
cuenta1.retirar(100);
cuenta1.mostrarCuenta();