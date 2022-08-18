function probarValidarSalario() {
  console.assert(
    validarSalario(0) === "Este campo debe tener al menos un digito",
    "Validar salario no valido que el salario no sea vacio"
  );
  console.assert(
    validarSalario("222222222222222222222222222222222222222") ===
      "Este campo debe tener menos de 20 digitos",
    "Validar salario no valido que el salario tenga menos de 20 digitos"
  );
}

probarValidarSalario();
