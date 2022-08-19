const $titulo = document.querySelector("#bienvenida");
const $saludarUsuario = document.querySelector("#btn-saludar-usuario");
const $datosUsuario = document.querySelector("#datos-usuario");

$saludarUsuario.onclick = function () {
  const primerNombre = document.querySelector("#primer-nombre").value;
  const segundoNombre = document.querySelector("#segundo-nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const edad = document.querySelector("#edad").value;

  $titulo.textContent = `Bienvenido, ${primerNombre}!`;
  $datosUsuario.textContent = `nombre/s: ${primerNombre} ${segundoNombre},
                                                   apellido/s: ${apellido},
                                                   edad: ${edad}`;

  return false;
};

function validarPrimerNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo necesita al menos un caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
}

function validarSegundoNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo necesita al menos un caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
}

function validarApellido(apellido) {
  if (apellido.length === 0) {
    return "Este campo necesita al menos un caracter";
  }

  if (apellido.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
}

function validarEdad(edad) {
  if (edad.toString().length === 0) {
    return "Este campo necesita al menos un digito";
  }
  if (edad.toString().length >= 3) {
    return "Este campo debe tener menos de 3 digitos";
  }
}
