(()=>{

    class Avenger {
        // Le podemos definir propiedades pero en JS estos es ambiguo
        // En versiones mas recientes de JS se pueden poner propeidaes privadas
        name;
        power;
        // En Js definir las propiedades no es nesesario, los podemos quitar y funcionara todo igual

        // Como no podemos declarar tipo de datos queda a la decicion del usuario los datos a mandar
        // Lo mas que podemos hacer en JS es que si no nos manda nada le podemos especificar valores por defecto
        constructor( name = 'No Name', power = 0) {
            // Al crear una instancia se ejecuta automaticamente el constructor
            this.nome = name;
            this.power = power;

            // En Js podemos definir otra propiedad que no existan con this y no obtendremos errores
            this.otraPropiedad = true;
        }
    }

    // Herencia
    class FlyingAvenger extends Avenger {
        flying;

        // Si no le definimos esto, si al hacer la instancia le mandamos los campo con la informacion al imprimir la instancia
        // no obtendremos nuevos resultados, le podriamos mandar mas argumentos que de los que recibe y no pasara nada ni errores
        // Asi que hay definirle las propiedades aqui
        constructor( name, power){
            super( name, power ); // Tenemos que decirle que tome el constructor del padre
            this.flying = true
        }
    }

    // Si no defeinimos las propiedaes obtendremos Undefined
    const hulk = new Avenger('Hulk', 9000);
    const falcon = new FlyingAvenger('Falcon', 50);

    console.log(hulk);
    
})();