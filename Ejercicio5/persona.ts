abstract class Persona{
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    mayorEdad(): void{
        if(this.edad >= 18){
            console.log('Es mayor de edad');
        }
        else{
            console.log('Es menor de edad');
        }
    }

    abstract mostrarInformacion(): void;
}

class Empleado extends Persona{
    private salario: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, salario: number){
        super(nombre, apellido, direccion, telefono, edad);
        this.salario = salario;
    }

    cargarSueldo(salario: number): void{
        this.salario = salario;
    }

    imprimirSueldo(): void{
        console.log(`Salario: $${this.salario}`);
    }

    mostrarInformacion(): void{
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Direccion: ${this.direccion}`);
        console.log(`Telefono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Salario: $${this.salario}`);
    }
}

let empleado1 = new Empleado('Juan', 'Colono', 'Calle 1', '12357888', 20, 1000);
empleado1.mostrarInformacion();
empleado1.imprimirSueldo();
empleado1.mayorEdad();
empleado1.cargarSueldo(2000);
empleado1.imprimirSueldo();
empleado1.mostrarInformacion();