/*
    Si ponemos el cursor encima de la variable, veremos El tipo de dato que nos detecta el IDE
    Si le ponemos LET nos dira de tipo STRING
*/
const msg = 'Hola mundo';
// msg = 123; // Nos dara Error poque ya es String y aademas es Constante

// Definir con el tipo de dato Asignado
// Esto nos Dara ERROR si lo ponemos en el HTML para ver la variable
const msg2: string = 'Hola';
console.log(msg2);

// Para decirle a TypeScript que nos genera la version de JS de nuestro archivo TS y NO de Error
// En la Terminal: tsc NombreArchivo -> Esto nos generara un archivo JS

// Despues de esta conversion podremos ver Errores en nuestro archivo de TS, de "Block-scoped", esto sucede porque TS
// por la forma en la que tenemos los archivos, piensa que las variables que tenemos definidas en el archivo .ts va a chocar
// con el archivo .js

// Esto es lo que se hace:
// Codificamos Codigo en Typescript 
// Lo traducimos a JavaScript
// El codigo de JS es el que se ejecuta en el navegador Web
// (Igual depende de la Aplicacion porque en algunas si se Trabaja directamente en TypeScrip)

// TSConfig.json (Archivo de Configuracion)
// En la Terminal: tsc --init 
/*
    Aqui podemos definir el estandar del ES de JS que queremos usar 
    Manera de Cargar modulos
    La salida que requerimos del archivo, directorio de salida, directorio Raiz
    (Hay otras cosas que podemos terminar Activando)
    Podemos hacer que Typescript sea lo mas estricto posible (Aqui podemos configurar esto)
        Por defecto esta el modo estricto de JS donde obtendremos errores basicos de programacion
    
    La idea es que Typescript nos ayude a crear Codigo con la menor cantidad de Errores (Mas facil de leer y mas facil de mantener)
    
    Cuando implementamos TS en un Framework o Libreria ya por defecto nos viene este archivo con las configuracion recomendada

    YA CON ESTE ARCHIVO:
        No tenemos que traducir cada archivo TS a JS con solo poner:
            TSC
        Ya nos traduce todos los archivos TS a JS que tengamos
*/

/*
    Modo Observador (Watch Mode)

    TypeScript lo que hace es Transpilar para convertir el codigo a JS (Codigo que esta escrito diferente pero hacen lo mismo)
    cuando veamos estos archivos veremos que los archivos de TS son mas facil de leer que la contraparte de JS

    Pensemos ya tenemos los archivos convertios pero tenemos que seguir aplicando cambios en el TS y despues ejectuar el codigo en la terminal
    para convertir otravez a JS, asi cada vez que tengamos cambios en el TS
    
    Para esto tenemos el MODO OBSERVADOR en el cual detecta cualquier cambio en los archivos de TS y ejecuta la conversion de manera automatica
    el comano es:
                    tsc --watch
    
    Con esto cada vez que modifiquemos y guardemos un cambio en el archivo de TS, automaticamente tendremos el cambio en JS
    Hay que tener la consieracion de que SI TENEMOS ERRORES en el archivo de TS, de todas formas se nos va a convertir al archivo de JS
    (Si modificamos directamente el archivo de JS y no el TS, si despues modificamos el de TS y guardamos los cambios, todo lo modificado en el JS se borrara y se dejara como el de TS)



*/
