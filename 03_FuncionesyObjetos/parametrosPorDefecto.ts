(()=>{
    // Tenemos que el primer argumento es obligatorio, el segundo es opcional y el tercero es obligatario, esto nos dara error
    // y es que una propiedad requerida no puede seguir de una opcional, si un argumento es opcional estos deben de ir al final
    // porque no hay manera de especificarle al llamar la funcion cual es opcional y cual es obligatorio
    // 
    // Aqui queremos que "upper" tenga un valor por defecto (Al hacer esto se nos quitan los errores)
    // eso significa que si no mandamos este parametro va a tener el valor de false
    const fullName = ( firstName:string, lastName?:string, upper:boolean = false ):string => {
        if(upper){
            return `${ firstName } ${ lastName }`.toUpperCase();
        }else{
            return `${ firstName } ${ lastName }`;
        }
        
    }

    // Al poner el cursor ensima veremos que el tercer argumento "upper" es opcional porque tiene un valor por defecto
    const name = fullName('Tony','Hot', true);

})();