const $btnIngresoMensual = document.querySelector(
  "#btn-calcular-salario-mensual"
);

$btnIngresoMensual.onclick = function () {
  const MESES_EN_UN_ANIO = 12;
  const salarioAnual = Number(document.querySelector("#salario-anual").value);
  const salarioMensual = salarioAnual / MESES_EN_UN_ANIO;
  document.querySelector("#salario-mensual").value = salarioMensual.toFixed(2);
  return false;
};

function validarSalario(salario) {
  if (salario === 0) {
    return "Este campo debe tener al menos un digito";
  }
  if (salario.toString().length >= 20) {
    return "Este campo debe tener menos de 20 digitos";
  }
}
