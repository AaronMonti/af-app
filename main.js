//Crear app que reciba varios valores numericos ingresados por el usuario, los sume y despues el total lo multiplique por el valor del colar ingresado por el usuario

/* function dolarizacion() {
    var dolar = prompt("Ingrese el valor del dolar")
    console.log("Dolar: " + dolar + " US$")
    var montos;
    var sumaMontos = parseFloat(0);
    
    var totaldolares;
    
    for(let i = 0; i < 3; i++){
        montos = parseFloat(prompt("Ingresa un monto:"))
    
        sumaMontos = sumaMontos + montos;
        console.log(sumaMontos)
    }
    
    totaldolares = parseFloat(sumaMontos / dolar)
    console.log("En total son: " + totaldolares + " US$")
    return 0;
} */

const inputMontos = document.querySelectorAll('.monto')

const formulario = document.querySelector('.form');
const total = document.querySelector('.total')
const dolar = document.querySelector('.dolar');
const totaldolares = document.querySelector('.totaldolares')

const limpiarForm = document.querySelector('.limpiar');

let monto = 0;
let valorDolar;

formulario.addEventListener('submit', e => {
    e.preventDefault();


    inputMontos.forEach(inputMonto => {
        if(inputMonto.value){
            monto = monto + parseFloat(inputMonto.value)
        }
    });

    if(dolar.value){
        valorDolar = parseFloat(dolar.value)
    }

    const conversion = parseFloat((monto * valorDolar).toFixed(2))

    total.innerHTML += " " + monto

    totaldolares.innerHTML += " " + conversion
})

limpiarForm.addEventListener('submit', e => {
    e.preventDefault()

    monto = 0;

    total.innerHTML = "Total en $US:";
    totaldolares.innerHTML = "Total en pesos:";

})

