//alert("Olá Mundo"); //uma janela com texto Ola mundo no Console no Browser
//console.log() - exibe no console do Browser teclando F12
//Javascript inicia nas tag <script src>
//querySelector seleciona os elementos no html



//console.log(document.querySelector('h1').textContent = "Olá Mundo!");
//console.log(document.querySelector('.paciente'));
//console.log(document.querySelector('.info-altura').textContent);
//var h1 = document.querySelector('h1');
//h1.textContent = "HAHAHAHA apareceu";



var btn = document.querySelector('#adicionar-paciente');

btn.addEventListener('click', function(event) {
  event.preventDefault();
  /*console.log("fui clicado");*/

  var form = document.querySelector('form');
  var fnome = form.nome.value;
  var fpeso = form.peso.value;
  var faltura = form.altura.value;
  var fgordura = form.gordura.value;

  var tr = document.createElement('tr');
  var nome = document.createElement('td');
  var peso = document.createElement('td');
  var altura = document.createElement('td');
  var gordura = document.createElement('td');

  if(validaCampo(form.nome.value, "Nome vazio")){
    nome.textContent = form.nome.value;
  }else{
    return;
  }
  
  if(validaCampo(form.peso.value, "Peso vazio")){
    peso.textContent = form.peso.value;
  }else{
    return;
  }
  
  if(validaCampo(form.altura.value, "Altura vazio")){
    altura.textContent = form.altura.value;
  }else{
    return;
  }
  
  if(validaCampo(form.gordura.value, "Gordura vazio")){
    gordura.textContent = form.gordura.value;
  }else{
    return;
  }

  tr.appendChild(nome);
  tr.appendChild(peso);
  tr.appendChild(altura);
  tr.appendChild(gordura);

  var tbody = document.querySelector('#tabela-pacientes');
  tbody.appendChild(tr);

form.reset();
});

function validaCampo(valor, msg){
  var erro = document.querySelector('#mensagem-erro');
  if(valor.length <=0){
    erro.textContent = msg;
    return false;
  }else{
    return valor;
  }
}