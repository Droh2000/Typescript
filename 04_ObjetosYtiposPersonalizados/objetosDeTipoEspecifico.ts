(()=>{
    // Es importante saber que sin importar si TS nos marque errores, siempre va a compilar el codigo a JS

    // Si quremos definirle un tipo de dato un tipo de datos al objeto a la hora de definir el objeto
    // Como recomendacion cuando queramos especificarle el tipo de dato a un objeto hay que hacerlo 
    // con un Type especifico o una Interfaz

    // De manera normal despues de los dos puntos va a ser el tipo de dato en el que se considere Flash
    // La idea es que especifiquemos que propiedades y metodos puede tener
    // Empezamos Abriendo y Cerrando llavez indicando que es un objeto {}
    // Dentro le especificamos la primera propiedad con su tipo de dato (En esta parte nos marca error en las demas propiedades
    // porque tenemos que especificarle igualemente)
    let flash: { name:string, age:number, powers: string[] } = {
        name: "Barry Allen",
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    }

    // ¿Que pasa con las nuevas propiedades que queramos definirle despues?
    // Debemos de saber si esta propiedad debe de ser obligatpria o no
    // Si comentmos una de las propiedades ya definidas nos dara error porque son obligatotias definirlas todas
    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ['Super Fuerza'],
        /*getNombre(){
            return this.name;
        }*/
    }

    // para decir que un argumento es opcional lo indicamos a la hora de su definicion indicando
    // el simnbolo de interrogacion ?
    let flashOpcional: { name:string, age?:number, powers: string[] } = {
        name: "Barry Allen",
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    }    

    // Aqui no importa la pocion de las propiedades como si lo era en las funciones
    
    flashOpcional = {
        name: "Clark Kent",
        //age: 60,
        powers: ['Super Fuerza'],
        /*getNombre(){
            return this.name;
        }*/
    }

})();