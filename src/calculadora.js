

function suma (num1, num2) {
    return num1 + num2;
}

function resta (num1, num2) {
    return num1 - num2;

}

function multiplicar (num1, num2) {
    return num1 * num2;
}

function dividir (num1, num2) {
    return num1 / num2;
}

// function filtrarpares(numero) { 
//   return (numero % 2) == 0; 
// }

// function filtrarpares(listaN){
//     let arreglo =listaN.filter((numero) => numero % 2 === 0);
    
//     for (let i = 0; i < arreglo.length; i++) {
//       if (arreglo[i] % 2 === 0) {
//         return 0;
//       }
     
//     }
//     console.log(arreglo) 
   
// }
function filtrarpares(lista){
    return lista.filter((numero) =>
    numero % 2 === 0);
}

function filtrardivisibles(lista){
    return lista.filter((numero) => numero % 5 === 0);
}

export {suma,resta,multiplicar,dividir,filtrarpares,filtrardivisibles}



