import { constrainedMemory } from "process";

// Inserte el código aquí
function horaactual () {
let fecha = new Date ();
let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
let horaActual = horas + "." + minutos + "." + segundos;

document.getElementById("Hora actual").textContent = horaActual;
}

setInterval(horaactual, 1000);

//2////

let obtenerUsuarios = function(resolve, reject) {
l
}






const imprimirUsuarios = () => {
    const usuarios = obtenerUsuarios();
    usuarios
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error en respuesta");
        }
      })
      .then((usuarios) => {
        console.log(usuarios);
      })
      .catch((error) => {
        console.log(error);
      });
  };