(()=>{
    // En la definicion ya le especificamos que tendra un argumento de tipo funcion que nos retorna un String
    let flashOpcional: { name:string, age?:number, powers: string[], getName?:()=>string  } = {
        name: "Barry Allen",
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    }    

    flashOpcional = {
        name: "Clark Kent",
        age: 60,
        powers: ['Super Fuerza'],
        getName(){
            return this.age;
        }
    }
})();