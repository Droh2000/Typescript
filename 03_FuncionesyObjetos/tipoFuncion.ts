(()=>{
    const addNumbers = (a:number, b:number) => a + b;
    const greet = (name:string) => `Hola ${ name }`;
    const saveTheWord = () => `El mundo esta salvado del judio`;

    let myFunction; // Este es de tipo ANY
    // Eso significa que soporta cualquier tipo de dato
    myFunction = 10;
    console.log(myFunction);

    // Si ahora la igualamos a la funcion, no le ponemos lo parentesis porque no vamos a ejecutar la funcion
    // lo que estamos haciendo es asignarle la funcion a la variable
    // (En Js todos los objetos pasan por referencia No se crea una copia)
    myFunction = addNumbers;
    // Si lo ejectuamos en la variable veremos que TS logra inferir los tipos de datos
    console.log(myFunction(1, 2));

    myFunction = greet; // Se la pasamos referencia
    console.log(myFunction('Jose'));

    myFunction = saveTheWord; // Se la pasamos referencia
    console.log(myFunction());

    // Con esto vimos que TS logra inferir los tipos a la hora de mandar a llamar la variable que contiene la funcion
    // La idea no es dejarla de tipo ANY sino decirle a la variable que acepte solo funciones de cierto tipo
    let myFunction2: Function;
    
    // Con el tipo de arriba nos aceptaria las tres funciones de arriba pero esta liena de abajo nos da error
    //myFunction2 = 10; -> Esto es de tipo Number no Function
    //console.log(myFunction2);

    // Si queremos definir de tipo funcion pero que solo acepte numero y regrese nuemros
    // Con "()=>number" es una funcion que regresa un numero y tambien le tenemos que definir los argumentos
    // El nombre de los argumento que le pongamos no es importante lo que importa son los tipos de datos
    let myFunction3: (y:number, z:number)=>number;
    // Con lo de arriba solo acepta esta funcion de las tres
    myFunction3 = addNumbers;
    // Si lo ejectuamos en la variable veremos que TS logra inferir los tipos de datos
    console.log(myFunction3(1, 2));

    // Para que acepte una funcion que tome un string y regrese un string
    let myFunction4: (y:string)=>string;
    myFunction4 = greet; // Se la pasamos referencia
    console.log(myFunction4('Jose'));

    // Para que acepte la ultima 
    let myFunction5: ()=>string;
    myFunction5 = saveTheWord; // Se la pasamos referencia
    console.log(myFunction5());

    // Si sabemos que la funcion no va a regresar nada podemos poner en la definicion del tipo de dato VOID
})();