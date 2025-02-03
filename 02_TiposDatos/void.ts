(()=> {
    function callBatman(){

    }

    // Viendo lo que nos regresa la funcion es que es de tipo Void
    // una funcion que no tenga el Return nos regresa undefined
    // VOID es una manera de decirle a TS que no hay un valor de retorno
    const a = callBatman();
    console.log(a);

    // Una funcion que no regresa nada es correcto ponerle el tipo de retorno
    function callBatman2():void{
        // Al definirle void si le ponemos dentro un return nos dara error
        // return 1;

        // Al hacerlo asi sera interpetrado como void y no regresa nada
        return;
    }

    // Para una funcion de flecha (Asi le indicamos que la funcion no regresa nada)
    const callSuperman = ():void => {
        // NULL no es lo mismo que undefinde
        //return null;

        return undefined;
    }

})();