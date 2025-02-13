import { Pokemon } from "../decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// Despues de agregarle el decorador a la clase veremso que nos imprimio toda la clase
// El decorador se ejecuta en el momento que se define la clase 
// Si copiamos las lineas de codigo del "pokemon-class" en este archivo veremos que nos dara la misma imprecion al momento de la creacion

// Para saber si el decorador de " bloquearPrototipo" 
// Con el uso de la funcion "prototype" intentamos exandir
// Agregando una nueva propiedad, pero veremos como TS nos dara Error
// Si lo casteamos como ANY veremos que se quita el error donde no importa que tipo sea le vamos a agregar el customName a la clase
// Pero aun asi al ver el resultado en consola nos dara Error
(Pokemon.prototype as any).customName = "Pickachu";

// Aqui usamos el metodo que tenga decorador, y verifiquemos que le podemos dar numeros enteros pero que pasa si le pasamos
// numeros negativos o un numero muy grande, esta es una validacion que podemos implementar no solo en este metodo sino en muchos otros
// asi que lo podemos agregar en un decorador para no estar copiando la logica
charmander.savePokemonToDB(50);

// Psra obervar la propiedad que sin importar si es publica o privada de todas formas la vemos
// Despues de la correcta implementacion del decorador veremos que esto nos dara error y no podemos asignar un valor a una propeidad de solo lectura
charmander.publicApi = 'https://apinose.com';
console.log( charmander );
