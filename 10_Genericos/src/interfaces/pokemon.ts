// Ahora podriamos pensar en que para cada una de las cosas que nos regresa la respuesta tenemos que mapearlas manualmente a los tipos de datos de la interface
// Para hacer el mapeo de manera rapida podemos usar programas como Postman para obetener toda la respuesta en Raw JSON y nos copiamos todo el codigo
// DE ahi nos vamos al enlace de "Quicktype.io" para hacer el tipado de la informacion
// Le damos un nombre y Copiamos todo el JSON, en la configuracion nos aseguramos que sea solo para Typescript y que sea en Interfaces Only
// Supongamos que aqui copiamos y pegamos todo el codigo obtenido
// Si la respuesta cambiara solo tendriamos que volver a ejecutar el procedimiento y ver que cambio y asi veremos gracias a TS en todos los archivos donde afecta ese cambio

// Si no quremos ir a la pagino podemos instalar la extencion de Visual Studio Code "Paste JSON as Code"
// Ctrl + p para abrir la paleta de comando y abrimos la extencion, le pasamos el nombre que tendra el archivo y enter
export interface Pokemon{
    name: string;
    picture: string;
}