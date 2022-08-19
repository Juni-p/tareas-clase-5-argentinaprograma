const $calcularTiempo = document.querySelector("#calcular");

$calcularTiempo.onclick = function () {
  const segundosVideoNodeList = document.querySelectorAll(".segundos");
  let segundosVideosTotales = 0;
  for (let i = 0; i < segundosVideoNodeList.length; i++) {
    segundosVideosTotales += Number(segundosVideoNodeList[i].value);
  }
  const minutosVideosEnBaseASegundos = Math.floor(segundosVideosTotales / 60);
  const segundosVideosRestantes = segundosVideosTotales % 60;

  const minutosVideoNodeList = document.querySelectorAll(".minutos");
  let minutosVideosTotales = 0;
  for (let i = 0; i < minutosVideoNodeList.length; i++) {
    minutosVideosTotales += Number(minutosVideoNodeList[i].value);
  }
  const horasVideosEnBaseAMinutos = Math.floor(minutosVideosTotales / 60);
  const minutosVideosRestantes =
    (minutosVideosTotales % 60) + minutosVideosEnBaseASegundos;

  const horasVideoNodeList = document.querySelectorAll(".horas");
  let horasVideosTotales = horasVideosEnBaseAMinutos;
  for (let i = 0; i < horasVideoNodeList.length; i++) {
    horasVideosTotales += Number(horasVideoNodeList[i].value);
  }

  document.querySelector(
    "#tiempo-total"
  ).textContent = `Duración total: ${horasVideosTotales
    .toString()
    .padStart(2, "0")}:${minutosVideosRestantes
    .toString()
    .padStart(2, "0")}:${segundosVideosRestantes.toString().padStart(2, "0")}`;

  return false;
};

function validarHoras(horas) {
  if (horas.toString().length === 0) {
    return "Este campo debe tener al menos un digito";
  }
  if (horas.toString().length >= 8) {
    return "Este campo debe tener menos de 8 digitos";
  }
}

function validarMinutos(minutos) {
  if (minutos.toString().length === 0) {
    return "Este campo debe tener al menos un digito";
  }
  if (minutos.toString().length >= 8) {
    return "Este campo debe tener menos de 8 digitos";
  }
}

function validarSegundos(segundos) {
  if (segundos.toString().length === 0) {
    return "Este campo debe tener al menos un digito";
  }
  if (segundos.toString().length >= 8) {
    return "Este campo debe tener menos de 8 digitos";
  }
}
