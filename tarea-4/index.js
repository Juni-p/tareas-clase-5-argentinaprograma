const $calcular = document.querySelector("#calcular");

function calcularPromedio(array) {
  let sumaTotal = 0;
  for (let i = 0; i < array.length; i++) {
    sumaTotal += array[i];
  }
  let promedio = (sumaTotal / array.length).toFixed(2);
  return promedio;
}

function encontrarNumeroMinimo(array) {
  let numeroMinimo = Math.min(...array);
  return numeroMinimo;
}

function encontrarNumeroMaximo(array) {
  let numeroMaximo = Math.max(...array);
  return numeroMaximo;
}

function encontrarNumeroMasRepetido(array) {
  let contador = 0;
  let repeticiones = 0;
  let numeroMasRepetido;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        contador++;
      }
      if (repeticiones < contador) {
        repeticiones = contador;
        numeroMasRepetido = array[i];
      }
    }
    contador = 0;
  }

  return numeroMasRepetido;
}

$calcular.onclick = function () {
  const numerosNodeList = document.querySelectorAll(
    "#lista-numeros > li > input"
  );
  const numerosArray = [];
  for (let i = 0; i < numerosNodeList.length; i++) {
    numerosArray.push(Number(numerosNodeList[i].value));
  }

  document.querySelector(
    "#promedio"
  ).textContent = `Promedio: ${calcularPromedio(numerosArray)}`;

  document.querySelector(
    "#numero-minimo"
  ).textContent = `Numero minimo: ${encontrarNumeroMinimo(numerosArray)}`;

  document.querySelector(
    "#numero-maximo"
  ).textContent = `Numero maximo: ${encontrarNumeroMaximo(numerosArray)}`;

  document.querySelector(
    "#numero-mas-frecuente"
  ).textContent = `Numero mas frecuente: ${encontrarNumeroMasRepetido(
    numerosArray
  )}`;

  return false;
};
