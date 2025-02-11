(()=>{
    // Creacion de la clase Abstracta
    abstract class Mutante {
        constructor(
            public name:string,
            public realName: string
        ){}
    }

    // A las instancias aunque TS las infiere que son del tipo de la clase tambien
    // podemos definirle el tipo de dato como si fuera de la clase 
    // const wolvering: Mutante = new Mutante('Wolvering','Logan');

    // De las clases abstractas no podemos crear instancias 
    // este tipo de clases solo sirven para crear otras clases o asegurarnos que otras clases implementen lo que esperamos
    class Xmen extends Mutante {
        // Le definimos los metodos y propiedades especializados para esta clase
        salvarMundo(){
            return 'Mundo Salvado';
        }
    }
    class Villaian extends Mutante {
        conquistarMundo() {
            return 'Mundo Conquistado';
        }   
    }

    // Ahora si de la clase que hereda de la clase abstracta si podemos crear ina instancia
    const wolvering = new Xmen('Wolvering', 'Logan');
    console.log(wolvering.salvarMundo());

    const magneto = new Villaian('Magneto', 'Magnus');
    console.log(magneto.conquistarMundo());

    // El otro uso de la clase abstracta es que tambien nos puede servir para especificar que estamos 
    // esperando alguna clase u objeto o argumento que tenga heredado el tipo de la clase abstracta
    // Aqui estamos esperando un argumento que sea del tipo de la clase abstracta 
    const printName = ( character: Mutante ) => {
        // Asi gracias a la especificacion de los tipos de datos obtenemos los mensajes de Autoayuda
        console.log(character.name);
    }

    // Si la clase Xmen no hereda de Mutanto entonces no podra ser recibida
    printName(wolvering );
    
})();