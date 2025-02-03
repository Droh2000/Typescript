(()=>{
    // Tenemos la nesecidad de tener varios rangos de valores para una variable
    // y para no permitir otros valores, los enums nos ayudan a ver los valores minimos, maximos , medios
    // u otros sentidos
    enum AudioLevel {
        min,
        medium,
        max
    };

    // En esta variable veremos que el tipo es de tipo AudioLevel
    let currentAudio = AudioLevel.medium;

    // AudioLevel sabemos que es una enumeracion y le estamos pasando el valor de medium a currentAudio pero
    // veamos ese valor que contiene (Esto nos da el valor de 1)
    // Si tuviera max seria el valor sera 2
    console.log(currentAudio);

    // Vemos que los valores serian 0, 1, 2 segun la posicion 
    // la idea de los enums es que nos permita tener un sentido semantico para establecer valores 
    // si imprimimos todo el objeto de la enumeracion (Esto seria un objeto)
    console.log(AudioLevel);

    // Con esto nos aseguramos que los valores que vamos a establecer a las propiedades o a en objetos en los cuales
    // no interesa que sean de tipo enumeracion siempre respeten los valores que la enumeracion permiten y no agregar uno nuevo
    // Algo del tipo de enumeracion no le podemos asignar otros valores (Solo se pueden asignar los que esten dentro del rango declarado 1,2,3)
    // let currentAudio2:AudioLevel = 10;

    // Si queremos que le de otros valores la enumeracion entonces se los especificamos nosotros
    enum AudioLevel2 {
        min = 1,
        medium, // Como este no tiene valor fijo entonces se le asigna el que tenga el valor anterior
        max = 10
    };

    let currentAudio2:AudioLevel2 = 2;

})();