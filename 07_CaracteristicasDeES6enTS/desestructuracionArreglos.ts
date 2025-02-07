(()=>{
    // Siempre hay que definirle el tipo de elementos que maneja el Arreglo
    const avengerArr: string[] = ['Capitan','Hierro','Shrek'];

    // Para la desestructuracion no podemos usar la llavez porque eso seria de un objeto
    // por lo tanto se ponen las llavez cuadradas, los valores del arreglo que no queramos 
    // les ponemos solo una Coma y en los lugares donde si queramos el valor les damos un nombre cualquiera
    const [ ,ironman,] = avengerArr;

    console.log({ironman});

    // Si lo hacemos con una Tupla
    const avengerTupla: [string, boolean, number] = ['Capitan', true, 150.15];

    // Si dejamos encima el cursor de estas dos propiedades sabe TS el tipo de dato que son
    let [ capi, iron,] = avengerArr;

    console.log({capi, iron});

    // La desestructuracion funciona mejor si tenemos bien definidos los tipos ya que cada una de las variables que
    // desestructuramos se les mantiene el tipo de datos en el que se defnieron en el arreglo o tupla
})();