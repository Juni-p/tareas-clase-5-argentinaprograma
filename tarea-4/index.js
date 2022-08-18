const $calcular = document.querySelector("#calcular");

function calcularPromedio(numeros) {
  let sumaTotal = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
  }
  return (sumaTotal / numeros.length).toFixed(2);
}

function encontrarNumeroMinimo(numeros) {
  let numeroMinimo = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeroMinimo > numeros[i]) {
      numeroMinimo = numeros[i];
    }
  }
  return numeroMinimo;
}

function encontrarNumeroMaximo(numeros) {
  let numeroMaximo = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeroMaximo < numeros[i]) {
      numeroMaximo = numeros[i];
    }
  }
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

function insertarNumerosEnUnArray(array, array1) {
  for (let i = 0; i < array.length; i++) {
    array1.push(Number(array[i].value));
  }
}

$calcular.onclick = function () {
  const numerosNodeList = document.querySelectorAll(
    "#lista-numeros > li > input"
  );
  const numerosArray = [];

  insertarNumerosEnUnArray(numerosNodeList, numerosArray);

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
