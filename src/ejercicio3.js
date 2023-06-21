// Inserte el código aquí

let listanueva = [1, 2, 3];

function clonarArreglo(lista) {
  lista = [...listanueva];

  return lista;
}


let obj= {
  nombre: 'Maria', 
  edad: 20,
};


 function clonarObjeto(){
  const clonar = {...obj};
  return clonar
 }



function Sumar(...numeros) {
  return numeros.reduce((acumulador,valorActual) => {
   return acumulador+valorActual;
  },0)
}


/*


let saludar = (nombre = "desconocido") => {
  console.log("Hola", nombre);
};
saludar("");



*/
// NO MODIFICAR
export { clonarArreglo,clonarObjeto,Sumar};
