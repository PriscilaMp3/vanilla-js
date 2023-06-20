// Inserte el código aquí

let listanueva = [5, 4, 3];

function clonarArreglo(lista) {
  lista = [...listanueva];

  return lista;
}

let objeto = {
  casa: "red",
};

function ClonarObjeto(objeto) {
  return (clonar = { ...objeto });
}


function Sumar(valor1, valor2) {
  return (sumar = valor1 + valor2);
}

let sumaActual = [1, 2, 4].reduce(Sumar);
console.log(sumaActual);


let saludar = (nombre = "desconocido") => {
  console.log("Hola", nombre);
};
saludar("Maria");

// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };
