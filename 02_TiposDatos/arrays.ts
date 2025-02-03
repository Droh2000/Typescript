(()=>{
    // Si no le decimos el tipo de datos, al poner el cursor encima veremos que es de tipo
    // number[], al ver esos [] podria significar que es un arreglo o una tupla
    const numbers = [1,2,3,4,5,6,7,8,9];

    // Si le definimos varios tipos de datos internos nos dira
    // Los tipos que son en este caso: String | number
    const algo = [1,2,'3',4,5,6,7,8,9];
    
    // Si queremos insertar algo Solo se puede hacer de los tipos que contiene originalemtne que son String | number
    // algo.push(true); -> Esto nos da Error

    // Si queremos permitirle insertar varios tipos y que no dependa de la declaracion de los valores se lo indicamos:
    const algo2: (string | number | boolean)[] = [1,2,'3',4,5,6,7,8,9];
    algo2.push(true);

    // Lo mejor es definir los arreglos de un tipo especifico
    const algo3: number[] = [1,2,3,4,5,6,7,8,9];

    const villians = ['Omega', 'Dormamu', 'Duende'];

    // Cuando hacemos uso del forEach, TS logra inferir cuales son los tipos de datos que tiene que regresar
    // Asi en los metodos que utilizemos internamente nos dara la autoayuda necesaria
    // Al poner el cursor en esta linea ya nos dice que el Callback recibe un valor de tipo String
    villians.forEach( v => console.log( v.toUpperCase() ));
})();