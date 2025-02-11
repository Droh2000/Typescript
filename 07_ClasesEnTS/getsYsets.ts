(()=>{
    class Avenger{
        
        constructor( 
            public name:string,
            public realName:string
        ){
            console.log('Constructor avenger Llamado');
        }

        private getFullName() {
            return `${ this.name } ${ this.realName }`;
        }

        protected getFullName2() {
            return `${ this.name } ${ this.realName }`;
        }
    }

    class Xmen extends Avenger{
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName);
            console.log('Constructor del Xmen llamado');
        }

        // Definicion de los metodos Get
        get fullName(){
            // Aqui tambien podemos aplicar logica aparte
            return `${ this.name } - ${ this.realName }`;
        }

        // Definicion de los metodos Setters
        // Solo se recibe exactamente un Argumento 
        set fullName( name: string ){
            // La ventaja es que podemos aplicar logica de programacion antes de retornae lo principal
            if( name.length < 3 ){
                throw new Error('El nombre debe de ser mayor de 3 letras');
            }

            this.name = name; // A la pripiedad le mandamos el nuevo valor que recibimos como argumento
        }
    }

    const wolvering = new Xmen('Wolverine', 'Logan', true);
    
    // Para ejecutar los Getters no se mandan a llamar con parentesis, solo se manda a llamar como si fuera una propiedad
    console.log(wolvering.fullName);

    // Para usar el Setters, ese valor cae al Setter con ese nombre donde le asigna el valor a la propiedad de la clase
    wolvering.fullName = 'Juanito';

    console.log(wolvering.fullName);

})();