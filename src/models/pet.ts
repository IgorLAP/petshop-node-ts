type PetType = 'dog' | 'cat' | 'fish';
type PetSex = 'Masculino' | 'Feminino';
type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: PetSex
};

const data: Pet[] = [
    {
        type: 'dog',
        image: 'chuchu.jpeg',
        name: 'Chuchu',
        color: 'Preto e marrom',
        sex: 'Feminino'
    },
    {
        type: 'cat',
        image: 'purpurino.jpg',
        name: 'Purpurino',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'messi.jpg',
        name: 'Messi',
        color: 'Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'montserrat.jpg',
        name: 'Montserrat',
        color: 'Marrom e branco',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Carlos',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Francisca',
        color: 'Branco',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'José Apolonio',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'mimosa.jpg',
        name: 'Mimosa',
        color: 'Branca e preta',
        sex: 'Feminino'
    },
    {
        type: 'cat',
        image: 'lia.jpg',
        name: 'Lia',
        color: 'Preta',
        sex: 'Feminino'
    },
    {
        type: 'cat',
        image: 'michonne.jpg',
        name: 'Michonne',
        color: 'Várias cores',
        sex: 'Feminino'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Gibraltar',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Lynch',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Masculino'
    },
]

export const Pet = {
    getAll: () : Pet[] =>{
        return data;
    },
    getFromType: (type: string): Pet[] =>{
        return data.filter(item=>item.type === type)
    },
    getFromName: (name: string): Pet[] =>{
        return data.filter(
            item=>item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        );
    }
};