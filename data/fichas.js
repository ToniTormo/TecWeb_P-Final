const diccionario = {
    "0": "field",
    "1": "path",
    "2": "city",
    "3": "river"
};

const base = [
    {"img": "../media/v1/caretera_4.png",
    "side": [1,1,1,1],
    "ocup": ["path","field1","field2","field3","field4"],
    "esc": false,
    "num": 1
    },
    {"img": "../media/v1/caretera_3.png",
    "side": [0,1,1,1],
    "ocup": ["path","field1","field2","field3"],
    "esc": false,
    "num": 4
    },
    {"img": "../media/v1/caretera_c.png",
    "side": [0,0,1,1],
    "ocup": ["path","field1","field2"],
    "esc": false,
    "num": 9
    },
    {"img": "../media/v1/caretera.png",
    "side": [0,1,0,1],
    "ocup": ["path","field1","field2"],
    "esc": false,
    "num": 8
    },
    {"img": "../media/v1/ciudad_esquina_c.png",
    "side": [0,2,0,2],
    "ocup": ["city", "field"],
    "esc": false,
    "num": 3
    },
    {"img": "../media/v1/ciudad_esquina_c_escudo.png",
    "side": [2,2,1,1],
    "ocup": ["city", "path", "field1", "field2"],
    "esc": true,
    "num": 2
    },
    {"img": "../media/v1/ciudad_esquina_c.png",
    "side": [2,2,1,1],
    "ocup": ["city", "path", "field1", "field2"],
    "esc": false,
    "num": 3
    },
    {"img": "../media/v1/ciudad_esquina_escudo.png",
    "side": [2,2,0,0],
    "ocup": ["city", "field"],
    "esc": true,
    "num": 2
    },
    {"img": "../media/v1/ciudad_esquina.png",
    "side": [2,2,0,0],
    "ocup": ["city", "field"],
    "esc": false,
    "num": 3
    },
    {"img": "../media/v1/ciudad.png",
    "side": [2,2,2,2],
    "ocup": ["city"],
    "esc": false,
    "num": 1
    },
    {"img": "../media/v1/monasterio_c.png",
    "side": [0,0,1,0],
    "ocup": ["church", "path", "field"],
    "esc": false,
    "num": 2
    },
    {"img": "../media/v1/monasterio.png",
    "side": [0,0,0,0],
    "ocup": ["church", "field"],
    "esc": false,
    "num": 4
    },
    {"img": "../media/v1/muro_3.png",
    "side": [2,1,1,1],
    "ocup": ["city", "path", "field1", "field2", "field3"],
    "esc": false,
    "num": 3
    },
    {"img": "../media/v1/muro_c.png",
    "side": [2,1,0,1],
    "ocup": ["city", "path", "field1", "field2"],
    "esc": false,
    "num": 4
    },
    {"img": "../media/v1/muro_centro_escudo.png",
    "side": [0,2,0,2],
    "ocup": ["city", "field1", "field2"],
    "esc": true,
    "num": 2
    },
    {"img": "../media/v1/muro_centro.png",
    "side": [0,2,0,2],
    "ocup": ["city", "field1", "field2"],
    "esc": false,
    "num": 1
    },
    {"img": "../media/v1/muro_ciudad_c_escudo.png",
    "side": [2,2,1,2],
    "ocup": ["city", "path"],
    "esc": true,
    "num": 2
    },
    {"img": "../media/v1/muro_ciudad_c.png",
    "side": [2,2,1,2],
    "ocup": ["city", "path"],
    "esc": false,
    "num": 1
    },
    {"img": "../media/v1/muro_ciudad_escudo.png",
    "side": [2,2,0,2],
    "ocup": ["city", "field"],
    "esc": true,
    "num": 1
    },
    {"img": "../media/v1/muro_ciudad.png",
    "side": [2,2,0,2],
    "ocup": ["city", "field"],
    "esc": false,
    "num": 3
    },
    {"img": "../media/v1/muro_espacio.png",
    "side": [2,0,2,0],
    "ocup": ["city1", "city2", "field"],
    "esc": false,
    "num": 3
    },
    {"img": "../media/v1/muro_esquina.png",
    "side": [2,2,0,0],
    "ocup": ["city1", "city2", "field"],
    "esc": false,
    "num": 2
    },
    {"img": "../media/v1/muro_L.png",
    "side": [2,0,1,1],
    "ocup": ["city", "path", "field1", "field2"],
    "esc": false,
    "num": 3
    },
    {"img": "../media/v1/muro_R.png",
    "side": [2,1,1,0],
    "ocup": ["city", "path", "field1", "field2"],
    "esc": false,
    "num": 3
    },
    {"img": "../media/v1/muro.png",
    "side": [2,0,0,0],
    "ocup": ["city", "field"],
    "esc": false,
    "num": 5
    }
];

const ext = {
    "rio": [ {/* Aqui van las funciones extras */},
    {"img": "../media/v1/caretera_c_rio.png",
    "side": [3,3,1,1],
    "ocup": ["path", "field1", "field2", "field3"],
    "esc": false,
    "rio": true,
    "num": 1
    },
    {"img": "../media/v1/caretera_rio.png",
    "side": [3,1,3,1],
    "ocup": ["path", "field1", "field2", "field3", "field4"],
    "esc": false,
    "rio": null,
    "num": 1
    },
    {"img": "../media/v1/ciudad_esquina_rio.png",
    "side": [2,2,3,3],
    "ocup": ["city", "field1", "field2"],
    "esc": false,
    "rio": false,
    "num": 1
    },
    {"img": "../media/v1/lago.png",
    "side": [0,0,3,0],
    "ocup": ["field"],
    "esc": false,
    "rio": null,
    "num": 2
    },
    {"img": "../media/v1/monasterio_rio.png",
    "side": [0,3,1,3],
    "ocup": ["church", "path", "field1", "field2"],
    "esc": false,
    "rio": null,
    "num": 1
    },
    {"img": "../media/v1/muro_c_rio.png",
    "side": [2,3,1,3],
    "ocup": ["city", "path", "field1", "field2"],
    "esc": false,
    "rio": null,
    "num": 1
    },
    {"img": "../media/v1/muro_espacio_rio.png",
    "side": [2,3,2,3],
    "ocup": ["city1", "city2", "field1", "field2"],
    "esc": false,
    "rio": null,
    "num": 1
    },
    {"img": "../media/v1/rio_c.png",
    "side": [0,0,3,3],
    "ocup": ["field1", "field2"],
    "esc": false,
    "rio": false,
    "num": 2
    },
    {"img": "../media/v1/rio.png",
    "side": [0,3,0,3],
    "ocup": ["field1", "field2"],
    "esc": false,
    "rio": null,
    "num": 2
    },
    ]
};