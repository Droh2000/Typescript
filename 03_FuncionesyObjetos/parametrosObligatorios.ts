(()=>{
    // Tenemos que evitar que TS nos asigne de tipo ANY asi que siempre hay que definir los tipos de datos
    const fullName = ( firstName:string, lastName:string ):string => {
        // TS no nos hace inmune a errores porque alguien puede crear una variable ANY y mandarsela
        // o declarar una variable String pero no definirle un valor
        return `${ firstName } ${ lastName }`;
    }

    // Por como definimos los argumentos de la funcion TODOS son obligatorios
    // TS se encargara en todo momento que se manden los argumentos requeridos sin tener que estar agregando validaciones
    const name = fullName('Tony','Hot');

})();