var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    Persona.prototype.mayorEdad = function () {
        if (this.edad >= 18) {
            console.log('Es mayor de edad');
        }
        else {
            console.log('Es menor de edad');
        }
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, direccion, telefono, edad, salario) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.salario = salario;
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (salario) {
        this.salario = salario;
    };
    Empleado.prototype.imprimirSueldo = function () {
        console.log("Salario: $".concat(this.salario));
    };
    Empleado.prototype.mostrarInformacion = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Apellido: ".concat(this.apellido));
        console.log("Direccion: ".concat(this.direccion));
        console.log("Telefono: ".concat(this.telefono));
        console.log("Edad: ".concat(this.edad));
        console.log("Salario: $".concat(this.salario));
    };
    return Empleado;
}(Persona));
var empleado1 = new Empleado('Juan', 'Colono', 'Calle 1', '12357888', 20, 1000);
empleado1.mostrarInformacion();
empleado1.imprimirSueldo();
empleado1.mayorEdad();
empleado1.cargarSueldo(2000);
empleado1.imprimirSueldo();
empleado1.mostrarInformacion();
