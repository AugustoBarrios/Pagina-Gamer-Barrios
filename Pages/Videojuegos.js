
class Videojuegos{
    constructor(Nombre, Precio, Stock){
        this.Nombre = Nombre
        this.Precio = Precio
        this.Stock = Stock
        this.Id = Math.random() 
    }
    CalcularIVA() {
        let Iva = this.Precio = this.Precio * 1.21
        console.log(Iva)
    }

    Mensaje() {
        let Iva = this.Precio = this.Precio * 1.21
        console.log("El precio final de " + this.Nombre + " es igual a " + Iva )
    }
}

const Juego1 = new Videojuegos ("Call Of Duty", 50000, 12);
const Juego2 = new Videojuegos ("Elden Ring", 50000, 60);
const Juego3 = new Videojuegos ("Minecraft", 50000, 57);

const Explorador = [Juego1, Juego2, Juego3]
console.log(Explorador)