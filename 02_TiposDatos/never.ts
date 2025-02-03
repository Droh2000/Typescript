(()=>{
    // Si le especificamos a la funcion que el valor de retorno es NEVER
    const abc = (message: string):never => {
        // Una funcion que retorna NEVER no puede tener un final alcanzable
        // En pocas palabras el never significa que la funcion no debe terminar exitosamente
        throw new Error(message);
    }
    // Cuando veamos que una funcion es NEVER debemos que saber donde se ejecuta la funcion ya no va 
    // a seguir el codigo ya que esta funcion no debe tener un pulto alcanzable al finalizar la funcion
    abc('Auxilio');

    // funcion que puede que reviente por un Error o puede que regrese un valor numerico
    const error = (message: string):(never|number) => {
        if(false){
            throw new Error(message);
        }
        return 1;
    }
})();