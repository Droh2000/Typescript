(()=>{
    class Avenger{
        static avgAge: number = 35;
        
        constructor( 
            private name:string, 
            private team:string,
            public realName?:string
        ){}

        // Metodo
        // TS intuye que va retornar un String, por defecto si no ponemos nada es como ponerlo publico
        public bio(){
            return `${ this.name } (${ this.team })`;
        }

        // Metodo Estatico
        static getAvgAge() {
            // Las clases tienen un nombre y asi es como podemos acceder a su nombre 
            // (Esto NO ES la propiedad name que definimos)
            // Solo esta propiedad 'name' tenemos si queremos acceder a otra nos saldra Underfined
            return this.name;
        }

    }

    const antman: Avenger = new Avenger('Antman','Capitan');
    console.log(antman.realName);

    console.log(Avenger.avgAge);

    // Accedemos a los metodos
    console.log( antman.bio() ); // Si estuviera privado tendriamos error aqui aunque en JS seguria funcionando normal

    console.log( Avenger.getAvgAge() );
})();