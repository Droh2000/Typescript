(()=>{
    // En el argumento opcional le colocamos un signo de interrogacion
    const fullName = ( firstName:string, lastName?:string ):string => {
        // El arugmento opcional si no se manda se le dara un Undefined
        // Aqui le agregamos el operador OR para ponerle otra cosa en caso que no venga
        return `${ firstName } ${ lastName || 'No Content' }`;
    }
    // En JS todos los argumentos de las funciones son opcionales, no hay manera de obligarle al usuario que ingrese 
    // los valores ni los tipos de datos que son

    const name = fullName('Tony');

})();