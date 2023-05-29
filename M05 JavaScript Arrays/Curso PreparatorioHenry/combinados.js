const arrayDeObjetos =[
    {
        nombre: 'Marcela',
        edad: 38,
        comidaFavorita: 'Bandeja paisa'
    },
    {
        nombre: 'Doris',
        edad: 60,
        comidaFavorita: 'pipitoria'
    },
    {
        nombre: 'Ronald',
        edad: '39',
        comidaFavorita: 'carne'
    },
    {
        nombre: 'Tito',
        edad:  65,
        comidaFavorita: 'santandereana'
    },{
        nombre:'leo',
        edad: 4,
        comidaFavorita:'atun'
    }
];

for (let i=0; i < arrayDeObjetos.length; i++){
    console.log ('========================================================');
    console.log ('Nombre: ' + arrayDeObjetos[i].nombre)
    console.log ('Edad:' + arrayDeObjetos[i].edad)
    console.log ('Comida Favorita:' + arrayDeObjetos[i].comidaFavorita)
}