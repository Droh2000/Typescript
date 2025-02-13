// Esta es una simple funcion que recive cualquier argumento y lo imrpime en consola
export const printObject = ( argument : any ) => {
    console.log( argument );
}

// Esta es la razon por la que TS nos debe de ayudar con el Tipado
/*export function genericFunction( argument: any ){
    return argument;
}*/
// Convercion de la funcion normal en una funcion generica utilizando los genericos de TS
// En una funcion Tradicional (Donde utilizamos "Function")
// Lo que hacemos es colocarle los simbolos de <> y dentro el tipo de datos que queremos
// T -> Se utiliza para decir que es de tipo generico (En realidad se puede nombrar con cualquier letra pero esto es un estandar)
// Ademas podemos definir varios tipos separandonos por comas
//
// Con este T le indicamos que vamos a recibir un tipo de Dato y este sera el mismo tipo del argumento
// Ademas la salida de la funcion la podemos mandar como del mismo tipo generico o si quisieramos de otro tipo de dato
export function genericFunction<T>( argument: T ): T{
    return argument;
}

// Funcion Generica con una funcion de flecha
// El tipo generico se define antes de los parentecis de la funcion
export const genericFunctionArrow = <T>(argument: T) => {
    return argument;
}

// El argumento es el que determina el tipo de dato de la funcion pero si queremos ponerle restricciones
// Por ejemplo que la funcion solo pueda trabajar con numero o que el valor de retorno sea un numero