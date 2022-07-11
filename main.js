
alert("llegaremos a cero")
alert("desde que numero quieres volver");
let numero = prompt ("ingrese un numero entre 1 y 9");

if (numero > 9){
    alert("ingresaste mal el numero sonso, es del 1 al 9")
}

if (numero <= 9){
    alert("cuenta regresiva")
    for(i = numero ; i > 0 ; i--){
        
        alert (i);   
    } 
    alert("bien echo!!!")
}




// if (texto == "tomas"){
//     alert ( "tu nombre es tomas");
// }else{
//     alert ("lindo nombre")
// }