// import {save, read, quit, clear} from "../datamanager.js";
// import {diccionario, base, rio} from "../data/fichas.json";

// Esquemas

const modelo_ficha = {
    pos: [NaN, NaN],
    ori: 0,
    img: "URL",
    side: ["path","city","field","path"],
    ocup: {
        path: null,
        city: null,
        field1: null,
        field2: null,
        church: null
    }
};

class Ficha {
    pos = [NaN,NaN];
    ori = 0;

    constructor(img, side, ocup) {
        this.img = img;
        this.side = side;
        ocup.forEach(i => {
            this.ocup[i] = null;
        })

        // Crear el objeto HTML
        this.dom = document.createElement("img");
        this.dom.src = mod.img;
        this.dom.style.display = "match";

        this.dom.draggable = true;
        this.dom.ondragstart = (event) => {
            event.dataTransfer.setData("side", String(this.side));
        }

        this.dom.dataset = this;
    }

    /* Se puede completar */
}


// Variables de DOM

var mapa;
var controles;
var menu;
var size;

// Variables estandar de juego

var jugadores = [];

var fichas = [];

// Variables de partida

var t_tablero = 16;

var d_turno = NaN;

var n_fichas = 72;

var n_jugadores = 3;

var extensiones = [];

var listaJugadores = [
    ["Abel", "#00ff00"],
    ["Toni", "#0000ff"],
    ["Lucia","#ff0000"]
];

// Funciones de partida

const ponerFicha = (event) => {
    /* Falta acabar */
}

// Setup

const crearJugadores = (lista_jugadores) => {
    jugadores = [];
    var jugador;
    for (var i = 0; i < lista_jugadores.length; i++){
        jugador = {/* Falta completar */};
        jugadores.push(jugador)
    };
};

const crearFichas = () => {
    var ficha;
    base.forEach(mod => {
        for (let i=0; i<mod.num; i++){
            // Crear el objeto Ficha
            ficha = new Ficha(mod.img, mod.side, mod.ocup);
            // Añadir la ficha al monton
            fichas.push(ficha);
        }
    });
};

const crearMapa = () => {
    var casilla;
    for (let x=1; x <= t_tablero; x++) {
    for (let y=1; y <= t_tablero; y++) {
        casilla = document.createElement("div");
        casilla.style.display = "block"
        casilla.style.gridColumnStart = y;
        casilla.style.gridColumnEnd = y + 1;
        casilla.style.gridRowStart = x;
        casilla.style.gridRowEnd = x + 1;
        casilla.className = "casilla";
        casilla.innerHTML = ""
        casilla.ondrop = ponerFicha
        mapa.appendChild(casilla);
    }};
};

const crearMenu = () => {
    var jugador;
    listaJugadores.forEach(element => {
        jugador = document.createElement("div");
        /* Falta acabar */
        menu.appendChild(jugador);
    });
}

// Run Window

window.onload = () => {
    console.log("pagina cargada");

    size = [window.screen.width, window.screen.height];

    mapa = document.querySelector("#map");
    controles = document.querySelector("#controles");
    menu = document.querySelector("#menu");

    crearMenu();
    crearMapa();

    console.log("¡listo!");
}