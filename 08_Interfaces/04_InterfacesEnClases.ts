(()=>{
    interface Xmen{
        name: string;
        realName: string;
        mutantPower( id: number ): string;
    }

    interface Human {
        age: number;
    }

    // Queremos relacionar la interface con la clase a la cual le queremos 
    // decir que implemente cada elemento de la interface
    // No podemos usar Extends ya que esto solo se puede usar en las clases pero si le podemos
    // de decir que impleemnta la interface, Si queremos implemntar mas de una interface las separamos por comas
    class Mutant implements Xmen, Human{
        // Asi cumplimos con las porpiedades de las interfaces
        public age: number;
        public name: string;
        public realName: string;

        mutantPower(id: number): string {
            return `${this.name} -> ${id}`;
        }
    }

    // La ventaja de las interfaces para el tipo de dato es cuando no sabes si a futuro tendran que crecer
    // y usamos un Tipo cuando estamos seguro que no no va a crecer ni extenderse con nada por ejemplo en 
    // acciones especificas de REDUX
})();