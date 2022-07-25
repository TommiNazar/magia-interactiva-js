
let juegos = prompt("que juego de magia querias ver...... 1, 2, 3, 4")

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

    case "4":
        adivinacion_tablas();
        break;

}
//------------uso de arrays---------------------
function adivinacion_tablas (){

    tabla1 = [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30]
    tabla2 = [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30]
    tabla3 = [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30]
    tabla4 = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]
    tabla5 = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

    alert ("para el siguiente juego de magia piensa un numero entre 1 y 30")
    alert ( "perfecto ahora te mostrare una lista de numeros si tu numero esta entre ellos escribe si, en caso contrario escribe no")
    cuadro1 = prompt (tabla1)

    if (cuadro1 == "si"){
        resultado1 = tabla1[0]
    }else{
        resultado1 = 0
    }

    alert("muy bien dime ahora si esta en esta lista")
    cuadro2 = prompt(tabla2)
    if (cuadro2 == "si"){
        resultado2 = tabla2[0]
    }else{
        resultado2 = 0
    }
    alert("muy bien dime ahora si esta en esta lista")
    cuadro3 = prompt(tabla3)
    if (cuadro3 == "si"){
        resultado3 = tabla3[0]
    }else{
        resultado3 = 0
    }
    alert("muy bien dime ahora si esta en esta lista")
    cuadro4 = prompt(tabla4)
    if (cuadro4 == "si"){
        resultado4 = tabla4[0]
    }else{
        resultado4 = 0
    }
    alert("muy bien dime ahora si esta en esta lista")
    cuadro5 = prompt(tabla5)
    if (cuadro5 == "si"){
        resultado5 = tabla5[0]
    }else{
        resultado5 = 0
    }

    alert("perfecto ya se cual es tu numero pensado")

    let resultado = resultado1 + resultado2 + resultado3 + resultado4 + resultado5

    alert("tu numero es " + resultado)

}

//----------------uso de condicionales-------------
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
//--------------------uso de objetos-------------
function cartas_adivinada (){
    function carta (valor, palo){
        this.valor = valor
        this.palo = palo
    }

    alert("de las cartas en la mesa enfocate en una sola")
//--------la idea es q tengan las imagenes de las cartas de poker-----------
    const carta1 = new carta (9,"D")
    const carta2 = new carta (9,"T")
    const carta3 = new carta (8,"C")
    const carta4 = new carta (8,"P")
    const carta5 = new carta (10,"D")
    const carta6 = new carta (10,"P")
    
    alert (carta4.valor + carta4.palo +" "+ carta5.valor + carta5.palo+" "+ carta1.valor + carta1.palo+" "+ carta3.valor + carta3.palo+" "+ carta2.valor + carta2.palo+" "+ carta6.valor + carta6.palo)

    alert("perfecto lo que hare va a ser sacar solo tu carta elegida")
    const carta7 = new carta (9,"C")
    const carta8 = new carta (9,"P")
    const carta9 = new carta (8,"D")
    const carta10 = new carta (8,"T")
    const carta11 = new carta (10,"P")

    alert("tu carta a desaparecido fijate que es la unica q no esta")
    alert (carta9.valor + carta9.palo +" "+ carta11.valor + carta11.palo+" "+ carta7.valor + carta7.palo+" "+ carta10.valor + carta10.palo+" "+ carta8.valor + carta8.palo)
}

//------------------uso de ciclo for--------------
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
    
    let valor = prompt (parseInt("perfecto escribe tu resultado"))

    alert (valor)

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
