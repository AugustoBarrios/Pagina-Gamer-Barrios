 /* debugger  */

/*const IVA = 1.21
function pedirDatos(){
    let valorDelProducto= parseFloat(prompt("Ingrese aqui el valor del producto deseado"))
    let cuotas = parseFloat(prompt("Elija la cantidad de cuotas /(2 , 4 , 6 , 8 , 10 , 12 /)"))
    IVA 
   cotizar(valorDelProducto, cuotas, IVA)
   console.log(cotizar)
   if ((cuotas == 3)|| (cuotas == 5) || (cuotas == 7) || (cuotas == 9) || (cuotas == 11)){
    alert( "El producto seleccionado no cuenta con este plazo de cuotas , lo sentimos")
}
}*/

function cotizar( Parametro1, Parametro2, Parametro3){
    switch(Parametro2){
        case 2:
            ( "$ARS " +  Parametro1 / Parametro2 * Parametro3  * 1.03)
            break
        case 4:
            ( "$ARS " + Parametro1 / Parametro2 * Parametro3 * 1.06)
            break
        case 6:
            console.log( "$ARS " + Parametro1 / Parametro2 * Parametro3 * 1.09)
            break
        case 8:
            console.log( "$ARS " + Parametro1 / Parametro2 * Parametro3 * 1.12)
            break
        case 10:
            console.log( "$ARS " + Parametro1 / Parametro2 * Parametro3 * 1.15)
            break
        case 12:
            console.log( "$ARS " + Parametro1 / Parametro2 * Parametro3 * 1.18)
               
    }
}

/* pedirDatos() */

function TomarDatos(){
    let Nombres = document.getElementById("Nombre").value;
    let Apellidos = document.getElementById("Apellido").value;
    let Emails = document.getElementById("Email").value;
    let Telefonos = document.getElementById("Telefono").value;
    let Paises = document.getElementById("Pais").value;
    let Provincias = document.getElementById("Provincia").value;
    let Postales = document.getElementById("Postal").value;
    let Tarjetas = document.getElementById("Tarjeta").value;
    let Codigos = document.getElementById("Codigo").value;
    let Vencimientos = document.getElementById("Vencimiento").value;
    
    function Venta(Apellido, Nombre, Email, Telefono, pais, Provincia, postal,){
        this.Apellido=Apellido
        this.Nombre=Nombre
        this.Email=Email
        this.Telefono=Telefono
        this.pais=pais
        this.Provincia=Provincia
        this.postal=postal
        this.Tarjeta= "Informacion Oculta"
        this.codigo= "Informacion Oculta"
        this.Vencimiento= "Informacion Oculta"
    }
    let Ventas= new Venta(Apellidos, Nombres, Emails, Telefonos, Paises, Provincias, Postales, "Informacion Oculta", "Informacion Oculta", "Informacion Oculta");
    console.log(Ventas)
}

function TomarCuota(){
    const precio = 50000
    let cuotas = parseInt( document.getElementById("Selecion").value)
    const IVA = 1.21
    console.log (cotizar(precio, cuotas, IVA));
    
    let precios = document.getElementById("Precio")
    precios.innerText = cotizar()
    
     
}



