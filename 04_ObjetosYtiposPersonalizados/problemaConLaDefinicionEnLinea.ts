(()=>{
    let flashOpcional: { name:string, age?:number, powers: string[], getName?:()=>string  } = {
        name: "Barry Allen",
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    }

    // Que pasaria si el dia de mañana tenemos que crearnos otro objeto que lusca ezactamente igual
    // Podriamos copiar y pegar el mismo codigo y solo cambiarle el nombre 
    let superman: { name:string, age?:number, powers: string[], getName?:()=>string  } = {
        name: "Clark Kent",
        age: 60,
        powers: ['Super Velocidad'],
    }
    // Pero si despues tenemos que cambiar el tipo de dato a la definicion de las propiedades
    // tendriamos que modificar cada uno de los objetos 
    // Ya de por si es dificil de leer toda la defincion de una sola linea de los tipos de datos
    // de las propiedades del objeto, la Solucion los Tipos Personalizados

})();