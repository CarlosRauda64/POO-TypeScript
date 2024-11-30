class CabeceraPagina{
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;
 
    constructor(){
        this.titulo = "Esto es un titulo";
        this.color = "black";
        this.fuente = "Arial";
        this.alineacion = "center";
    }

    obtenerPropiedades(){
        let titulo:string = this.titulo;
        let color:string = this.color;
        let fuente:string = this.fuente;
        let alineacion:string = this.alineacion;
        return {titulo, color, fuente, alineacion};
    }

    establecerAlineacion(alineacion:string){
        this.alineacion = alineacion;
    }

    imprimirPropiedades():void{
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineacion: ${this.alineacion}`);
    }
}

let cabecera = new CabeceraPagina();
cabecera.imprimirPropiedades();
console.log('Se establece otra alineacion');
cabecera.establecerAlineacion('left');
cabecera.imprimirPropiedades();
