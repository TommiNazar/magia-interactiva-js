
/*----------------pagina principal------------*/

if (localStorage != null ){
    const espectador1 = prompt("cual es tu nombre");
    localStorage.setItem ("espectador" , espectador1 );
    const espectador = localStorage.getItem ("espectador");
    console.log(espectador);
}
const espectador = localStorage.getItem ("espectador");

function presentacion(){
    
        Swal.fire({
            title: 'viviras una experiencia magica ' + espectador,
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
    <h1>show de magia virtual</h1>
    <h2>bienvenido ${espectador}</h2>
        <h2>elige un juego</h2>

        <button id="primerJuego">primer juego</button>
        <button id="segundoJuego">segundo juego</button>
        <button id="terceroJuego">tercer juego</button>
        <button id="cuartoJuego">cuarto juego</button>`;

    const juego1 = document.getElementById(`primerJuego`)
    juego1.addEventListener(`click`, () =>{
    mostrarcartas1(cartas1);
    });

    const juego2 = document.getElementById(`segundoJuego`)
    juego1.addEventListener(`click`, () =>{
    adivinacion_numero();
    });

}
presentacion ()
index ()


/*-----------------------------fin pag principal-------------------------*/

/*----------------------juego 1 cartas---------------*/
const juego1 = document.getElementById(`primerJuego`)
juego1.addEventListener(`click`, () =>{
    mostrarcartas1(cartas1);
});


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
console.log(carta3)

const cartas1 = [carta1,carta4,carta3,carta2,carta5]

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

const cartas2 = []

cartas2.push(carta8);
cartas2.push(carta7);
cartas2.push(carta6);
cartas2.push(carta9);

console.log(cartas2)

function mostrarcartas1 (cartas){

    const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
    contenedorJuegos.innerHTM = "";
    contenedorJuegos.innerHTML=`
    <h2>listo para jugar</h2>`

    const texto1 = document.createElement("div");
    texto1.innerHTML = "<h2>recuerda una carta</h2>";
    texto1.classList.add("texto1");
    contenedorJuegos.appendChild(texto1);

    for (const carta of cartas){
        const divCartas = document.createElement("div");
        divCartas.classList.add("carta");

        divCartas.innerHTML = `
        <img src= " ${carta.imagen}" alt="${carta.titulo}">`;

        contenedorJuegos.appendChild(divCartas);
    }

    const boton_siguiente = document.createElement("button");
    boton_siguiente.innerText = "siguiente";
    boton_siguiente.classList.add("boton1")
    

    boton_siguiente.addEventListener("click", limpiar);
    contenedorJuegos.appendChild(boton_siguiente);

    

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
    <h2>sacare la carta q estas pensando</h2>`    

    const boton_siguiente2 = document.createElement("button");
    boton_siguiente2.innerText = "siguiente";
    boton_siguiente2.classList.add("boton2")
    boton_siguiente2.addEventListener("click", () =>{
        mostrarcartas2(cartas2);
    });
    
    contenedorJuegos.appendChild(boton_siguiente2);
}

function mostrarcartas2 (cartas){

    const contenedorJuegos = document.getElementById ("contenedor_juegos_cartas");
    contenedorJuegos.innerHTM = "";

    contenedorJuegos.innerHTML=`
    <h2>he sacado tu carta</h2>`

    for (const carta of cartas){
        const divCartas = document.createElement("div");
        divCartas.classList.add("carta");

        divCartas.innerHTML = `
        <img src= " ${carta.imagen}" alt="${carta.titulo}">`;

        contenedorJuegos.appendChild(divCartas);
    }

    principio_cartas();
    
}

function principio_cartas (){

    const boton_volver = document.createElement("button");
    boton_volver.innerText = "volver al primer juego";
    boton_volver.classList.add("botonvolver")
    boton_volver.addEventListener("click", () =>{
        index();
    });
    document.getElementById ("contenedor_juegos_cartas").appendChild(boton_volver);
}



/*-------------------------------fin juego1 -------------------------*/

/*---------------------------juego 2--------------------*/

function adivinacion_numero (){

}