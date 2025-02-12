(()=>{
    // Queremos hacer una interfaz que nos ayude a controlar otros objetos que tengan esa misma caracteristica
    interface Client {
        name: string;
        age?: number; // A la edad le decimos que es opcional
        // La direccion es opcional pero cuando se define que se tengan que definir todos sus campos
        /*address?:{
            id: number;
            zip: string;
            city: string;
        }*/
       // Usualmente cuando trabajamos en TS y la interfaz ya tiene mas de un nivel, NO es recomendable
       // que empezemos a anidar este tipo de Tipados porque es difil de leer y un poco de mantener
       // Para este caso nos creamos otra interfaz
       address: Address;

       // En TS la interfaz principal va a arriba y luego abajo van las que se ingresan
       // este es un estandar a mantener siempre el mismo nivel de identacion
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Juan',
        age: 25,
        // Supongamos que tenemos otros objetos mas complejos
        address: {
            id: 125,
            zip: '33130',
            city: 'Ottawa'
        }
    }

    const client2: Client = {
        name: 'Jose',
        age: 30,
        // Si queremos definirle tambien la direccion
        address: {
            id: 123,
            zip: '33130',
            city: 'canada'
        }  
    }
})();