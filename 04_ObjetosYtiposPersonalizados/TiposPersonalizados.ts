(()=>{
    // En Typescript tenemos esta palabra reservada para definir un tipo de Dato
    // Le damos un nombre y la definimos como si fuera un objeto
    // Asi es como ponemos reglas al objeto o variables que estamos definiendo 
    // Aqui dentro definimos las propiedades que teneemos en los objetos
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }
    // Cualquier cambio que se requiera en los tipos de datos ya solo lo modificamos en esta deficion de tipo

    // Ahora en la definicion larga que teniamos antes la quitamos
    let flashOpcional: Hero = {
        name: "Barry Allen",
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    }

    let superman: Hero = {
        name: "Clark Kent",
        age: 60,
        powers: ['Super Velocidad'],
        getName() {
            return this.nombre
        },
    }
})();