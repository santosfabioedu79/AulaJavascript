var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {

  var tdpeso = pacientes[i].querySelector('.info-peso');
  var tdaltura = pacientes[i].querySelector('.info-altura');
  var tdimc = pacientes[i].querySelector('.info-imc');

  var peso = tdpeso.textContent;
  var altura = tdaltura.textContent;

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);


  if (!pesoValido) {
    tdimc.textContent = "Peso Inválido";
    pacientes[i].classList.add('linha-erro');
  }

  if (!alturaValida) {
    tdimc.textContent = 'Altura inválida';
  }

  if (pesoValido && alturaValida) {
    var calculo = calculaImc(peso, altura);
    tdimc.textContent = calculo.toFixed(2);
  }
}

function validaPeso(valor){
  if(valor >=500 || valor < 2){
    return false;
  }else{
    return true;
  }
}

function validaAltura(valor){
  if(valor >= 3 || valor < 0){
    return false;
  }else{
    return true;
  }
}

function calculaImc(peso, altura){
  var imc = peso / (altura * altura);
  return imc;
}