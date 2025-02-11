(()=>{
    // El uso de VAR en TS no deberiamos de usarlo ya en aplicaciones modernas
    /*
        Con var esto funciona
            console.log(a);
            var a = 'Algo'

        Con Let nos dara error
            console.log(a);
            let a = 'Algo'

        Lo mismo dara error en Const
            console.log(a);
            const a = 'Algo'
    */
   // El manejo de las constantes  (Al nunca cambiar de valor TS infiere mejor el tipo de dato)
   // Podemos tener un objeto que es una constante y las propiedades internas pueden cambiar
   const heroe = {
        a: 1,
        b: 2
   }
   // Si se pueden cambiar sus propiedaees pero lo que es la asignacion a otro objeto ya no
   // heroe = {} -> Da Error
   heroe.b = 100;  // Esto si es permitido

   // Tambien se recomienda el uso de la asignacion de las funciones en las constantes
   const getName = function(){}

   // Lo cual al quierer cambiar el valor de la variable por otra funcion nos dara error
   // getName = () => {}; -> Esto nos dara error

   // Con el uso CONST protegemos la reAsignacion ya si creamos una funcion normal, su nombre lo
   // podemos reasignar en JS
   /*function getAlgo() {
        console.log('vieja funcion');
   }
   getAlgo = () => { console.log('Nueva funcion') }

   getAlgo();*/

   // Al compilar nuestro TS al estandar del ES6 nos daran todos estos errores de asignaciones que no deberian 
   // de permitirse porque si en el archivo Tsconfig.json tenemos en el target el ES5 vermeos que no tenemos errores
    
})();