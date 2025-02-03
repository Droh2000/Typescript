(() => {
    /*
        let isSuperman = true;

        isSuperman = undefined; -> Aqui obtendremos un error
    */
   /*
        Si no inicializamos la variable y le decimos su tipo de dato
        let isSuperman: boolean;

        console.log(isSuperman); -> Esto nos dara error porque no esta asignada la variable
   */

    let isSuperman:boolean = true;
    // Esta entre llaves para imprimir el nombre de la variable y su valor
    console.log({isSuperman});

    // Lo podemos igualar a una expreccion logica
    isSuperman = true && false;

    // Si nos regresa otro valor de diferente tipo nos dara error
    //  isSuperman = ( true ) ? 'ABC' : 'XYZ';
    //  isSuperman = ( true ) ? true : 'XYZ'; -> Incluso si es uno booleano nos dara error

    console.log({isSuperman});

})();