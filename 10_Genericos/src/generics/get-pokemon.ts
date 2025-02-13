// import axios from 'axios'; // -> Se comento la linea porque no se instalo en el proyecto y nos da error
import { Pokemon } from '../interfaces';

// Al agregar que es de tipo asincrona veremos que transforma la funcion normal en una Promesa
// que es de tipo generico porque vemos que esta en <TipoDeDato > y ese tipo de dato va a resolver lo que se encuentre en las llaves
// Aqui dentro crearemos la peticion HTTP con Axios

// Si queremos ponerle el tipo de respuesta pensariamos en definirselo igual que siempre con los dos puntos y el tipo de dato pero
// al ser una promesa el tipo se vuelve Promise<T> que seria de tipo generico por lo tanto el tipo que regresa lo tenemos que poner dentro de promise
export const getPokemon = async( pokemonId: number): Promise<Pokemon> => {
    // Al poner el cursor encima del metodo GET veremos que recibe: URL de tipo String, unas Configuraciones que son opcionales
    // de los tipos de Axios o un undefined despues del cierre de parentesis y los dos puntos es el retorno que es un promeso del tipo de axios
    // que es un generico dentro de otro generico
    // El Await espera a que la promesa se resuleva y luego continua ejecutando el programa
    // La respuesta obtenida es de tipo AxiosResponse que maneja ANY, este any lo podemos controlar porque el GET le podemos especificar el tipo de dato que queremos
    // Asi que a la respuesta la queremos de un tipo especifico despues del get ponemos <>
    // Para esto hacemo Uso de la interface que creamos que contiene los tipos de datos y campos que esperamos que nos regresa la respuesta
    
    // Gracias a la implementacion del tipado de la respuesta con QuickeType.io podemos desestructucturar los datos que nos interesa
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);

    // Gracias a TS tenemos todos los metodos que Axios nos da para acceder a la respuesta
    // Solo accedemos a la primera propieadad, por ejemplo: resp.data pero si de la data queremos acceder con otro punto a las demas propiedades
    // no obtendremos niguna autoayuda porque TS no sabe el tipo de dato que nos regresa toda la peticion HTTP
    // Para obtener la autoayuda le decimos que lo que viene en la respuesta especificamente en el apartado de la Datava a ser algo que luce como un pokemon
    // Cuando usamos la interface en un formato generico nosotros no trasformamos la respuesta ya que sigue luciendo exactamente iguallo que pasa es que ahora TS
    // sabe gracias a la interface las propieades que esperamos recibir
    // Aqui le decimo que la peticion GET va a ser de tipo Poken por consecuencia tenemos la autoayuda lo que pasa es que en la respuesta
    // no tenemos la propiedad de "Picture" esta nos sale porque esta definida en la interface 
    // La interface sirve para decirle a TS como luce un objeto, no nesesariamente ese objeto va a tener esas propiedades (Debemos de corregir ese error que nos sale la propiedad cuando no deberia)
    // ESTO SE RESOLVIO GARACIAS A LA OBTENCIO DEL TIPADO DE TODA LA RESPUESTA CON "QuickType.io"
    // console.log(resp.data.name);

    // Despues de esto pusmos como el retorno del dato de la funcion que va a ser de tipo: Promise<Pokemon>
    // Con esto debemos de retornar lo que nos cumpla la interface de Pokemon que en este caso es de la respuesta .Data que es donde la implementamos
    // return resp.data;
    return data;
}

