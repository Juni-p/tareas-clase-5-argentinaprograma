const $btnIngresoMensual = document.querySelector(
  "#btn-calcular-salario-mensual"
);

$btnIngresoMensual.onclick = function () {
  const MESES = 12;
  const salarioAnual = Number(document.querySelector("#salario-anual").value);
  const salarioMensual = salarioAnual / MESES;
  document.querySelector("#salario-mensual").value = salarioMensual.toFixed(2);
  return false;
};
