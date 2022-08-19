function probarValidarNumeros() {
  console.assert(
    validarNumeros("") === "Este campo debe tener al menos un digito",
    "Validar numeros no valido que numeros no sea vacio"
  );
  console.assert(
    validarNumeros("123456789") === "Este campo debe tener menos de 8 digitos",
    "Validar numeros no valido que numeros no sea vacio"
  );
}

probarValidarNumeros();
