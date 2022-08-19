function probarValidarPrimerNombre() {
  console.assert(
    validarPrimerNombre("") === "Este campo necesita al menos un caracter",
    "Validar primer nombre  no valido que el nombre no sea vacio"
  );

  console.assert(
    validarPrimerNombre(
      "2222222222222222222222222222222222222222222222222222222222222222"
    ) >= "Este campo debe tener menos de 50 caracteres",
    "Validar primer nombre no valido que el nombre sea menor a 50 caracteres"
  );
}

function probarValidarSegundoNombre() {
  console.assert(
    validarSegundoNombre("") === "Este campo necesita al menos un caracter",
    "Validar segundo nombre  no valido que el nombre no sea vacio"
  );

  console.assert(
    validarSegundoNombre(
      "2222222222222222222222222222222222222222222222222222222222222222"
    ) >= "Este campo debe tener menos de 50 caracteres",
    "Validar segundo nombre no valido que el nombre sea menor a 50 caracteres"
  );
}

function probarValidarApellido() {
  console.assert(
    validarApellido("") === "Este campo necesita al menos un caracter",
    "Validar apellido  no valido que el apellido no sea vacio"
  );

  console.assert(
    validarApellido(
      "2222222222222222222222222222222222222222222222222222222222222222"
    ) >= "Este campo debe tener menos de 50 caracteres",
    "Validar apellido no valido que el apellido sea menor a 50 caracteres"
  );
}

function probarEdad() {
  console.assert(
    validarEdad("") === "Este campo necesita al menos un digito",
    "Validar edad no valido que la edad no sea vacio"
  );

  console.assert(
    validarEdad(1234) >= "Este campo debe tener menos de 3 digitos",
    "Validar edad no valido que la edad sea menor a 3 digitos"
  );
}

probarValidarPrimerNombre();
probarValidarSegundoNombre();
probarValidarApellido();
probarEdad();
