/*Lógica feita por mim
Exibir um erro na coluna IMC do paciente Paulo, "Peso inválido" ou Altura inválida ou resultado do cálculo
*/

/*
var peso = document.querySelector('.info-peso').textContent;
var altura = document.querySelector('.info-altura').textContent;
 

var peso = 76;
var altura = 0.39;
console.log(peso / (altura* altura));
var imc = document.querySelector('.info-imc');
imc.textContent = (peso / (altura* altura));

if(peso >= 1000 || peso <= 0 || altura >= 2.50 || altura <= 0.40){
  //console.log("Dados inválido");
  console.log(document.querySelector('.info-imc').textContent = "Dados Inválidos");
} else{
  //console.log("Peso Ok");
  console.log(peso / (altura* altura));
  var imc = document.querySelector('.info-imc');
  imc.textContent = (peso / (altura* altura));
}*/

/*exemplo do professor*/

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {

  var tdpeso = pacientes[i].querySelector('.info-peso');
  var tdaltura = pacientes[i].querySelector('.info-altura');
  var tdimc = pacientes[i].querySelector('.info-imc');

  var peso = tdpeso.textContent;
  var altura = tdaltura.textContent;

  var pesoValido = validaValor(peso, 500, 46);
  var alturaValida = validaValor(altura, 3, 0);


  if (!pesoValido) {
    tdimc.textContent = "Peso Inválido";
    pacientes[i].classList.add('linha-erro');
  }

  if (!alturaValida) {
    tdimc.textContent = 'Altura inválida';
  }

  if (pesoValido && alturaValida) {
    var calculo = peso / (altura * altura);
    tdimc.textContent = calculo.toFixed(2);
  }
}

function validaValor(valor, max, min){
  if (peso >= max || peso <= min) {
    return false;
  }else{
    return true;
  }

}