// Aqui en este ejemplo usamos AXIOS para hacer las peticiones HTTP (Este lo tenemos que instalar con npm)
// Ademas vamos a consumir una API de la pagina de pokemos

import { getPokemon } from "./generics/get-pokemon";

// Como la funcion es asinctona tenemos los metodos de las promesas que son 
// Catch -> Para capturar el error
// Finally -> Cuando temrina
// Then -> cuando se resuleva
// Si ponemos el cursor encima de esta promesa veremos que sabe el tipo de dato que regresa porque lo tipamos en el archivo de get-pokemon.ts
getPokemon(1)
    // Al poner lo que nos regresa la promes podemos aceder en la respuesta todos los metodos de ese tipo de dato
    // Como usamos una interface en la promesa ya obtenemos la autoayuda sin necesidad de importarla aqui
    // La respuesta es de tipo pokemon que es del tipado de la respuesta con Quiktype.io
    .then( pokemon => console.log(pokemon.sprites.front_default) )
    .catch( error => console.error(error));
    //.finally( () => console.log('Fin de GetPokemon') );