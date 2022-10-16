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

const inputMonto1 = document.querySelector('.monto1');
const inputMonto2 = document.querySelector('.monto2');
const inputMonto3 = document.querySelector('.monto3');
const formulario = document.querySelector('.form');
const total = document.querySelector('.total')
const dolar = document.querySelector('.dolar');
const totaldolares = document.querySelector('.totaldolares')

const limpiarForm = document.querySelector('.limpiar');

let monto2;
let monto1;
let valorDolar



formulario.addEventListener('submit', e => {
    e.preventDefault();


    if(inputMonto1.value){
        console.log(parseFloat(inputMonto1.value))
        monto1 = parseFloat(inputMonto1.value)
    }

    if(inputMonto2.value){
        console.log(parseFloat(inputMonto2.value))
        monto2 = parseFloat(inputMonto2.value)
    }

    if(dolar.value){
        console.log(parseFloat(dolar.value))
        valorDolar = parseFloat(dolar.value)
    }

    const suma = monto1 + monto2
    const conversion = parseFloat((suma / valorDolar).toFixed(2))
    console.log(suma)

    

    total.innerHTML += " " + suma

    totaldolares.innerHTML += " " + conversion
})

limpiarForm.addEventListener('submit', e => {
    e.preventDefault()

    total.innerHTML = "Total:";
    totaldolares.innerHTML = "Total en $US:";

})

