/* var listaDeCompras= [];

listaDeCompras [3]= 'Tomates';
listaDeCompras [1]= 'Lechuga';

//console.log (listaDeCompras)
  var elementoDelArray= listaDeCompras[1]
console.log (elementoDelArray); 

console.log (listaDeCompras.length); 

// Length

var nombres = ['Marce', 'Tito', 'Doris', 'Rony'].length
console.log (nombres); 

//INCLUDES
var pintores = ['picasso', 'velasquez', 'van goh', 'dali'];
var incluyeDali = pintores.includes('van goh');
  console.log (incluyeDali);

//    UNSHIFT 
var colores= ['amarillo', 'azul'];
//para agregar rojo 
colores.push ('rojo');
//ahora agregamos el verde al inicio del array
colores.unshift ('verde');
//si queremos quitar el ultimo elemento del array (rojo)
colores.pop();
//para borrar el primer elemento (verde)
colores.shift();

console.log(colores);

// METODO EVERY
var numeros =[6,8,9];
//para ver si cumplen con la condicion >5
var cumplenCondicion = numeros.every((num)=> { 
  return num >5
});

console.log(cumplenCondicion);

// METODO SPLIT

var palabra = 'Henri'
var palabraSeparada= palabra.split('');
//para quitar la 'i' y agregar la 'y' usamos metodo pop y metodos push asi:
palabraSeparada.pop();
palabraSeparada.push('y')
//USAREMOS JOIN PARA PONERLA COMO STRING NUEVAMENTE
var palabraArreglada= palabraSeparada.join('')


  console.log (palabraArreglada); 

  var numeros= [1,2,3,4];
  // quiero que console de numero x separado
//numeros.forEach ((num)=> console.log (num));
//si quiero un console de numero ==3 :
  numeros.forEach ((num)=> {
    if (num === 3) {
      console.log (num);
    }
  }); 

  // METODO MAP 
var numeros= [1,2,3,4]
var masUno= numeros.map ((num) => {return num +1 });

console.log (masUno);

// Bucle FOR
var arr= [1,2,3,4,5];

for (let i=0; i< arr.length; i++){
  console.log (arr[i]) 
}

function encontrarLetraP (string){
  var letras = string.split('');
  for (let i=0; i< letras.length; i++){
  if (letras [i]=== 'p'){
    console.log ('si contiene P')
  }
}
}

encontrarLetraP ('chupame este penco')
encontrarLetraP ('ronald')
*/

//BUCLE WHILE

var arr=[]

while (arr.length< 5){
  arr.push ('Ronald');
}
console.log (arr)







