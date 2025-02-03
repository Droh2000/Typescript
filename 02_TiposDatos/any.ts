// Hay que usar lo menos que se pueda este tipo de datos pero hay casos donde tendremos que usarlo
// para el caso que queramos que algo funcione para despues usar una interface, una clase o alguna solucion con un tipado edxtricto
(()=>{
    // Que acepte cualquier tipo de dato
    let avenger:any = 123;
    // Si la creamos pero no la declaramos, en caso de ser constante nos dara Error
    // const exist; -> Una constante tiene que estar inicializada
    let exist;
    let power;

    // No tenemos autoayuda al ser de tipo any pero en general podemos aplicar metodos de todos los tipos de datos
    // Si le asignamos tipo de dato despues estas lineas de codigo nos marcaran Error
    avenger = 'Dr Strange';
    console.log( avenger.charAt(0) );
    // Hacer Casting
    // Le decimos a la variable que trate la variable como el tipo indicado despues del "as"
    // Esto solo se puede hacer en TS y asi es como podemos tambien acceder a la autoayuda
    console.log( (avenger as string).charAt(0) );

    avenger = 150.2595646;
    // Esta es otra forma de hacer Casting
    console.log( (<number>avenger).toFixed(2) );

    console.log(exist);
    console.log(power);

})();