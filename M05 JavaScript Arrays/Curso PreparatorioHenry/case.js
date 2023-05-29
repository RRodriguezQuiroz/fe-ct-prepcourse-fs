/*
sintaxis simple:

switch (evaluacion){
    case n:
        //codigo
    break;

    case n2:
        //codigo
    break;

    default:
        //codigo
}

*/
num= 1
switch (num){
    case 1: 
    console.log ('el valor de num es 1')
    break;
    case 2: 
    console.log ('el valor de num es 2')
    break;
    default:
        console.log('el valor de num no es 1 ni 2')
}

switch (num){
    case 1:
    case 3:
    case 5:
        console.log ('Num es impar');
    break;
    case 2:
    case 4:
        console.log ('Num es par');
}