class cancion{
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string){
        this.titulo = titulo;
        this.genero = genero;
    }

    getAutor(): string{
        return this.autor;
    }
    setAutor(autor: string): void{
        this.autor = autor;
    }

    mostrarCancion(): void{
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}

let can = new cancion('In The End', 'Rock');
can.setAutor('Linkin Park');
can.mostrarCancion();