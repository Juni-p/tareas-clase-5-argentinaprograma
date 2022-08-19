function probarValidarHoras() {
  console.assert(
    validarHoras("") === "Este campo debe tener al menos un digito",
    "Validar horas no valido que horas no sea vacio"
  );
  console.assert(
    validarHoras("1111111111") === "Este campo debe tener menos de 8 digitos",
    "Validar horas no valido que horas tenga menos de 8 digitos"
  );
}
function probarValidarMinutos() {
  console.assert(
    validarMinutos("") === "Este campo debe tener al menos un digito",
    "Validar minutos no valido que minutos no sea vacio"
  );
  console.assert(
    validarMinutos("1111111111") === "Este campo debe tener menos de 8 digitos",
    "Validar minutos no valido que minutos tenga menos de 8 digitos"
  );
}
function probarValidarSegundos() {
  console.assert(
    validarSegundos("") === "Este campo debe tener al menos un digito",
    "Validar segundos no valido que segundos no sea vacio"
  );
  console.assert(
    validarSegundos("1111111111") ===
      "Este campo debe tener menos de 8 digitos",
    "Validar segundos no valido que segundos tenga menos de 8 digitos"
  );
}

probarValidarHoras();
probarValidarMinutos();
probarValidarSegundos();
