(()=>{
    
    // Si esto fuera una clase tendiramos que implementar los metodos pero para una interface
    // no se requiere que implemente solo que donde se implemente el tipo de dato este sera el que lo implemente
    interface Client {
        // Aqui le decimos como debe de lucir el objeto
        name: string;
        age?: number;
        address: Address;
        // Esta es otra diferencia entre los tipos y las interfaces, que es la definicion
        // de los metodos donde despues de lo que retorna se ponen los dos puntos
        getFullAddress( id:string ): void; // Podemos regresar cualquier tipo de datos hasta los deifnidos por nosotros o instancia de clase
    }

    // Cuando se requiera la implementacion de metodos lo mejor es crear una clase
    // Ademas las interaces no crean instancias

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Juan',
        age: 25,
        address: {
            id: 125,
            zip: '33130',
            city: 'Ottawa'
        },
        getFullAddress(id:string) {
            return this.address.city;
        },
    }

    const client2: Client = {
        name: 'Jose',
        age: 30,
        address: {
            id: 123,
            zip: '33130',
            city: 'canada'
        },
        getFullAddress(id:string) {
            return this.address.city;
        }, 
    }
})();