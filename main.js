alert("cuantas cartas quieres que haya en la mesa")
let cartas = prompt("repartire una a una cuantas quieras, dime un numero")

if(cartas>52){
    alert("hay solo 52 cartas en la baraja de poker")
}
if (cartas <=52){
    alert("ok entonces repartire " + cartas + " cartas en la mesa");
    for( i=0 ; i != cartas ; i++){
        alert(i+1)
        
    }
    alert("de todas esas cartas elige una")
}



// alert("llegaremos a cero")
// alert("desde que numero quieres volver");
// let numero = prompt ("ingrese un numero entre 1 y 9");

// if (numero > 9){
//     alert("ingresaste mal el numero sonso, es del 1 al 9")
// }

// if (numero <= 9){
//     alert("cuenta regresiva")
//     for(i = numero ; i > 0 ; i--){
        
//         alert (i);   
//     } 
//     alert("bien echo!!!")
// }
