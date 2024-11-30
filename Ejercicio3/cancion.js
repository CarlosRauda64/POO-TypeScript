var cancion = /** @class */ (function () {
    function cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }
    cancion.prototype.getAutor = function () {
        return this.autor;
    };
    cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    cancion.prototype.mostrarCancion = function () {
        console.log("Titulo: ".concat(this.titulo));
        console.log("Genero: ".concat(this.genero));
        console.log("Autor: ".concat(this.autor));
    };
    return cancion;
}());
var can = new cancion('In The End', 'Rock');
can.setAutor('Linkin Park');
can.mostrarCancion();
