(()=>{
    // Estas solo estan disponibles en TS
    // Esto no queremos que sea considerado como un simple arreglo
    // Si queremos que sea una tupla donde el primer dato siempre sea un String y el segundo sea siempre un numero
    // Esto lo especificamos despues de los dos puntos dentro de los corchetes
    const hero: [string, number] = ['Dr Strange', 100];

    // Esto nos dara un error
    // hero[0] = 50;
    // hero[1] = 'IronMan';

    // Si son el mismo tipo de datos si nos permite
    hero[0] = 'IronMan';
    hero[1] = 50;
    console.log(hero);

    // Tambien le podemos definir mas tipos de datos para que almacene mas datos en esa pocicion de ese tipo de dato
    const hero2: [string, number, boolean] = ['Dr Strange', 100, true];
})();