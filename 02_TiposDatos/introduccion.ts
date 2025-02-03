/*
            Introduccion a los tipos de Datos

    Todo lo que se puede hacer en JS se pude hacer en TS pero con tipado de datos pero en TS tenemos mas tipos de datos que
    no hay en JS.
    En JS tenemos dos: 
        Primitivos: String, Number, Boolean, Symbol
        Compuestos: Estos serian los objetos, Funciones, Clases, Arreglos
    
    Los Strings lo podemos declarar con "", '', ``, los Numver serian los enteros y Decimales
    Tenemos tambien los tipos de NULL y Undefined (Este es cuando no hemos asignado un valor)
    El Symbol seria como: variable = Symbol(), variable2 = Symbol('myProperty') -> Estos son usados cuando requerimos tener dentro de un objeto
        una propiedad que sea garantizada unica, es decir si tenemos diferentes objetos que tengan la misma propiedad si le definimos un Symbol
        a pesar que los objetos hayan sido creado igual, van a tener ese symbol que apunta a un espacio en memoria diferente
    
    TypeScript nos permite:
        - Crear nuevos Tipos
        - Interfaces
        - Genericos
        - Tuplas (O con muchas cantidad de valores)

    Typescrip va a tratar hasta donde sea posible de inferir el tipo de dato, poniendonos ciertas reglas para evitar que
    nuestro codigo se deforme  de manera que no esperamos

    Al poner el cursor ensima de esta linea de codigo veremos "const a: 10" lo que sigua despues de los dos puntos
    significa el tipo de dato
*/      
// Para evitar conflictos con otros archivos y que caigan en el objeto global de windows, vamos a crear una funcion
// anonima autoinvocada para encapsular el codigo
// Dentro es una funcion de flecha tradicional, luego toda esa funcion la ponemos entre parentesis para despues mandarla a llamar con dos parentesis que se abtren y cierran
(() => {
    const a = 10;

    // Aqui a diferencia de arriba veremos que "let b: number" esto es porque cuando creamos una constante Typescrip
    // ese tipo que es el valor de 10 porque no podemos cambiar ese valor ya que es una constante a diferencia de la variable declarada
    // con LET que si la podemos cambiar a otro tipo de dato numero
    let b = 10;
    
    // No es recomendable dejar que Typescript infiera el tipo a solo que nosotros estemos seguros pero hay que acostumbrarnos a ponerle los tipos de datos
    // Asi le definimos que esta constante sera un NUMERO
    const c:number = 10;
    // Al declrarla asi ya se ve mejor que esta variable es de tipo numero
    let d:number;
    d = 3.1416;
    
    // Si lo declaramos como "d" pero no le damos el tipo de datos, al poner el cursor encima nos dira typescript que es de tipo ANY
    // Que significa cualquier cosa que le queramos meter 
    let e;
    
    // Si declaramos asi los parametros de las funciones al poner el cursor encima nos dira que el tipo de parametro es ANY
    // Tambien nos dira una advertencia esto es porque en el archivo tsconfig.json esta el parametro "noImplicityAny: true" para que nos de error en los
    // argumentos que sean de tipo ANY (Lo podemos poner en False para que no ver las adveretencias)
    function sayHello( msg ){
        console.log( msg );
        // Ademas al no especificar el tipo de datos no obtneemos ninguna ayuda de autocompletado de Typescript porque no sabe el tipo de dato
    }
    
    // Tenemos que especificar el tipo de dato para que las funciones sepan que es el argumento que reciben y que es lo que retornan
    function sayHello2( msg: string ){
        console.log( msg );
        // Con poner msg. obtenemos todos los metodos y propiedades que tienen los strings o segun el tipo de dato especificado
    }
})();