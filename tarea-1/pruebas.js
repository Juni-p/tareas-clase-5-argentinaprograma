function probarValidarSalario() {
  console.assert(
    validarSalario(0) === "Este campo debe tener al menos un digito",
    "Validar salario no valido que el salario no sea vacio o cero"
  );
}

probarValidarSalario();
