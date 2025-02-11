(()=>{
    // Este bucle se usa para trabajar con algun arreglo u objeto que tenga un tamano especifico
    // Siempre es bueno defniri los tipos primero porque al definir una variable tenemos la autoayuda
    type Avenger = {
        name: string,
        weapon: string,
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'ArmonSuit', 
    }

    const capAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Shield', 
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'thurn', 
    }

    // TS por la constante y definir los tipos a los objetos ya detecta que el arreglo es del tipo de datos de los objetos
    // Si le definimos bien el tipo, el arreglo no podra tener otro tipo de dato diferente
    const avengers: Avenger[] = [ ironman, capAmerica, thor ];

    for (const avenger of avengers) {
        // Gracias a los tipos de datos tenemos la autoAyuda
        console.log( avenger.name, avenger.weapon );    
    }

})();