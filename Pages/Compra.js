debugger

const IVA = 1.21
function pedirDatos(){
    let valorDelProducto= parseFloat(prompt("Ingrese aqui el valor del producto deseado"))
    let cuotas = parseFloat(prompt("Elija la cantidad de cuotas /(2 , 4 , 6 , 8 , 10 , 12 /)"))
    const IVA = 1.21
   cotizar(valorDelProducto, cuotas, IVA)
   console.log(cotizar)
   if ((cuotas == 3)|| (cuotas == 5) || (cuotas == 7) || (cuotas == 9) || (cuotas == 11)){
    alert( "El producto seleccionado no cuenta con este plazo de cuotas , lo sentimos")
}
}

function cotizar( Parametro1, Parametro2, Parametro3){
    switch(Parametro2){
        case 2:
            confirm("Usted terminara pagando" + " " + Parametro1 / Parametro2 * Parametro3 + " " + "esta de acuerdo?")
            break
        case 4:
            confirm("Usted terminara pagando" + " " + Parametro1 / Parametro2 * Parametro3 + " " + "esta de acuerdo?")
            break
        case 6:
            confirm("Usted terminara pagando" + " " + Parametro1 / Parametro2 * Parametro3 + " " + "esta de acuerdo?")
            break
        case 8:
            confirm("Usted terminara pagando" + " " + Parametro1 / Parametro2 * Parametro3 + " " + "esta de acuerdo?")
            break
        case 10:
            confirm("Usted terminara pagando" + " " + Parametro1 / Parametro2 * Parametro3 + " " + "esta de acuerdo?")
            break
        case 12:
            confirm("Usted terminara pagando" + " " + Parametro1 / Parametro2 * Parametro3 + " " + "esta de acuerdo?")
               
    }
}

pedirDatos()

