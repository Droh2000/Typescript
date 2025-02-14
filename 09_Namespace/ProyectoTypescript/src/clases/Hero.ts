import powers from '../data/power';

// Como queremos usar esta clase en otros archivos lo vamos a export
export class Hero{
    // Cualquier cosa que le ocurra de cambioa a la clase nos avisara TS en todos los lugares donde da error o se tiene que .
    // implementar ese cambio, cosa que no tenemos en JS
    constructor(
        public name: string,
        public powerId: number,
        public age: number,
    ){}

    get power(): string{
        // La linea de abajo nos puede dar un codigo de undefined que sera un error por lo tanto le tenemos que indicar con el simbolo ?
        // que verifica si nos da NULL no sigue adelante y no ejecuta el codigo 
        // Tambien se puede poner el simbolo de Admiracion "!"  donde le decimos a TS que confie en nosotros porque siempre encontrara contenido
        return powers.find( power => power.id === this.powerId )?.desc || 'Not Found';
    }
}