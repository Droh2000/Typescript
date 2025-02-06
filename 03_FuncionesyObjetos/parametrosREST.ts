(()=>{
    // Queremos asignar el valor de esa funcion a "fullNAme" en el cual le vamos a mandar tres argumentos
    // pero solo el primer argumento sera obligatorio y todas las demas son opcionales y que nos puedan mandar
    // cualquier cantidad de argumentos extra
    // Estos son los REST Argumentos que atrapa el resto de argumentos que recibe que son los tres puntos (...)
    // luego el nombre del argumento que le queramo dar
    // Al poner el cursor encima de este argumento veremos que por defecto es un arreglo de ANY en este caso solo quremos de String
    const fullName = ( firstName: string, ...restArgs:string[] ): string => {
        // Concatenamos a todos los argumentos que recibimos para eso usamos el metodo JOIN de los arreglos por un espacio en blanco
        return `${ firstName } ${ restArgs.join(' ') }`;
    }

    // Aqui le mandamos 2 mas de los argumentos que espera
    const superman = fullName('Clark','Joseph','Kent');

    console.log({ superman });
})();