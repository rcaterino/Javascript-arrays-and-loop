var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
for(let number = 1; number < 3; number++){ //funcion que se repite solo 2 veces para generar 2 numeros
    //print the number
    arr.push(Math.floor(Math.random()*100)); //.push lo que hace es introducir nuevos valores al arreglo, en este caso un número aleatorio y como está en un for que se repite dos veces serán 2 numeros.
}  

console.log(arr);