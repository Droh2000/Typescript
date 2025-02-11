(()=>{
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironname: 'Robert Downwy Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    // Desestructuracion sacamos las propiedades del objeto que nos interesa  
    const { poder, vision } = avengers;
    // Por consecuencia como TS logra inferir los tipos de datos podemos acceder a los metodos de ayuda
    console.log( poder.toFixed(), vision.toLowerCase() );

    // Si en el futuro estamos pensando en crearnos una funcion que recibe el objeto
    // veremos que internamente al querer usar el objeto no obtendremos la autoayuda
    const printAvenger = ( avengers ) => {
        console.log(avengers.vision );
    }

    // Para esto lo mejor es crearnos el tipo de datos especifico del objeto
    type Avengers = {
        nick: string;
        ironname: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    // Aqui ya tenemos la autoAyuda
    const printAvenger2 = ( avengers: Avengers ) => {
        console.log(avengers.vision );
    }
    // Incluso podemos desestructurar las propiedades que requiramos
    // Y podemos obtener el resto de los argumentos con el operador 
    // Spread sin tener que especificarlos todos para no perderlos
    const printAvenger3 = ( { vision, ...resto }: Avengers ) => {
        console.log( vision, resto );
    }

    printAvenger3( avengers );

})();