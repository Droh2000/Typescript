(()=>{
    // Aplicacion de interfaces a funciones
    // Con esto restringimos la funcion y nos aseguramos que lusca de esta manera
    interface addTwoNumbers {
        // Esto es la funcion con sus argumentos y lo que retorna
        ( a:number, b: number ): number;
    }

    // Asignamos
    let addNumbersFunction: addTwoNumbers;

    // Implmentacion de la funcion
    addNumbersFunction = (a:number, b: number) => {
        return a + b;
    }
    // Esto es poco mun de ver y hacer ya que normalmente se hace lo luego la funcion y se implementa
})();