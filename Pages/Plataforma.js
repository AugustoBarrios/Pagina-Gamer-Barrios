const URL = `/Pages/Plataformas.json`
const DomContenido = document.getElementById("Contenido")
const EstructuraCarrito = document.getElementById("ProductosEnCarrito")

const CajaDeProductos = document.getElementById("Productos")
const TituloDeProducto = document.getElementById("TituloDeProducto")
const CantidadDeProducto = document.getElementById("CantidadDeProducto")
const PrecioDeProducto = document.getElementById("PrecioDeProducto")
const BotonParaAgregar = document.getElementById("NumDeId${idProducto}")



const CreacionDeHTML = (Productos)=>{
    const {Titulo, Precio, Descripcion, Imagen, idProducto} = Productos
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
            <button id="${idProducto}" onclick="AgregandoProducto()" class="btn btn-primary me-md-2" type="button">Comprar</button>
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

let NumDeId = document.getElementById(`${idProducto}`)

const AgregandoProducto = (NumDeId)=>{ 

    const Div1 = document.createElement("Div");
    const Div2 = document.createElement("Div");
    const Div3 = document.createElement("Div");
    const Div4 = document.createElement("div");
    Div1.classList = "Productos ImagenDeProducto";
    Div2.classList = "Productos TituloDeProducto";
    Div3.classList = "Productos CantidadDeProducto";
    Div4.classList = "Productos PrecioDeProducto";
    CajaDeProductos.appendChild(Div1);
    CajaDeProductos.appendChild(Div2);
    CajaDeProductos.appendChild(Div3);
    CajaDeProductos.appendChild(Div4);


    fetch(URL)
        .then((Response) => Response.json())
        .then((data)=>  {
            
            let Productos = data.find( Producto=>{
               return Producto.idProducto == NumDeId });
                 console.log(Productos)
        })


}

/* Hola profe el problema es como le dije antes donde dice "producto.idproducto ==" lo que yo pensaba hacer desde un principio
es agregarle a la funcion "AgregandoProducto" un parametro el cual estuviera vinculado a otra variable que tuviera que estuviera 
vinculado a la id del producto ,se que es confuso se lo mando como yo lo habia pensado asi usted ve encuentra el error jsj */


    



