(()=>{
    // Objeto literal en JS
    // Si ponemos el cursor encima veremos que Typescript infiere el tipo donde nos muestra
    // La definicion de la variable : (Siempre que veamos dos punetos en TS significa que despues biene el tipo de dato)
    // Aqui el tipo de dato es un objeto el cual internamente nos muestra las propieadades y su tipo de dato
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    }

    // Si le queremos colocar una nueva propiedad al objeto nos dara Error
    // Al poner el cursor encima nos dice que la nueva propiedad no es asignable a toda la definicion del objeto
    // Lo que paso es que TS se creo un nuevo tipo de dato que seria la definicion del objeto que creamos 
    // por eso al meterle otra no se podra hacer
    /*flash = {
        name2: 'Otro nombre'
    }*/

    // Si le especificamos una misma propiedad nos dara error porque le tenemos que especificar 
    // las demas propiedads con las que creamos el objeto
    /*flash = {
        name: 'Otro nombre'
    }*/

    // Si no le especificamos las mismas propiedades con lo mismos tipos de datos con los que fue creados
    // entonces tendremoa un error por no conicidir con el mismo tipo de dato
    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ['Super Fuerza'],
    }

    // Los objetos en teoria deberia de recibir una nueva propiead o un nuevo metodo
    // Si requerimos agregarle nuevas funciones tendremos este inconveniente de errores
    // para estos casos hay reglas que se le definien a TS para que sepa que vamos a agragar cosas


})();