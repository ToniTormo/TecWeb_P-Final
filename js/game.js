// import {save, read, quit, clear} from "./datamanager.js";
// import {diccionario, base, rio} from "../data/fichas.json";

// Esquemas ===============================================================================

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
    },
    dom: null, // DOM Element
    i: NaN
};

// Classes y Objetos =======================================================================

class Ficha {
    constructor(img, side, oc, i) {
        this.pos = [NaN,NaN];
        this.ori = 0;
        this.ocup = {};

        this.img = img;
        this.side = side;
        oc.forEach(i => {
            this.ocup[i] = null;
        })
        this.i = i;

        // Crear el objeto HTML
        this.dom = document.createElement("img");
        this.dom.src = img;
        this.dom.className = "ficha";
        this.dom.draggable = true;

        this.dom.ondragstart = (event) => {
            event.dataTransfer.setData("index", String(this.i));
        }

        this.dom.dataset["index"] = i;

        // Info
        this.dom.onmouseover = () => {
            var li;
            var info = document.querySelector("#info>ul")
            info.innerHTML = "";
            for(var x in this.ocup){
                li = document.createElement("li")
                if(this.ocup[x] == null){
                    li.textContent = x + ": ";
                }else{
                    li.style.color = jugadores[this.ocup[x]]._color;
                    li.style.backgroundColor = jugadores[this.ocup[x]].color;
                    li.textContent = x + ": " + jugadores[this.ocup[x]].name;
                }
                info.appendChild(li);
            }
        }
        // Monigote
        this.dom.ondragover = () => {
            
        }
    }

    oriSet(n){
        // Determina la orientación de la ficha
        var x = n % 4;
        this.ori = x;
        this.dom.style.transform = "rotate(" + (90*x).toString() + "deg)";
    }

    rotar(){
        // rota la ficha 90 grados
        if(this.dom.parentElement.id == "n_ficha"){
            this.oriSet(++this.ori);
        }
    }

    fijar(){
        // fija la ficha en la casilla
        try {var aux = this.dom.parentElement.className != "casilla"}
        catch {throw "la ficha no esta en una Casilla";}
        if (aux) {throw "la ficha no esta en una Casilla";}

        this.dom.parentElement.style.border = "none";
        this.pos = this.dom.parentElement.dataset["posicion"].split(",");
        this.dom.draggable = false;

        tablero.push(this.i);

        /* Falta acabar */
    }

    /* Se puede completar */
}

class Jugador {
    constructor(name, color, i){
        this.i = i;
        this.puntos = 0;
        this.name = name;
        this.color = color;
        this._color = inv_color(color);
        this.fichas = 0;
        
        this.dom = document.createElement("div");
        this.dom.className = "jugador";
        this.dom.innerHTML = [
            '<span>'+ this.name +'</span>',
            '<span style="width: calc(var(--font_size)*1.5); text-align: center;">0</span>',
            '<span style="padding: 0px; text-align:center;">&#x2717;</span>'
        ].join("");
        this.dom.style.backgroundColor = this.color;
        this.dom.style.color = this._color;
        this.dom.style.borderColor = this._color;

        this.dom.children[1].innerText = this.puntos
    }
    
    turno(){
        if(this.i == turno){
            this.dom.childNodes[2].innerText = "&#10003;";
        }else{
            this.dom.childNodes[2].innerText = "&#x2717;";
        }
    } 
    /* Falta acabar */
}

// Funciones auxiliares  ======================================================================

const all = (iter, func) => {
    var aux = true;
    iter.forEach(el => {
        aux = func(el) && aux;
    })
    return aux;
}

const any = (iter, func) => {
    var aux = false;
    iter.forEach(el => {
        aux = func(el) || aux;
    })
    return aux;
}

const inv_color = (color) => {
    // color = #000000 : String
    var hex;
    var ret = [];
    var rgb = color.slice(1,7).match(/.{1,2}/g);
    for(i in rgb){
        hex = 255 - parseInt(rgb[i], 16);
        hex = hex.toString(16);
        hex = hex.length == 1 ? "0" + hex : hex;
        ret.push(hex)
    }
    return "#" + ret.join("");
}

const sePuedePoner = (x, y, id_ficha, cas) => {
    if(document.queryselector("div.casilla[data-posicion = '${x},${y + 1}']").innerHTML != ""){
        return(id_ficha.side[0] == pos[x + 1, y].cas.side[2]);
    }
    else if(document.queryselector("div.casilla[data-posicion = '${x + 1},${y}']").innerHTML != ""){
        return(id_ficha.side[1] == pos[x + 1, y].cas.side[3]);
    }
    else if(document.queryselector("div.casilla[data-posicion = '${x},${y - 1}']").innerHTML != ""){
        return(id_ficha.side[2] == pos[x + 1, y].cas.side[0]);
    }
    else if(document.queryselector("div.casilla[data-posicion = '${x - 1},${y}']").innerHTML != ""){
        return(id_ficha.side[3] == pos[x + 1, y].cas.side[1]);
    }
    else{return true;}
}

// Variables de DOM

var mapa;
var controles;
var menu;
var size;

// Variables estandar de juego  ===============================================================

var jugadores = [];

var fichas = [];

var tablero = [];

var turno = 0;

var id_ficha = 0;

// Variables de partida  =====================================================================

var t_tablero = 16;

var d_turno = 0;

var n_fichas = 75;

var n_jugadores = 3;

var extensiones = "";

var listaJugadores = [
    ["Abel", "#00ff00"],
    ["Toni", "#0000ff"],
    ["Lucia","#ff0000"],
    ["Abel", "#00ff00"],
    ["Toni", "#0000ff"],
    ["Lucia","#ff0000"],
    ["Abel", "#00ff00"],
    ["Toni", "#0000ff"]
];

const guardar_datos = () => {
    var datos = JSON.parse(read("datosjuego"));
    n_fichas = parseInt(datos["duracion"]);
    d_turno = parseInt(datos["turno"]);
    t_tablero = parseInt(datos["tableras"]);
    extensiones = datos["extensiones"];
    listaJugadores = JSON.parse(datos["jugadores"]);
}

// Funciones de partida  ===================================================================

const nuevaFicha = () => {
    do{
        var ind = Math.floor(Math.random() * n_fichas);
    }while(any(tablero, (x) => {return x == ind;}));
    document.getElementById("n_ficha").appendChild(fichas[ind].dom);
    id_ficha = ind;
    console.log("Nueva ficha: " + ind); // Se puede quitar
}

const contador = () => {
    if (d_turno != 0){
        let contador = 0;
        let t_restante = d_turno;
        let tiempo = setInterval(function() {
            contador++;
            t_restante = d_turno-contador;
            document.getElementById("contador").innerHTML = "Tiempo restante: " + t_restante;
        }, 1000);
        setTimeout(function() {
            clearInterval(tiempo);
        }, d_turno*1000);
    }
    else{
        document.getElementById("contador").innerHTML = "Tiempo infinito";
    }
}

const nuevoMonigote = () => {
    var box = document.querySelector("#caja:first-child");

    var mon = document.createElement("svg");
    mon.dataset["jugador"] = turno;
    mon.ondragstart = (event) => {
        event.dataTransfer.setData("jugador", turno);
    }
}

// Eventos ============================================================================

const pausa = () => {
    /* Falta rellenar */
    alert("El juego esta en pausa, ¿desea reanudar?");
}

const salir = () => {
    /* Falta rellenar */
    if(confirm("¿Seguro que quiere salir al menú?\nLos datos se borrarán.")){
        /* Falta rellenar */
    }
}


const buttonDown = (e, obj) => {
    obj.style.backgroundColor = 'grey';
    obj.style.borderStyle = "inset"; 
}

const buttonUp = (e, obj) => {
    obj.style.backgroundColor = 'lightsteelblue';
    obj.style.borderStyle = "outset"; 
}


const ponerFicha = (event, cas) => {
    if (cas.innerHTML == ""){
        event.preventDefault();
        cas.dataset["i"] = event.dataTransfer.getData("index");
        cas.appendChild(fichas[event.dataTransfer.getData("index")].dom);
    }
    /* falta por acabar */
}

const overFicha = (event, cas) => {
    if (cas.innerHTML == "" && sePuedePoner(dataset["posicion"], id_ficha)){
        event.preventDefault();
    }
    /* falta por acabar */
}

// Setup  ===============================================================================

const ajustesCSS = () =>{
    var r = document.querySelector(":root");
    r.style.setProperty("--map_size", t_tablero);
    r.style.setProperty("--casilla", (size[0]/15).toFixed().toString() + "px");
    r.style.setProperty("--i_scale", (size[0]/15).toFixed()/160);
    r.style.setProperty("--font_size", (size[0]/42).toFixed().toString() + "px");
}

const crearJugadores = (lista_jugadores) => {
    var jugador;
    var j = 0;
    for (i of listaJugadores){
        jugador = new Jugador(i[0],i[1],j);
        jugadores.push(jugador);
        j++;
    };
};

const crearFichas = () => {
    var ficha;
    var j = 0;
    var total = base;
    for(i of extensiones.split(" ")){
        total.concat(ext[i]);
    }
    total.forEach(mod => {
        for (let i=0; i<mod.num; i++){
            // Crear el objeto Ficha
            ficha = new Ficha(mod.img, mod.side, mod.ocup, j);
            // Añadir la ficha al monton
            fichas.push(ficha);
            j++;
        }
    });
    while(fichas.length > n_fichas){
        fichas.splice(Math.floor(Math.random() * n_fichas),1);
    }
    while(fichas.length < n_fichas){
        let mod = total[Math.floor(Math.random() * total.length)]
        for (let i=0; i<mod.num; i++){
            // Crear el objeto Ficha
            ficha = new Ficha(mod.img, mod.side, mod.ocup, j);
            // Añadir la ficha al monton
            fichas.push(ficha);
            j++;
        }
    }
};

const crearMapa = () => {
    var casilla;
    var mid = (t_tablero/2).toFixed()
    for (let x=1; x <= t_tablero; x++) {
    for (let y=1; y <= t_tablero; y++) {
        casilla = document.createElement("div");
        casilla.style.display = "block"
        casilla.style.gridColumnStart = y;
        casilla.style.gridColumnEnd = y + 1;
        casilla.style.gridRowStart = x;
        casilla.style.gridRowEnd = x + 1;
        if (x == mid && y == mid){
            casilla.style.backgroundColor = "lightcoral";
        }else {
            casilla.style.backgroundColor = "lightgrey";
        }
        casilla.dataset["posicion"] = [x,y];
        casilla.className = "casilla";
        casilla.innerHTML = "";
        casilla.setAttribute("ondrop", "ponerFicha(event, this)");
        casilla.setAttribute("ondragover", "overFicha(event, this)");
        mapa.appendChild(casilla);
    }};
};

const crearMenu = () => {
    jugadores.forEach(el => {
        menu.appendChild(el.dom);
    });
}

// Run Window  =============================================================================

window.onload = () => {
    console.log("pagina cargada");

    size = [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
        window.screen.width,
        window.screen.height];

    mapa = document.querySelector("#map");
    controles = document.querySelector("#controles");
    menu = document.querySelector("#jugadores");
    
    crearFichas();
    crearJugadores();

    crearMenu();
    crearMapa();

    ajustesCSS()

    console.log("¡listo!");
}

window.addEventListener("resize", () => {
    size = [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
        window.screen.width,
        window.screen.height];

    ajustesCSS();
});
