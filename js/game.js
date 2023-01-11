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
        try{
            if(this.dom.parentElement.id == "n_ficha"){
                this.oriSet((this.ori+1));
            }
        }catch{console.log("err")};
    }

    fijar(){
        // fija la ficha en la casilla
        this.dom.draggable = false;
        try {var aux = this.dom.parentElement.className != "casilla"}
        catch {throw "la ficha no esta en una Casilla";}
        if (aux) {throw "la ficha no esta en una Casilla";}

        this.dom.parentElement.style.border = "none";
        this.pos = this.dom.parentElement.dataset["posicion"].split(",");

        this.dom.parentElement.dataset["1"] = this.i;

        tablero.push(this.i);

        /* Falta acabar */
    }

    /* Se puede completar */
}

class Jugador {
    constructor(name, color, i){
        this.is_turno = false;
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
        if(!this.is_turno){
            this.dom.childNodes[2].innerHTML = "&#10003;";
            this.dom.style.borderStyle =  "dotted";
            this.dom.focus()
            this.is_turno = true;
        }else{
            this.dom.childNodes[2].innerHTML = "&#x2717;";
            this.dom.style.borderStyle =  "outset";
            this.is_turno = false;
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

var condi = false;
var condi2 = false;

const sePuedePoner = (lugar, id_ficha) => {
    var adjunto;
    var side1;
    var side2;
    var ori1;
    var ori2;
    var lado1;
    var j = 0;
    

    var x = parseInt(lugar[0]);
    var y = parseInt(lugar[1]);

    var iter = {
        0: [x, y-1],
        1: [x+1,y],
        2: [x, y+1],
        3: [x-1,y]
    }

    var ret = true;
    for(i in iter){
        j++;
        //console.log(i, adjunto.dataset["posicion"], lugar);
        try{
            ori1 = fichas[id_ficha].ori;
            giro1 = JSON.parse(JSON.stringify(ori1));

            side1 = fichas[id_ficha].side;
            lado1 = JSON.parse(JSON.stringify(side1));

            //console.log(condi);
            while(giro1 > 0 && !condi){
                var a = lado1.pop();
                lado1.unshift(a);
                giro1--;
            }
            //console.log(condi);
            condi = true;

            adjunto = document.querySelector("div.casilla[data-posicion = '"+ iter[i][0] + "," + iter[i][1] +"']");
            //adjunto.style.backgroundColor = "blue";
            ori2 = fichas[adjunto.dataset["i"]].ori;
            giro2 = JSON.parse(JSON.stringify(ori2));
            //console.log(ori2);
            side2 = fichas[adjunto.dataset["i"]].side;
            ori1 = fichas[id_ficha].ori;
            ori2 = fichas[adjunto.dataset["i"]].ori;

            console.log(side1, side2, ori1, ori2, " gg");

            ret = ret && side1[(ori1 + i + 2) % 4] == side2[(ori2 + i) % 4];
        }catch(err){
            //console.log(err);
            ret = ret && true;
        }
    }
    console.log(ret);
    return ret;
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

var turno = -1;

var id_ficha = 0;

// Variables de partida  =====================================================================

var t_tablero = 10;

var d_turno = 0;

var n_fichas = 75;

var extensiones = "";

var listaJugadores = [
    ["Abel", "#00ff00"],
    ["Toni", "#0000ff"],
    ["Lucia","#ff0000"]
];

var datos;
const guardarDatos = () => {
    try{
        datos = JSON.parse(read("datosjuego"));

        n_fichas = parseInt(datos["duracion"]);
        d_turno = parseInt(datos["turno"]);
        t_tablero = parseInt(datos["tablero"]);
        extensiones = datos["extensiones"];
        listaJugadores = datos["jugadores"];
    }catch(err){
        console.log(err);
    }
}

// Funciones de partida  ===================================================================

const n_turno = () => {
    if(turno != -1){
        // Cambio de turno
        jugadores[turno].turno();
        try{
            fichas[id_ficha].fijar();
        }catch{
            fichas[id_ficha].dom.remove();
            tablero.push(id_ficha);
        }
        if(tablero.length == n_fichas){
            // Fin de partida
            console.log("fin de partida");
            
            document.querySelectorAll(".b_1:not([value='Salir'])").forEach(bt => {
                bt.setAttribute("disabled","");
            })

            window.open("../html/leaderboard.html");
            // reset();
            return;
        }
    }
    turno = (++turno) % listaJugadores.length;
    jugadores[turno].turno();
    nuevaFicha();
    nuevoMonigote();
    contador();
    condi2 = false;
    condi = false;
}

const nuevaFicha = () => {
    do{
        var ind = Math.floor(Math.random() * n_fichas);
    }while(any(tablero, (x) => {return x == ind;}));
    document.getElementById("n_ficha").appendChild(fichas[ind].dom);
    id_ficha = ind;
    console.log("Nueva ficha: " + ind); // Se puede quitar
}

var tiempo;
var pause = false;
const contador = () => {
    try{clearInterval(tiempo);}catch{}
    if (d_turno != 0){
        document.getElementById("contador").innerHTML = "Tiempo restante: " + d_turno;
        var contador = 0;
        var t_restante = d_turno;
        tiempo = setInterval(function() {
            if(!pause){
                contador++;
                t_restante = d_turno-contador;
                document.getElementById("contador").innerHTML = "Tiempo restante: " + t_restante;
            }
        }, 1000);
        setTimeout(function() {
            document.getElementById("contador").innerHTML = "Tiempo restante: 0";
            clearInterval(tiempo);
            n_turno();
        }, d_turno*1000);
    }
    else{
        document.getElementById("contador").innerHTML = "Tiempo infinito";
    }
}

const nuevoMonigote = () => {
    var box = document.querySelector("#caja").children[0];
    box.innerHTML = "";
    var escala = (size[0]/23).toFixed();
    var jug = jugadores[turno];
    var mon = monigote(escala, escala, jug.color, jug._color);
    mon.style.height = "100%";
    mon.style.aspectRatio = "1 / 1";
    mon.dataset["jugador"] = turno;
    mon.draggable = true;
    mon.ondragstart = (event) => {
        event.dataTransfer.setData("jugador", turno);
    }
    box.appendChild(mon);
}

// Eventos ============================================================================

const pausa = () => {
    pause = true;
    alert("El juego esta en pausa, ¿desea reanudar?");
    pause = false;
}

const salir = () => {
    pause = true;
    if(confirm("¿Seguro que quiere salir al menú?\nLos datos se borrarán.")){
        window.location.replace("../inicio.html")
    }
    pause = false;
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
        i = event.dataTransfer.getData("index");
        fichas[i].dom.style.height = resize;
        fichas[i].dom.style.width = resize;
        cas.appendChild(fichas[i].dom);
    }
    /* falta por acabar */
}

const overFicha = (event, cas) => {
    if(cas.className == "casilla"){
        if (cas.innerHTML == "" && sePuedePoner(cas.dataset["posicion"].split(","), this.id_ficha)){
            event.preventDefault();
        }
    }
    else if(cas.id == "n_ficha"){
        event.preventDefault();
    }
    /* falta por acabar */
}

// Setup  ===============================================================================

const ajustesCSS = () =>{
    size = [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
        window.screen.width,
        window.screen.height];

    var r = document.querySelector(":root");
    r.style.setProperty("--map_size", t_tablero);
    r.style.setProperty("--i_scale", (size[0]/15).toFixed()/160);
    r.style.setProperty("--font_size", (size[0]/42).toFixed().toString() + "px");
    if(t_tablero > 8){
        r.style.setProperty("--casilla", (size[0]/15).toFixed().toString() + "px");
    }else{
        r.style.setProperty("--casilla", (size[0]/(1.8*t_tablero)).toFixed().toString() + "px");
    }
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
    /*
    if(extensiones != "Inhabilitado"){
        for(i of extensiones.split(" ")){
            ext[i][0]["init"](total)
        }
    }*/
    base.forEach(mod => {
        for (let i=0; i<mod.num; i++){
            // Crear el objeto Ficha
            ficha = new Ficha(mod.img, mod.side, mod.ocup, j);
            // Añadir la ficha al monton
            fichas.push(ficha);
            j++;
        }
    });
    while(fichas.length < n_fichas){
        let mod = base[Math.floor(Math.random() * total.length)]
        ficha = new Ficha(mod.img, mod.side, mod.ocup, j);
        fichas.push(ficha);
        j++;
    }
    while(fichas.length > n_fichas){
        fichas.splice(Math.floor(Math.random() * n_fichas),1);
        j = 0;
    }if(j == 0){
        fichas.forEach((ficha, i) => {ficha.i = i})
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

    mapa = document.querySelector("#map");
    controles = document.querySelector("#controles");
    menu = document.querySelector("#jugadores");
    
    guardarDatos();

    crearFichas();
    crearJugadores();

    crearMenu();
    crearMapa();

    ajustesCSS();
    resize = (size[0]/15).toFixed().toString() + "px";
    document.querySelectorAll("*").forEach(el => {
        el.draggable = false;
    });

    console.log("¡listo!");

    n_turno()
}

var resize;
window.addEventListener("resize", () => {
    ajustesCSS();
    mapa.style.gridTemplateColumns = (new Array(t_tablero).fill(resize)).join(" ");
    mapa.style.gridTemplateRows = (new Array(t_tablero).fill(resize)).join(" ");
    document.querySelectorAll(".casilla, .ficha").forEach(el => {
        el.style.height = resize;
        el.style.width = resize;
    } )
});
