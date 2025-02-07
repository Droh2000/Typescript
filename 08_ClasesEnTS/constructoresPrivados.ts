(()=>{
    // Los constructores privados se utilizan para controlar la manera en que las instancias son ejecutadas
    // El caso en el que se utiliza esto es como para los patrones de diseno de singleton
    // y asi se crea una sola instancia en toda la aplicacion y asi creamos las instancias que pueden ser creadas
    class Apocalipsis {

        // Propieadad del mismo tipo de la clase
        // La primera vez esto es NULL
        static instance: Apocalipsis;

        // La idea es de ponerle la palabra Private es que controlamos la forma en la que en el constructor es llamdo
        // Este constructor solo se puede llamar dentro de la misma clase
        private constructor( public name: string ){

        }

        // Metodo para crear la instancia de la clase que nos debe de regresar una instancia de la clase
        static callApocalipsis(): Apocalipsis {
            // Preguntas si en la propiedad llamada "Instancia" (Si no existe)
            // Entonces dentro creamos una nueva instancia de apocalipsis
            if( !Apocalipsis.instance ){
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis el unico');
            }
            return Apocalipsis.instance;
        }
        // el pricipio de esto es que cada vez que queramos utilizar la clase siempre va a ser la misma instancia que se creo la primera y unica vez vez

        // Metodo para cambiar nombre
        set changeName(newName: string){
            this.name = newName;
        }
    }

    // Aqui vemos como podemos crear todas las instancias que nos de la gana con un constructor Publico
    /*const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... El unico');
    const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... El unico');
    const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... El unico');

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);*/

    // Ahora para crear la instancia de la clase se hace de esta manera
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    // Usamos el metodo para cambiar de nombre
    apocalipsis1.changeName = 'Se cambio de nombre';

    // No importa que tantas demas instancias se creen Siempre vamos a obtener la primera que se creo
    // Todas estas apuntaran siempre a la misma instancia
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
});