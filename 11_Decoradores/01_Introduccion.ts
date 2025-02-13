/*
    Un decorador es como una simple funcion que se ejecuta en el momento de compilacion o en el momento de transpilacion 
    El algo que permite expandirle o agregar la funcionalidad de un metodo, una clase o una propiedad
    Estos fueron creados originalmente para hacer el codigo mas facil de leer
    Al ver un '@' antes de una funcion, metodo, propiedad o clase eso significa que es un decorador, despues del @ seria el nombre del decorador
    si despues del nombre siguen parentecis significa que es una funcion, si tiene {} significa que es un objeto
    dentro puede contener argumentos que se le mandan al decorador
    
    En una clase por ejemplo de manera simple puede tener solo su definicion y su metodo pero al agregarle decoradores
    como "@Controller" la clase ya podria manejar peticiones HTTP y enlazar con otras parte del framework
    Esto es lo que hace el decorador que expande o agrega mas funcionalidades o tambien las pueden restringir a otros elementos

    En este caso vamos a crear decoradores aunque en la vida real solo se implementan ya que es raro que se tengan que crear los decoradores
*/