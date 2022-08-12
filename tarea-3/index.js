const $calcularTiempo = document.querySelector("#calcular");

$calcularTiempo.onclick = function () {
  const segundos = document.querySelectorAll(".segundos");
  let segundosTotales = 0;
  for (let i = 0; i < segundos.length; i++) {
    segundosTotales += Number(segundos[i].value);
  }
  const minutosEnBaseASegundos = Math.floor(segundosTotales / 60);
  const segundosRestantes = segundosTotales % 60;

  const minutos = document.querySelectorAll(".minutos");
  let minutosTotales = 0;
  for (let i = 0; i < minutos.length; i++) {
    minutosTotales += Number(minutos[i].value);
    console.log(minutosTotales);
  }
  const horasEnBaseAMinutos = Math.floor(minutosTotales / 60);
  const minutosRestantes = (minutosTotales % 60) + minutosEnBaseASegundos;

  const horas = document.querySelectorAll(".horas");
  let horasTotales = horasEnBaseAMinutos;
  for (let i = 0; i < horas.length; i++) {
    horasTotales += Number(horas[i].value);
  }

  document.querySelector(
    "#tiempo-total"
  ).textContent = `Duración total: ${horasTotales
    .toString()
    .padStart(2, "0")}:${minutosRestantes
    .toString()
    .padStart(2, "0")}:${segundosRestantes.toString().padStart(2, "0")}`;

  return false;
};
