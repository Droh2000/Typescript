// A las importaciones si ya tenemos un objeto con el mismo nombre declarado en este archivo 
// entonces podemos cambiar de nombre la importacion
import { Hero as SuperHeroe } from "./clases/Hero";

// Hay otro tipo de importacion donde le decimos que todo lo que se este exportando de ese archivo
// va a ser conocido como el nombre indicado
// Con este HeroClases tenemos acceso a todo lo que se este exportamos en el archivo 
// (Esto sirve cuando tenemos muchas importaciones)
import * as HeroClases from "./clases/Hero";

// Importacion para la exportacion por Defecto
// Con una exportacion directa en el objeto usamos {} -> Aqui importamos la interface
import powers, { Power } from "./data/power";// En una exportcaion por defecto le podemos poner el nombre que queramos

const Hero = 123;

// Le pasamos el nombre de alias
const ironman = new SuperHeroe('Ironman', 1, 55);

// Creando la instancia usando la otra importacion
const ironman2 = new HeroClases.Hero('Ironman', 1, 55);

console.log(ironman);

console.log( powers );