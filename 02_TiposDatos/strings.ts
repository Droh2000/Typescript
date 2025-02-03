(() => {
    // Hay varias formas de definir lo String y no hay que dejar que TS infiera los tipos
    const batman: any = 'Batman'; // Con el de tipo ANY el autocompletado no ayuda en nada
    const linterna:string = "Linterna";
    const superman:string = `superman`;

    // Podemos hacer diferentes tipos de concatenaciones
    console.log(` I'm ${superman} `);

    // Podemos cometer errores y que TS no los detecte
    // Acceder a una letra de una pocicion que no exise
    console.log( batman[10].toUpperCase() );// Al acceder a una pocicon que no existe nos da un undefined

    // Con el simbolo de ? indicamos un NullCheck, dependiendo de donde se coloque seignifica diferente cosas 
    // Con esto le indicamos que si en esa posicion se contiene algo ejecute la funcion siguiente sino no haga nada
    // Asi podemos condicionar que si nos da undefined regresar otra cosa
    console.log( superman[10].toUpperCase() || 'Posicion Fuera de Rango' );

})();