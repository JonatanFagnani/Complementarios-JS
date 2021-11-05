function loginUser() {
  let usuarioIngresado = prompt("Ingrese su nombre de usuario:");
  let usuario = usuarioIngresado.toLowerCase();
  while (usuario != "emiliano") {
    usuario = prompt("Usuario no encontrado.\nIntente nuevamente:");
  }
}

function loginPassword() {
  let passwordIngresada = prompt("Por favor, ingrese su contraseña:");
  let password = passwordIngresada.toLowerCase();
  if (password != "emiliano") {
    password = prompt("Contraseña incorrecta.\nIntente nuevamente:");
  } else {
    alert("Bienvenido al sistema de carga de puntos.");
  }
}

function consultapuntos() {
  puntos = alert(
    "Tienes un total de 230 puntos.\nTienes 200 puntos por cargar, sumalos ahora!."
  );
}

function adderPuntos(number1, number2) {
  const totalPuntos = number1 + number2;
  alert(
    "Puntos sumados correctamente.\nAhora tienes " + totalPuntos + " puntos!"
  );
}

loginUser();
loginPassword();
consultapuntos();
adderPuntos(230, 200);

alert("Muchas gracias por usar el sistema de carga de puntos.\nHasta luego!.");
