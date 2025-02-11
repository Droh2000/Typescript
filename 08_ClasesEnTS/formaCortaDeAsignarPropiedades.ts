(()=>{
    class Avenger{
        /*private name: string = 'No Name'; // Tambien les podemos dar valores por defecto
        private team: string;
        public realName?: string; 
        */

        static avgAge: number = 35; // Las estaticas no se puede definir en el constructor
        
        // Esta es la forma corta de definir las clases que es mas comun de usar que la forma tradicional
        // Asi evitamos defininr las propiedades aparte y lo hacemos aqui mismo (Establecemos y creamos las propiedades)
        constructor( 
            private name:string, 
            private team:string,
            public realName?:string,
            // En el caso de querer cambiar el valor de la propieade estatica 
            avgAge: number = 55, // Si lo colocamos despues de un argumento Opcional nos dara error, asi que lo tenemos que poner antes o colocarle un valor por defecto
        ){
            // Tampoco estamos obligados a definir con el this
            // Esto es para modificar el valor de la propiedad estatica
            Avenger.avgAge = avgAge;
        }

    }

    const antman: Avenger = new Avenger('Antman','Capitan');
    console.log(antman.realName);

    console.log(Avenger.avgAge);
})();