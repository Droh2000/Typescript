
// Creacion de Decoradores (Recordemos que no son mas que simples funciones)
// Se recomienda crearlos con la Funcion tradicional
// Como argumentos vamos a recibir un constructor
function printToConsole( construction: Function ){
    // Esta es una funcion decorador que se aplica a la clase la cual retorna el constructor de la misma
    // donde inclusive podemos declararlo como la instancia de la clase:
    // console.log(new construction('Picacu')); -> Nos da error pero si nos vamos al console veremos que nos imprime una instancia de clase
    // Esta intancia solo se crea una vez en el momento de la transpilacion del mismo (Si creamos ortras instancias no se nos mostrara mas que la primera)
    console.log(construction);
}

/*
    Factory Decoratory

    Por ejemplo si queremos mostrar de manera condicional mostrar informacion o recibir argumentos
    que van a ser enviados al decorador al momento de ejecutar la clase (Esto no lo podemos hacer en la funcion de arriba)
    asi que nos creamos 

    Para que esto sea un Factory Constructor nos debe de retornar una funcion
    esa funcion retornada se ejecutara cuando la clase sea transpilada 

    La ventaja de usar estos Factory Decorator es que nos permite mandar algun argumento a la hora de utilizarlo
    En este se le indicara con un valor booleano si queremos imprimir el contenido o no
*/
const printToConsoleConditional = ( print: boolean = false ):Function => {
    //return () => console.log('Hola Mundo');
    // Si es true retornamos una funcion (Que en este caso es la que creamos arriba) si es false sera una funcion cualquiera
    return print ? printToConsole : ()=>{};
}

// Con los decoradores tambien podemos cambiar la funcionalidad completa de una clase y generar lo que queramos
// En este caso vamos a crear un decorador para bloquear el prototipo de una clase es decir que no se va a poder expandir
// En TS tenemos mas estricto la expancion por los tipos de datos
const bloquearPrototipo = function( constructor: Function ){
    // Con Object tomamos toda la definicion del objeto y con el metodo Seal bloqueamos la expancion
    // Con esto prevenimos la modificacion de los atributos o propiedades existentes y previene que se agregen nuevas propiedades
    // Aqui le decimos que vamos a bloquear el constructor
    Object.seal( constructor );
    Object.seal( constructor.prototype );
    // Con este decorador previnimos que accidentalmente o de manera accidental vaya a modificar las propieades o metodos de una clase
    // La razon del bloqueo es para que nadien accidentalmente cambie la funcionalidad de la clase o pieza del codigo
}

// Este decorador lo usaremos en el metodo
// Usaremos Factory Decoratory porque no sabemos si a futuro requerimos recibir argumentos
function CheckValidPokemonId():Function{
    // Como lo vamos a usar como un decorador de un metodo se va a disparar con ciertos tipos de argumentos y va a depender de lo que le coloquemos
    // que seria el Target, el propertyKey seria el nombre del metodo que estamos decorando que es de tipo String
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ){
        // Viendo estos argumentos que se reciben en el decorador
        // propertyKey -> Tiene el nombre del metodo que esta decorando
        // descriptor -> Tenemos para ponerlo solo como escritura o lectura el cual nos sirve si solo implementamos ReadOnly
        // target: -> Es el objeto que en este caso es el constructor
        // console.log({ target, propertyKey, descriptor });

        // Vamos a hacer la validacion de que esta funcion decorador verifique el ID que recibe el metodo donde se va a aplicar
        // y si ese id es menor a Uno o superior sabemos que ese valor no nos sirve y no ejecutemos el metodo donde se implementa

        // Aqui en esta linea de codigo lo que pasa es que apesar que el metodo donde se implementa la decoracion
        // es que si el metodo retornaba una cosa ahora por esta funcion decoradora nos va a regresar lo que implementamos aqui
        // Por consecuencia anulamos la logica que tenia originalmente implementado el metodo
        // descriptor.value = () => console.log('Hola Mundo');

        // En esta constante almacenamos la logica original que ya tenia el metodo donde se implemento el decorador
        const originalMethod = descriptor.value;

        // Vamos a analizar el argumento que se recibe y en base a ese argumento aplicar la logica o cambiarla 
        // Asi en la funcion que definimos en el "descriptor.Value" esta se va a disparar con los argumentos que recibimos en el 
        // metodo donde se implementa el decorador
        descriptor.value = ( id:number ) => {
            if( id < 1 || id > 800){
                return console.error('El id del pokemon debe estar entre 1 y 800');
            }else{
                // Caso contrario ejecutamos el codigo original del metodo donde se implementa el decorador
                // El problema es que esa logica ya esta dentro del "descriptor.value" y no podemos definirla otra vez dentro 
                // Para eso nos creamos la constante del inicio
                return originalMethod(id); // Le mandamos el argumento que espera el metodo original
            }
        }
    }
}

// Decorador para la propiedad (Como es un factory Decorator nos tiene que regresar otra funcion)
function readonly( isWritable: boolean = true ): Function {
    // Como esta sera aplicada solo en la propiedad entonces solo recibiremos el Target y propertyKey
    // Target -> Es todo lo que podemos modificar y podemos acceder a todos los demas elementos y la propiedad
    // propertyKey -> Nombre de la propiedad donde se usa el decorador
    return function(target: any, propertyKey: string){
        // Cuando usamos los decoradores en propiedades lo que usamos son los PropertyDescriptor (Es como crear el objeto descriptor)
        // Le definimos el tipo de dato de PropertyDescriptor
        const descriptor: PropertyDescriptor = {
            // Si no definimos nada estariamos bloqueando el acceso a la propiedad
            // Para especificar si se lee o se modifica le creamos los metodos de Setters y Getters
            get(){
                // Lo que definamos aqui remplazara lo que lo que definimos originalmente en la propiedad
                // Aqui podemos obtener varias cosas que nos ofrece todo el objeto como tal
                // Para eso Usamos el "THIS" que esta es una de las razones para usar las funciones tradicionales
                // porque si fuera una funcion de flecha con el this apunta a la logica que tiene afuera y no tendiramos acceso al decorador
                console.log(this);// -> esto se ejectua hasta que se abre y se ejecuta nuevamente el decorador porque se intenro tener acceso al mismo getter
                //                      Esto lo logramos hacer cuado en la consola del navegador donde de la imprecion de la clase damos click donde dice (...)
                //                      en el nombre de la propiedad "publicApi"
                // Cuando se accede o se intenta leer es cuando disparamos este logica dentro del Get() donde se imprime la instancia de la clase
                return 'algo';
            },
            set( this, val){// Tenemos acceso al This que es la instancia de la clase y el Valor que seria lo que le estamos intentando establecerle
                // Este solo se debe disparar y cambiarse si no esta en modo lectura 
                // Asi cuando intentamos cambiar el valor de la propieadad como:
                //  charmander.publicApi = 'NUEVA_URL'; -> Aqui es cuando se va a disparar el metodo setter
                //  console.log(this, val);
                // En el console log veremos la parte que es la primera vez que es cuando se genera la clase y luego cuando se intenta hacer el cambio
                // y por ultimo nos mostrar el resultado final 

                // Para cambiarlo y bloquearlo que solo sea lectura 
                // Para esto usamos el Objetc y en su metodo le mandamos el this que es la instancia de la clase, el propertyKey que es lo que estamos decorando
                // que en este caso es el nombre de "publicApi" (Asi que vamos a establecer una nueva propeidad)
                // El tercer argumento es un propertyDescriptor (Ahi dentro definimos queremos que funcione)
                Object.defineProperty( this, propertyKey, {
                    // El value es el valor que estamos recibiendo como argumento en el Setter, asi solo la primera vez que se ejecute esto va a dejar escribir
                    value: val,
                    // Para decirle que solo sea de lectura que como el valor por defecto viene en true hacemos la negacion
                    writable: !isWritable,
                    // Con esto es para que la pripiedad no se pueda ver
                    enumerable: false,
                });
            }
        }

        return descriptor;
    }
}

// Usamos la funcion de arriba como un decorador (Nosotros podemos declararle tantos decoradores como los requeriamos)
// @printToConsole
// @printToConsoleConditional( true ) // A este le tenemos que definir los parentesis
@bloquearPrototipo
export class Pokemon{

    // Aplicacion del Decorador en las propiedades
    // Este lo usaremos para bloquear esta propiedad y que solo sea de lectura 
    // Si esta propiedad la ponemos en Privado de todas formas veremos la propiedad
    // ya que aunque TS nos de error podemos tomar de todas formas la propieadad y cambiarla desde donde se instancia la clase
    // Supongamos que la queremos dejar publica porque puede que en otros lugares se puedan acceder pero no queremos que alguien lo pueda cambiar
    // (Que sea solo lectura y nadien lo pueda cambiar)
    @readonly() // Entre los parentesis le podemos definir que si se le permita modificar el valor de la propiedad entonces le pasamos False
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ){}

    // Decoradores de metodos
    @CheckValidPokemonId()
    savePokemonToDB( id: number ){
        console.log(`Pokemon guardado en DB ${ id }`);
    }
}

// Los decoradores se usan principalmente en los framework pero no se crean si no que 
// solo se implementan para agregarle funcionalidades al objeto que le queremos aplicar eso
// solo se mandan a llamar el decorador y se le pasan los argumentos o valores que requiera
// Ademas hay que tener en cuenta que se ejecutan en el momento de la transpilacion o compilacion dle codigo