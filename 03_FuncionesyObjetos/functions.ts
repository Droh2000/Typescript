(()=>{
     const hero:string = 'flash';

     function returnName():string {
        return hero;
     }

     // Si ponemos el cursor encima de esta veremos que regresa algo de tipo Function
     const batiSenal = () => {
        return 'Batisenal Activada';
     }
     // Asi comptovamos mejor lo que regresa
     console.log(typeof batiSenal);

    // Aqui vemos que TS infiere correctamente el tipo de dato porque le especificamos el tipo de datos a "returnName()"
    const heroName = returnName();
})();