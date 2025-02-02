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
*/      