import {save, read, quit, clear} from "./datamanager.js";
import {diccionario, base, rio} from "../data/fichas.json";

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
            var ficha = document.createElement("img");
            ficha.src = mod.img
            ficha.style.display = "match"
            /* falta completar */
            fichas.push(ficha)
        }
    });
};

// Setup

const crearMapa = () => {
    var casilla;
    for (let x=0; x < 16; x++) {
    for (let y=0; y < 16; y++) {
        casilla = document.createElement("div");
        casilla.style.gridColumnStart = y;
        casilla.style.gridColumnEnd = y;
        casilla.style.gridRowStart = x;
        casilla.style.gridRowEnd = x;
        casilla.className = "casilla";
        map.appendChild(casilla);
    }};
};

const crearMenu = () => {
    var jugador;
    listaJugadores.forEach(element => {
        jugador = document.createElement("div");
        /* Falta acabar */
    });
}

// Run Window

document.addEventListener("DOMContentLoaded") = () => {
    var map = document.querySelector("#map");
    var controles = document.querySelector("#controles");
    var menu = document.querySelector("#menu");

    crearMenu();
    crearMapa();

}