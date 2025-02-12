(()=>{
    // De manera basica una interface funciona casio igual a un tipo
    // Solo que aqui despues de definir el nombre no le ponemos el Igual
    interface Hero {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    }

    // Los tipos y las interfaces en teoria hacen lo mismo pero la diferencia es que los
    // tipos no son extendibles (Agregar el Extends) cosa que en las interfaces si podemos
    // Ya que una vez que definamos el tipo ese se quedara asi pero a una interfaz se le pueden
    // agregar mas cosas, LAs interfaces son mas usadas para definir peticiones HTTP
    // y los tipos son usados en patrones como REDUX para definir que tipos de acciones son permitidas
    // para un objeto

})();