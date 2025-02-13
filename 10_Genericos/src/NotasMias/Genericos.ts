import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
// Agrupar las importaciones de las interfaces
// import { Villian } from "./interfaces/villians";
// import { Hero } from "./interfaces/hero";
// Usamos la importacion con el modulo de la carpeta de la interface
import { Villian,HeroInterface } from "../interfaces";


/*
    Una funcion generica es una funcion que puede recibir cualquier tipo de argumento

    Esta funcion que creamos aqui nos permite imprimir el objeto que actualmente es considerado
    como generico porque recibe cualquier dato, el incoveninete de trabajarlo como lo hisimos al inicio
    es que TS no esta al pendiente de los posibles tipos de datos que puedan tener los objetos
    TS nos debe de ayudar con el tipado
*/
printObject( 123 );
printObject( new Date() );
printObject({ a:1, b:2, c:3 });
printObject([1,2,3,4,5,6,7,8,9,10]);
printObject('Hola Mundo');

// Uso de la otra funcion normal generica veremos que no obtenemos los metodos de autoayuda al pasarle el
// argumento de un tipo u otro y TS no sabe por lo que podemos usar cualquier metodo y obtener error al final
//  console.log( genericFunction(3.141618).toFixed(2) );
// console.log( genericFunction('Hola') );

// Para solucionar lo de arriba es donde entran los genericos
// Donde le decimos a TS que la funcion puede recibir cualquier tipo de objeto pero la salida sera igual 
// al mismo objeto de entrada o que en base a un tipo de entrada le especifiquemos que tipo de salida tendra
// Asi obtendremos toda la autoayuda correspondiente para saber que si le mandamos un tipo de datos solo obtendremos
// los metodos y propiedades de ese tipo de dato
// Despues de transformar la funcion Normal en una funcion Generica ya obtenemos los metodos de autoayuda correspondiente
// Al poner el cursor ensima de la funcion veremos que es del tipo de dato que le mandemos
console.log( genericFunction(3.141618).toFixed(2) );
console.log( genericFunction('Hola').toUpperCase() );
console.log( genericFunctionArrow( new Date() ).getDate() );
// Ahora tambien sabemos que pasada la informacion de entrada sabremos los datos de Salida

// Antes de esta implementacion creamos las interfaces en su carpeta correspondiente
// Este objeto podria cumplir con cualquiera de las dos interfaces 
// Si le pasamos una propiedad que no cumple con el tipo de la interfaz nos dara errores
const deadpool = {
    name: 'DeadPool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

// Le mandamos el objeto a nuestra funcion generica asi despues podemos acceder a sus propieades
// Le queremos indicar a esta funcion que lo que le vamos a amdnar aqui tiene que ser de tipo heroe
// oara esto definimos <> antes de los parentesis (Con esto el objeto Deadpool tambien debe ser de este mismo tipo)
// Con esto ahora el tipo de dato no lo da el argumento sino que se lo especificamos primero
console.log(genericFunctionArrow<Villian>(deadpool));
