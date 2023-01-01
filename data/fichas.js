const diccionario = {
    "0": "field",
    "1": "path",
    "2": "city",
    "3": "church",
    "4": "river"
};

const base = [
    {"img": "../media/v1/caretera_4.png",
    "side": [1,1,1,1],
    "ocup": ["path","field1","field2","field3","field4"],
    "num": 1
    },
    {"img": "../media/v1/caretera_3.png",
    "side": [0,1,1,1],
    "ocup": ["path","field1","field2","field3"],
    "num": 4
    },
    {"img": "../media/v1/caretera_c.png",
    "side": [0,0,1,1],
    "ocup": ["path","field1","field2"],
    "num": 9
    },
    {"img": "../media/v1/caretera.png",
    "side": [0,1,0,1],
    "ocup": ["path","field1","field2"],
    "num": 8
    },
    {"img": "../media/v1/ciudad_esquina_c.png",
    "side": [0,2,0,2],
    "ocup": ["city", "field"],
    "num": 3
    },
    {"img": "../media/v1/ciudad_esquina_c_escudo.png",
    "side": [2,2,1,1],
    "ocup": ["city", "path", "field1", "field2"],
    "num": 2
    },
    {"img": "../media/v1/ciudad_esquina_c.png",
    "side": [2,2,1,1],
    "ocup": ["city", "path", "field1", "field2"],
    "num": 3
    },
    {"img": "../media/v1/ciudad_esquina_escudo.png",
    "side": [2,2,0,0],
    "ocup": ["city", "field"],
    "num": 2
    },
    {"img": "../media/v1/ciudad_esquina.png",
    "side": [2,2,0,0],
    "ocup": ["city", "field"],
    "num": 3
    },
    {"img": "../media/v1/ciudad.png",
    "side": [2,2,2,2],
    "ocup": ["city"],
    "num": 1
    },
    {"img": "../media/v1/monasterio_c.png",
    "side": [0,0,1,0],
    "ocup": ["church", "path", "field"],
    "num": 2
    },
    {"img": "../media/v1/monasterio.png",
    "side": [0,0,0,0],
    "ocup": ["church", "field"],
    "num": 4
    },
    {"img": "../media/v1/muro_3.png",
    "side": [2,0,0,0],
    "ocup": ["city", "path", "field1", "field2", "field3"],
    "num": 3
    },
    {"img": "../media/v1/muro_c.png",
    "side": [2,1,0,1],
    "ocup": ["city", "path", "field1", "field2"],
    "num": 4
    },
    {"img": "../media/v1/muro_centro_escudo.png",
    "side": [0,2,0,2],
    "ocup": ["city", "field1", "field2"],
    "num": 2
    },
    {"img": "../media/v1/muro_centro.png",
    "side": [0,2,0,2],
    "ocup": ["city", "field1", "field2"],
    "num": 1
    },
    {"img": "../media/v1/muro_ciudad_c_escudo.png",
    "side": [2,2,1,2],
    "ocup": ["city", "path"],
    "num": 2
    },
    {"img": "../media/v1/muro_ciudad_c.png",
    "side": [2,2,1,2],
    "ocup": ["city", "path"],
    "num": 1
    },
    {"img": "../media/v1/muro_ciudad_escudo.png",
    "side": [2,2,0,2],
    "ocup": ["city", "field"],
    "num": 1
    },
    {"img": "../media/v1/muro_ciudad.png",
    "side": [2,2,0,2],
    "ocup": ["city", "field"],
    "num": 3
    },
    {"img": "../media/v1/muro_espacio.png",
    "side": [2,0,2,0],
    "ocup": ["city1", "city2", "field"],
    "num": 3
    },
    {"img": "../media/v1/muro_esquina.png",
    "side": [2,2,0,0],
    "ocup": ["city1", "city2", "field"],
    "num": 2
    },
    {"img": "../media/v1/muro_L.png",
    "side": [2,0,1,1],
    "ocup": ["city", "path", "field1", "field2"],
    "num": 3
    },
    {"img": "../media/v1/muro_R.png",
    "side": [2,1,1,0],
    "ocup": ["city", "path", "field1", "field2"],
    "num": 3
    },
    {"img": "../media/v1/muro.png",
    "side": [2,0,0,0],
    "ocup": ["city", "field"],
    "num": 5
    }
];

const rio = [];