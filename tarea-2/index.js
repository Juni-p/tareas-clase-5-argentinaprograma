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
