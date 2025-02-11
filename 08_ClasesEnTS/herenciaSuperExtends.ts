(()=>{
    class Avenger{
        
        constructor( 
            public name:string,
            public realName:string
        ){
            console.log('Constructor avenger Llamado');
        }

        // Aqui tenemos las propiedaes Private y Protected
        // En la Private solo podemos acceder a este metodo en esta clase
        private getFullName() {
            return `${ this.name } ${ this.realName }`;
        }

        // Con el protected
        // Podemos acceder desde las clases derivadas
        protected getFullName2() {
            return `${ this.name } ${ this.realName }`;
        }
    }

    // No solo hereda las propiedades y metodos sino que tambien las restricciones que tenga
    class Xmen extends Avenger{
        // En el momento que le definamos constructor vamos a tener errores al inicio
        constructor(
            // Las propieda que recibe el padre las tenemos que definir aqui, sin los modificadores de acceso
            // porque no las estamos creando desde cero
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            // Tenemos que definir el consttructor de la clase padre sino tendremos errores
            // Si los argumentos de la clase padre son obligatorios se los tendremos que mandar y especificar
            super(name, realName);
            console.log('Constructor del Xmen llamado');
        }

        // Para acceder al metodo protected de la clase padre
        getFullNameSiceXmen(){
            console.log( super.getFullName2() );
        }

    }

    // Este constructor por defecto nos pide los datos del constructor de la clase padre
    // Si no le definimos constructo por defecto llama al constructor del padre
    const wolvering = new Xmen('Wolverine', 'Logan', true);
    console.log(wolvering);
})();