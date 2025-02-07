(()=>{
    class Avenger{
        // Aqui si tenemos los modificadores de acceso, aqui es buena practica definirle los mosificadores
        private name: string;
        private team: string;
        public realName?: string; // Tambien podemos hacerlas opcionales 

        // Tambien podemos definir propiedades estaticas
        static avgAge: number = 35;

        // Podemos recibir los argumentos especificandolos uno por uno
        constructor( name:string, team:string, realName?:string){
            this.name=name;
            this.team=team;
            this.realName=realName;
        }

    }

    // Instancia de la clase
    const antman: Avenger = new Avenger('Antman','Capitan');
    // Aqui si tenemos la autoayuda al usar un objeto de la clase
    console.log(antman.realName);

    // Acceder a la propiedad estatica
    console.log(Avenger.avgAge);
})();