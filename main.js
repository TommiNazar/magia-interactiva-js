
let juegos = prompt("que juego de magia querias ver...... 1, 2, 3")

switch(juegos){

    case "1":
        adivinacion_numero ();
    break;

    case "2":
        cartas_adivinada ();
        break;
    
    case "3":
        carta_pensada ();
        break;

}


function adivinacion_numero (){
    alert("te mostrare un numero de magia")
    let numero = prompt("dime un numero entre 1 y 9")
    
    if(numero >9 || numero == 0) {
        alert("debe ser un numero menor a 9 que no sea el cero")
    }
    
    if (numero <= 9){
        alert("multiplica ese numero por 9")
        alert("perfecto ahora te pedire que sumes los digitos de ese numero")
        alert("ahora sumale 7")
        alert("dividelo en dos")
        alert("tu numero es.....")
        alert("8")
    }
}

function cartas_adivinada (){
    alert("de las cartas en la mesa enfocate en una sola")
    alert("perfecto lo que hare va a ser sacar solo tu carta elegida")
    alert("tu carta a desaparecido")
}

function carta_pensada (){
    
    alert("cuantas cartas quieres que haya en la mesa")
    let cartas = prompt("repartire una a una cuantas quieras")
    
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
    
    
    
    alert ("perfecto ahora a esa carta elegida o pensada multiplicala por 2")
    alert("despues sumale 1")
    alert("multiplica ese resultado por 5")
    alert("a continuacion al resultado que obtenga, sume segun el caso .....1) +6 si es de trebol....2) +7 si es de corazon....3) +8 si es de picas....4) +9 si es de diamantes")
    
    let valor = prompt("perfecto escribe tu resultado")

    alert("perfecto tu carta es...")
    // let numsArr = Array.from(String(valor), Number)

// console.log(numsArr)
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
