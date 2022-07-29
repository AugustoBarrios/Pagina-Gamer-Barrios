const URL = `/Pages/Juegos.json`
const DomContenido = document.getElementById("Contenido")

const CajaDeProductos = document.getElementById("Productos")
const TituloDeProducto = document.getElementById("TituloDeProducto")
const CantidadDeProducto = document.getElementById("CantidadDeProducto")
const PrecioDeProducto = document.getElementById("PrecioDeProducto")
const BotonParaAgregar = document.getElementById("NumDeId${idProducto}")
const Precios = document.getElementsByClassName("PrecioDeProducto").value
const TotalAPagar = document.getElementById("Total")
const Boton = document.getElementById(`Remover${Productos.idProducto}`)
let ArrayDePrecios = [];

const CreacionDeHTML = (Productos)=>{
    const { Titulo, Precio, Descripcion, Imagen, idProducto } = Productos
    return `<div class="card mb-1 mt-3 text-light bg-dark" style="border-radius: 10px;">
    <div class="row g-0">
        <div class="col-md-4 mt-5 d-flex justify-content-center">
            <img src="${Imagen}" class="img-fluid rounded-start ">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${Titulo}</h5>
                <h6>${Precio}</h6>
                <p class="card-text">${Descripcion}</p>
                <p class="card-text"><small class="text-muted">En Stock</small></p>
            </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-end pb-3 px-3">
            <button id="${idProducto}" onclick="AgregandoProducto(${idProducto})" class="btn btn-primary me-md-2" type="button">Agregar</button>
        </div>
    </div>
</div>`
}

const ProductosJSON = (URL)=> {
    let ProductoEnPantalla = ""
    fetch(URL)
        .then((Response) => Response.json())
        .then((data)=>  {
                for(Productos of data){
                    ProductoEnPantalla += CreacionDeHTML(Productos)
                    
                }
            DomContenido.innerHTML = ProductoEnPantalla
        })
        
}

ProductosJSON(URL)

const AgregandoProducto = (NumDeId) => {
    
    fetch(URL)
        .then((Response) => Response.json())
        .then((data) => {
            let Productos = data.find(Producto => {
                return Producto.idProducto == NumDeId
                
            });

            const Div = document.createElement("div");
            Div.innerHTML += `<div  class="Productos ImagenDeProducto"><img class="TamañoDeImagen" src="${Productos.Imagen}"></div>
                                    <div  class="Productos TituloDeProducto"><Strong>${Productos.Titulo}</Strong></div>
                                    <div  class="Productos CantidadDeProducto"><p>1</p></div>
                                    <div  class="Productos PrecioDeProducto" value="${Productos.Precio}"><Strong>$${Productos.Precio}</Strong></div>
                                    <div class="BotonDeRemover Productos"<button id="Remover${Productos.idProducto}" oneclick="RemoverObjeto()" type="button"><img class="ImagenDeRemover" src="/asetss/trash3.svg" alt=""></button></div>`
            CajaDeProductos.appendChild(Div);
            ArrayDePrecios.push(Productos.Precio);
            let Sumador = 0;
            for(let i =0; i < ArrayDePrecios.length; i++){
                Sumador += ArrayDePrecios[i]
            }
            TotalAPagar.innerHTML = `<p id="AdornadoDelTotal"><Strong>Total: $${Sumador}</Strong></p></div>`
            AvisoDeAgregado(Productos.Titulo)
        })
        
}

const RemoverObjeto = ()=>{
    CajaDeProductos.removeChild(Div);
    AvisoDeRemovido()}/* El boton para eliminar tiene una falla */

const AvisoDeAgregado = (Producto)=>{
    swal.fire({
        text: `Se agrego ${Producto} al carrito.`,
        timer:1500,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        color:"Black",
        background: "forestgreen",
    })
}  

const AvisoDeRemovido = (Producto)=>{
    swal.fire({
        text: `Se elimino ${Producto} del carrito.`,
        timer:1500,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        color:"Black",
        background: "#c00000",
    })
}     




/* Constructor */

/* class Videojuegos{
    constructor(Nombre, Precio, Stock){
        this.Nombre = Nombre
        this.Precio = Precio
        this.Stock = Stock
        this.Id =  
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
console.log(Explorador) */