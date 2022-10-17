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
const inputMonto4 = document.querySelector('.monto4');
const inputMonto5 = document.querySelector('.monto5');
const inputMonto6 = document.querySelector('.monto6');
const inputMonto7 = document.querySelector('.monto7');
const inputMonto8 = document.querySelector('.monto8');
const inputMonto9 = document.querySelector('.monto9');
const inputMonto10 = document.querySelector('.monto10');

const formulario = document.querySelector('.form');
const total = document.querySelector('.total')
const dolar = document.querySelector('.dolar');
const totaldolares = document.querySelector('.totaldolares')

const limpiarForm = document.querySelector('.limpiar');

let monto2;
let monto1;
let monto3;
let monto4;
let monto5;
let monto6;
let monto7;
let monto8;
let monto9;
let monto10;
let valorDolar

/* GUARDAR TODOS LOS ELEMENTOS EN UNA VARIABLE CON QUERYSELECTORALL LUEGO RECORRER CON UN FOR EACH Y OBTENER LOS VALORES INGRESANDO CON EL INDICE */

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

    if(inputMonto3.value){
        console.log(parseFloat(inputMonto3.value))
        monto3 = parseFloat(inputMonto3.value)
    }

    if(inputMonto4.value){
        console.log(parseFloat(inputMonto4.value))
        monto4 = parseFloat(inputMonto4.value)
    }

    if(inputMonto5.value){
        console.log(parseFloat(inputMonto5.value))
        monto5 = parseFloat(inputMonto5.value)
    }

    if(inputMonto6.value){
        console.log(parseFloat(inputMonto6.value))
        monto6 = parseFloat(inputMonto6.value)
    }

    if(inputMonto7.value){
        console.log(parseFloat(inputMonto7.value))
        monto7 = parseFloat(inputMonto7.value)
    }

    if(inputMonto8.value){
        console.log(parseFloat(inputMonto8.value))
        monto8 = parseFloat(inputMonto8.value)
    }

    if(inputMonto9.value){
        console.log(parseFloat(inputMonto9.value))
        monto9 = parseFloat(inputMonto9.value)
    }

    if(inputMonto10.value){
        console.log(parseFloat(inputMonto10.value))
        monto10 = parseFloat(inputMonto10.value)
    }


    if(dolar.value){
        console.log(parseFloat(dolar.value))
        valorDolar = parseFloat(dolar.value)
    }

    const suma = monto1 + monto2 + monto3 + monto4 + monto5 + monto6 + monto7 + monto8 + monto9 + monto10
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

