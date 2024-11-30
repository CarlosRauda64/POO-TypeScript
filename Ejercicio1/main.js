var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina() {
        this.titulo = "Esto es un titulo";
        this.color = "black";
        this.fuente = "Arial";
        this.alineacion = "center";
    }
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        var titulo = this.titulo;
        var color = this.color;
        var fuente = this.fuente;
        var alineacion = this.alineacion;
        return { titulo: titulo, color: color, fuente: fuente, alineacion: alineacion };
    };
    CabeceraPagina.prototype.establecerAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("Titulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineacion: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
var cabecera = new CabeceraPagina();
cabecera.imprimirPropiedades();
console.log('Se establece otra alineacion');
cabecera.establecerAlineacion('left');
cabecera.imprimirPropiedades();
