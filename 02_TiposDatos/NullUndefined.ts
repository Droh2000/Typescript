 (()=>{
    // Por defecto en TS tenemos la propiedad de "strictNullChecks=true" para que ninguna variable
    // que creemos pueda tener undefined o null

    // Si creamos una variable que pueda tener undefined se lo asignamos el tipo con un |
    let isActive: boolean | undefined = undefined;

    // En teoria un valor booleano podria tener: true, false, undefined, null


 })();