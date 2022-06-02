debugger

let Nombre = prompt("Ingrese su nombre")
let Apellido = prompt("Ingrese su/s apellido/s")

if (((Nombre!="") && (Apellido!="")) || (Nombre=="Augusto")){
    alert( "Bienvenido" + " " + Apellido + " " + Nombre)
} else if (Nombre===""){
    alert("Los datos ingresados no son validos , intenta de nuevo") 

}

let limiteDeTiempo = parseFloat(prompt("Ingrese un numero"))

for (let i = 1; i == limiteDeTiempo; i++){
    console.log(i)
}