
/*----------------pagina principal------------*/


    if(localStorage != null){
        const espectador1 = prompt("Cual es tu Nombre");
        localStorage.setItem ("espectador" , espectador1 );
        const espectador = localStorage.getItem ("espectador");
    }
    const espectador = localStorage.getItem ("espectador");
    
    presentacion ()
    index ()


    function presentacion(){
    
        Swal.fire({
            title: 'Preparate Para Vivir una Experiencia Magica ' + espectador,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                },
            })
                
}




function index (){
    const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
    contenedorJuegos.innerHTM = "";
    contenedorJuegos.innerHTML=`
    <div class="index">
    <h1 class="h1index">Show de Magia Virtual</h1>
    <h2 class="h2index">Bienvenido ${espectador}</h2>
        <h2 class="h2index">Elige un Juego</h2>
        <div class="botonesIndex">
        <button id="primerJuego" class ="botonIndex">Primer Juego</button>
        <button id="segundoJuego" class ="botonIndex">Segundo Juego</button>
        <button id="terceroJuego" class ="botonIndex">Tercer Juego</button>
        <button id="cuartoJuego" class ="botonIndex">Cuarto Juego</button>
        </div>
        
    </div>
    `;

    const juego1 = document.getElementById(`primerJuego`)
    juego1.addEventListener(`click`, () =>{
    mostrarcartas1(cartas1);
    });

    const juego2 = document.getElementById(`segundoJuego`)
    juego2.addEventListener(`click`, () =>{
    adivinacion_numero ();
    });

    const juego3 = document.getElementById(`terceroJuego`)
    juego3.addEventListener(`click`, () =>{
    adivinacion_carta ();
    });

}



/*-----------------------------fin pag principal-------------------------*/

/*----------------------juego 1 cartas---------------*/



class carta {
    constructor (titulo,imagen) {
        this.titulo = titulo;
        this.imagen = imagen;
    }
    
}

const carta1 = new carta ("8D","./img/8d.png")
const carta2 = new carta ("9C","./img/9c.png")
const carta3 = new carta ("9T","./img/9t.png")
const carta4 = new carta ("10D","./img/10d.png")
const carta5 = new carta ("10P","./img/10p.png")
const carta10 = new carta ("8DI","./img/8diam.png")
console.log(carta3)

const cartas1 = [carta1,carta4,carta3,carta2,carta5, carta10]

// cartas1.push(carta1);
// cartas1.push(carta2);
// cartas1.push(carta3);
// cartas1.push(carta4);
// cartas1.push(carta5);

console.log(cartas1)



const carta6 = new carta ("8T","./img/8t.png")
const carta7 = new carta ("9D","./img/9d.png")
const carta8 = new carta ("10C","./img/10c.png")
const carta9 = new carta ("10T","./img/10t.png")
const carta11 = new carta ("8C","./img/8c.png")

const cartas2 = []

cartas2.push(carta8);
cartas2.push(carta7);
cartas2.push(carta6);
cartas2.push(carta9);
cartas2.push(carta11);

console.log(cartas2)

function mostrarcartas1 (cartas){

    const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
    contenedorJuegos.innerHTM = "";
    contenedorJuegos.innerHTML=`
    <h2>Listo Para Jugar...</h2>`

    const texto1 = document.createElement("div");
    texto1.innerHTML = "<h2>Recuerda una Carta</h2>";
    texto1.classList.add("texto1");
    contenedorJuegos.appendChild(texto1);

    for (const carta of cartas){
        const divCartas = document.createElement("div");
        divCartas.classList.add("carta");

        divCartas.innerHTML = `
        <img src= " ${carta.imagen}" alt="${carta.titulo}">`;

        contenedorJuegos.appendChild(divCartas);
    }
    const boton_contenedor = document.createElement("div")
    boton_contenedor.classList.add("boton_contenedor")
    const boton_siguiente = document.createElement("button");
    boton_siguiente.innerText = "siguiente";
    boton_siguiente.classList.add("boton1")
    

    boton_siguiente.addEventListener("click", limpiar);
    contenedorJuegos.appendChild(boton_contenedor);
    boton_contenedor.appendChild(boton_siguiente);

    

    // cartas.forEach ( carta => {
    //     const divCartas = document.createElement("div");
    //     divCartas.classList.add("carta");

    //     divCartas.innerHTML = `
    //     <img src= "${carta.imagen}" alt="${carta.titulo}">`;

    //     contenedorJuegos.appendChild(divCartas);
    // });
}

function limpiar(){
    const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
    contenedorJuegos.innerHTM = "";

    contenedorJuegos.innerHTML=`
    <h2>Sacare la Carta que Estas Pensando</h2>
    <div id="contenedor_boton"></div>`    
    const contenedor_boton = document.getElementById("contenedor_boton");
    const boton_siguiente2 = document.createElement("button");
    boton_siguiente2.innerText = "siguiente";
    boton_siguiente2.classList.add("boton2")
    boton_siguiente2.addEventListener("click", () =>{
        mostrarcartas2(cartas2);
    });
    
    contenedor_boton.appendChild(boton_siguiente2);
}

function mostrarcartas2 (cartas){

    const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
    contenedorJuegos.innerHTM = "";

    contenedorJuegos.innerHTML=`
    <h2>Ahora Tu Carta Ya No esta</h2>`

    for (const carta of cartas){
        const divCartas = document.createElement("div");
        divCartas.classList.add("carta");

        divCartas.innerHTML = `
        <img src= " ${carta.imagen}" alt="${carta.titulo}">`;

        contenedorJuegos.appendChild(divCartas);
    }

    principio();
    
}

function principio (){
    const boton_contenedor = document.createElement("div")
    boton_contenedor.classList.add("boton_contenedor")

    const boton_volver = document.createElement("button");
    boton_volver.innerText = "volver al menu";
    boton_volver.classList.add("botonvolver")
    boton_volver.addEventListener("click", () =>{
        index();
    });
    
    document.getElementById ("contenedor_juegos_cartas").appendChild(boton_contenedor);
    boton_contenedor.appendChild(boton_volver)
}



/*-------------------------------fin juego1 -------------------------*/

/*---------------------------juego 2--------------------*/


class tabla {
    constructor (titulo,imagen) {
        this.titulo = titulo;
        this.imagen = imagen;
    }
    
}

const tabla1 = new tabla ("tabla1","./img/tabla1.jpg")
const tabla2 = new tabla ("tabla2","./img/tabla2.jpg")
const tabla3 = new tabla ("tabla3","./img/tabla3.jpg")
const tabla4 = new tabla ("tabla4","./img/tabla4.jpg")
const tabla5 = new tabla ("tabla5","./img/tabla5.jpg")

const tablas = []

tablas.push(tabla1);
tablas.push(tabla2);
tablas.push(tabla3);
tablas.push(tabla4);
tablas.push(tabla5);

console.log(tablas)

function adivinacion_numero (){
    const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
    contenedorJuegos.innerHTM = "";

    contenedorJuegos.innerHTML=`
    <h2>piensa un numero menor a 30</h2>`    

    const boton_siguiente3 = document.createElement("button");
    boton_siguiente3.innerText = "siguiente";
    boton_siguiente3.classList.add("boton2")
    boton_siguiente3.addEventListener("click", () =>{
        mostrartablas1 ();
    });
    contenedorJuegos.appendChild(boton_siguiente3);
}

function mostrartablas1 (tablas){
        const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
        contenedorJuegos.innerHTM = "";
    
        contenedorJuegos.innerHTML=`
        <h2>esta tu numero entre estos</h2>` 
        const divTablas = document.createElement("div");
        divTablas.classList.add("tabla");

        divTablas.innerHTML = `
        <img src= " ${tabla1.imagen}" alt="${tabla1.titulo}">`;

        contenedorJuegos.appendChild(divTablas);
        
        const boton_si1 = document.createElement("button");
        boton_si1.innerText = "si";
        boton_si1.classList.add("boton2")
        boton_si1.addEventListener("click", () =>{
            
            const resultado1 = 8;
            mostrartablas2 (tablas, resultado1);
            console.log(resultado1);
            
            return resultado1;
        });
    
        const boton_no1 = document.createElement("button");
        boton_no1.innerText = "no";
        boton_no1.classList.add("boton2")
        boton_no1.addEventListener("click", () =>{
            const resultado1 = 0;
            mostrartablas2(tablas, resultado1);
            console.log(resultado1);
            
            return resultado1;
        });
        
        contenedorJuegos.appendChild(boton_si1);
        contenedorJuegos.appendChild(boton_no1);
        
    }

    function mostrartablas2 (tablas, resultado1){
        const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
        contenedorJuegos.innerHTM = "";
    
        contenedorJuegos.innerHTML=`
        <h2>esta tu numero entre estos</h2>` 
        const divTablas = document.createElement("div");
        divTablas.classList.add("tabla");

        divTablas.innerHTML = `
        <img src= " ${tabla2.imagen}" alt="${tabla2.titulo}">`;

        contenedorJuegos.appendChild(divTablas);
        
        const boton_si2 = document.createElement("button");
        boton_si2.innerText = "si";
        boton_si2.classList.add("boton2")
        boton_si2.addEventListener("click", () =>{
            
            const resultado2 = 2;
            mostrartablas3 (tablas,resultado1, resultado2);
            console.log(resultado1, resultado2);
            
            return resultado2;
        });
    
        const boton_no2 = document.createElement("button");
        boton_no2.innerText = "no";
        boton_no2.classList.add("boton2")
        boton_no2.addEventListener("click", () =>{
            const resultado2 = 0;
            mostrartablas3(tablas,resultado1, resultado2);
            console.log(resultado1, resultado2);
            
            return resultado2;
        });
        
        contenedorJuegos.appendChild(boton_si2);
        contenedorJuegos.appendChild(boton_no2);
        
    }

    function mostrartablas3 (tablas,resultado1, resultado2){
        const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
        contenedorJuegos.innerHTM = "";
    
        contenedorJuegos.innerHTML=`
        <h2>esta tu numero entre estos</h2>` 
        const divTablas = document.createElement("div");
        divTablas.classList.add("tabla");

        divTablas.innerHTML = `
        <img src= " ${tabla3.imagen}" alt="${tabla3.titulo}">`;

        contenedorJuegos.appendChild(divTablas);
        
        const boton_si3 = document.createElement("button");
        boton_si3.innerText = "si";
        boton_si3.classList.add("boton2")
        boton_si3.addEventListener("click", () =>{
            
            const resultado3 = 4;
            mostrartablas4 (tablas,resultado1, resultado2,resultado3);
            
            console.log(resultado1, resultado2, resultado3);
            return resultado3;
        });
    
        const boton_no3 = document.createElement("button");
        boton_no3.innerText = "no";
        boton_no3.classList.add("boton2")
        boton_no3.addEventListener("click", () =>{
            const resultado3 = 0;
            mostrartablas4(tablas,resultado1, resultado2,resultado3);
            
            console.log(resultado1, resultado2,resultado3);
            return resultado3;
        });
        
        contenedorJuegos.appendChild(boton_si3);
        contenedorJuegos.appendChild(boton_no3);
        
    }

    function mostrartablas4(tablas,resultado1, resultado2,resultado3){
        const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
        contenedorJuegos.innerHTM = "";
    
        contenedorJuegos.innerHTML=`
        <h2>esta tu numero entre estos</h2>` 
        const divTablas = document.createElement("div");
        divTablas.classList.add("tabla");

        divTablas.innerHTML = `
        <img src= " ${tabla4.imagen}" alt="${tabla4.titulo}">`;

        contenedorJuegos.appendChild(divTablas);
        
        const boton_si4 = document.createElement("button");
        boton_si4.innerText = "si";
        boton_si4.classList.add("boton2")
        boton_si4.addEventListener("click", () =>{
            
            const resultado4 = 1;
            console.log(resultado1, resultado2,resultado3,resultado4);
            
            mostrartablas5 (tablas,resultado1, resultado2,resultado3,resultado4);
            return resultado4;
            
            
        });
    
        const boton_no4 = document.createElement("button");
        boton_no4.innerText = "no";
        boton_no4.classList.add("boton2")
        boton_no4.addEventListener("click", () =>{
            const resultado4 = 0;
            mostrartablas5(tablas,resultado1, resultado2,resultado3,resultado4);
            
            console.log(resultado1, resultado2,resultado3,resultado4);
            return resultado4;
        });
        
        contenedorJuegos.appendChild(boton_si4);
        contenedorJuegos.appendChild(boton_no4);
        
    }

    function mostrartablas5(tablas,resultado1, resultado2,resultado3,resultado4){
        const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
        contenedorJuegos.innerHTM = "";
    
        contenedorJuegos.innerHTML=`
        <h2>esta tu numero entre estos</h2>` 
        const divTablas = document.createElement("div");
        divTablas.classList.add("tabla");

        divTablas.innerHTML = `
        <img src= " ${tabla5.imagen}" alt="${tabla5.titulo}">`;

        contenedorJuegos.appendChild(divTablas);
        
        const boton_si5 = document.createElement("button");
        boton_si5.innerText = "si";
        boton_si5.classList.add("boton2")
        boton_si5.addEventListener("click", () =>{
            
            const resultado5 = 16;
            resultadosTotal (resultado1, resultado2,resultado3,resultado4,resultado5);
            console.log(resultado1, resultado2,resultado3,resultado4,resultado5);
            return resultado5;
            
            
        });
    
        const boton_no5 = document.createElement("button");
        boton_no5.innerText = "no";
        boton_no5.classList.add("boton2")
        boton_no5.addEventListener("click", () =>{
            const resultado5 = 0;
            console.log(resultado1, resultado2,resultado3,resultado4,resultado5);
            resultadosTotal (resultado1, resultado2,resultado3,resultado4,resultado5);
            return resultado5;
            
            
        });
        
        contenedorJuegos.appendChild(boton_si5);
        contenedorJuegos.appendChild(boton_no5);
        

    }

    function resultadosTotal (resultado1, resultado2,resultado3,resultado4,resultado5){

        const resultado = resultado1 + resultado2 + resultado3 + resultado4 + resultado5;
        console.log ( resultado);
        const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
        contenedorJuegos.innerHTM = "";
    
        contenedorJuegos.innerHTML=`
        <h2>tu numero pensado es ${resultado}</h2>`

        principio();
    }


/*-------------------------------------fin juego 2---------------*/
    /*---------------------juego 3-------------------------*/



    function adivinacion_carta (){

    const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
    contenedorJuegos.innerHTM = "";

    contenedorJuegos.innerHTML=`
    <h2>piensa una carta de la baraja de poker</h2>
    <h2>perfecto ahora a esa carta elegida o pensada multiplicala por 2</h2>
    <h2>despues sumale 1</h2>
    <h2>multiplica ese resultado por 5</h2>
    <h2>a continuacion al resultado que obtenga, sume segun el caso </h2>
    <li>+6 si es de trebol</li>
    <li>+7 si es de corazon</li>
    <li>+8 si es de picas</li>
    <li>+9 si es de diamantes</li>
    <br>
    <h3>coloca tu numero</h3>
    <input type="text" id="inputJuego3">
    <br>`    
    

    const boton_siguiente6 = document.createElement("button");
    boton_siguiente6.innerText = "siguiente";
    boton_siguiente6.classList.add("boton2")
    boton_siguiente6.addEventListener("click", () =>{
        
        adivinacion_carta2 ();
        
    });
    contenedorJuegos.appendChild(boton_siguiente6);
    }

    
    function adivinacion_carta2 () {

        const numeroEspectador = document.getElementById ("inputJuego3").value;
        // const numeroEspectador = prompt("coloca tu numero");
    
    fetch(`juego3.json`)
    .then( res => res.json())
    .then(
        data =>{
        console.log(data);
        console.log(data.find(p => p.numero == numeroEspectador) );
        const carta12 = data.find(p => p.numero == numeroEspectador);
        console.log("tu carta es " + carta12.carta );
        const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
        contenedorJuegos.innerHTM = "";
    
        contenedorJuegos.innerHTML=`
        <h2>tu carta es el ${carta12.carta}</h2>
        ` 
        principio();
    }
    )
}

/*----------------------fin tercer juego-------------------------------*/
