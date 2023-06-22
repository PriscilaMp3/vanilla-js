// Inserte el código aquí
function horaactual() {
  let fecha = new Date();
  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let hora = horas + "." + minutos + "." + segundos;

  document.getElementById("horaActual").textContent = hora;
}

setInterval(horaactual, 1000);

//2///

//

obtenerListaUsuarios();
function obtenerListaUsuarios() {
  //hacer una función//

  fetch("http://localhost:3000/users")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log("Lista de usuarios:", datos);
    })
    .catch((error) => {
      console.log("Error al obtener la lista de usuarios:", error);
    });

  function usuarios() {
    return new Promise(obtenerListaUsuarios);
  }
}

async function datosUsuarios() {
  const datosdelUsuario = await obtenerListaUsuarios();
  console.log(datosdelUsuario);
}

datosUsuarios();

//
