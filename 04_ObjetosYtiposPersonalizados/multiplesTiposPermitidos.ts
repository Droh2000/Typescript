(()=>{
    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    // Aqui vamos a definir que esta variable tenga diferentes tipos
    // aqui le ponemos del tipo personalizado que creamos
    let myCustomVariable: (string | number | Hero) = 'Juan';
    // Imprimimos el tipo de dato de la variable
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    // Aqui al crear el objeto y tener el tipo de dato tendremos la autoayuda de las propiedades
    // que podemos definirle
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }
    // Al imprimir en JS nos saldra que es de tipo Object que es el tipo de un Objeto
    console.log(typeof myCustomVariable);

})();