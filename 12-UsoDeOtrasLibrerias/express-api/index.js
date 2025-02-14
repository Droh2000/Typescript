// Aqui vamos a usar Node Express para crear API y veremos como utilizarlo con TS
// Esto lo tenemos que instalar en esta carpeta por linea de comandos
// En estas lineas codigo crewamos un web server

const express = requireO('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //res.send('Hello World!');

    // Asi se manda en JSON
    res.json({
        ok:true,
        msg: 'Todo salio bien!'
    });
});

app.listener(port,() => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Estas lineas de codigo son la sintazis de EXpress pero si lo queremos usar en TS
// Podemos cambiar la extencion del archivo de JS a TS
// Pero al compilar con: tsc index.ts -> Al hacer esto nos dara Errores
//  en la misma consola de TS nos pide que instalemos archivos de definicion para node 
//  que seria un paquere para que TS reconosca las lineas de codigo de Node
//  cuando veamos un @types/NOMBRE_DEL_PAQUETE significa que es un archivo de definicion
//  estos archivos son por ejemplo: index.d.ts -> Este seria como una gran interfaz donde 
//  se definen todos los metododos y propiedades que se puedan usar

// Para resolver el ERROR
// No queremos que nos este tirando todo el resultado de la transpialcion en un solo directorio porque eso nos llevaria
// a que se nos crean un monton de archivos de TS y de JS para solucionar esto nos creamos un nuevo directorio "dist"
// de distribucion, ahi colocamos el producto de transpilacion
// Ejecutamos el siguiente comando para que todo lo empieze a mandar a "tsc --init" -> Con esto creamos el archivo de configuracion de TS
//     Dentro del archivo en "outDir": './dist'
// Despues de esto gracias a que ya tenemos el archivo de definicion de TS ya nos detecta los errores en este index.ts 
// Desues hacemos varios cambios -> Primero esta la importacion donde la cambiamos por una importacion normal de TS ya que esa es la importacion
// de TS: import express from 'express'; 
// De aqui nos dara un error y nos dira TS que ejecutemos un comando para instalar las dependencias de desarrollo
// con esto podremos tener el tipado de todo lo que contiene express
// Despues de instalarlo se resuleven los errores de TS
// Asi ya tenemos los metodos de Autoayuda de Node ademas tenemos tipado en todo, las formas en las que podemos construir las cosas
