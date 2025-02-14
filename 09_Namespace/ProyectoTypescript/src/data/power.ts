
export interface Power{ // Esta es una exportacion Normal
    id: number;
    desc: string;
}

const powers: Power[] = [
    {
        id: 1,
        desc: 'Money',
    },
    {
        id: 2,
        desc: 'Drugs',
    }
]

// Exportacion por defecto
export default powers;