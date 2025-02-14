// Nosotros hemos estado creando las funciones anonimas autoinvocadas y esto podria considerarse como un namespace
// el problema esta en que no podemos acceder a los elementos que contiene dentro
// Los namespace nos sirve de agrupador para que podamos utilizarlo en cualquier otro lado
namespace Validations {
    // Para poder usar estas funciones fuera tenemos que exportarlas
    // Exportamos solo lo que queremos que se pueda acceder desde afuera del namespace
    export const validateText = ( text:string ): boolean => {
        return ( text.length > 3 ) ? true : false;
    }

    export const validateDate = ( myDate: Date ): boolean => {
        return ( isNaN( myDate.valueOf() ) ) ? false : true;
    }
}

// Uso del NameSpace
console.log( Validations.validateText('Joe') );