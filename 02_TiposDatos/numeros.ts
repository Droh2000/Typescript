(() => {
    // Esto es de Tipo Any y al imprimirlo nos dara un underfined
    let avengers;

    console.log(avengers);

    // TS nos dira que esta es de tipo 20 porque esta infiriendo por su cuenta el tipo de dato
    const villians = 20;

    // Lo mejor es declararle el tipo de dato
    const villians2:number = 20;
    
    // Esto nos dara un Warning donde TS nos avisa que nos dara UNDEFINED la condicion
    // Esto seria un problema que tendriamos si fuera JS y no sabriamos donde esta el problema
    /*if( avengers < villians2 ){
        console.log('Estamos en problemas');
    }else{
        console.log('Nos salvamos');
    }*/
    // TS no ayuda a prevenir este tipo de errores

    let avengers2:number = 10;
    
    if( avengers2 < villians2 ){
        console.log('Estamos en problemas');
    }else{
        console.log('Nos salvamos');
    }

    // Con esta funcion cambiamos el texto al numero que contiene
    avengers2 = Number('55');
    console.log({ avengers2 });

    // Pensaremos que TS nos va a avisar de todos los errores pero la verdad es que no
    // Si hacemos esto donde el texto no es un numero correcto
    avengers2 = Number('55A');
    console.log({ avengers2 }); // Esto nos dara NaN ya que es considerado un numero en JS no nos da error TS
    // Habira que verificar si el texto es un numero y si no lo es manejamos una excepcion
    // Si no manejamos esto nos puede conducir a errores en la aplicacion
})();