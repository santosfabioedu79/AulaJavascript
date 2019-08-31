var btn = document.querySelector('#adicionar-paciente');

btn.addEventListener('click', function(event) {
  event.preventDefault();

  var form = document.querySelector('form');
  var erros = validaForm(form);

  var erroLista = document.querySelector('#mensagem-erro');
      erroLista.innerHTML = '';

  if(erros.length != 0){
   erros.forEach(function(erro){
      erroLista.appendChild(montaMensagemErro(erro));
    })
    return;
  }

  var paciente = obtemPaciente(form);

  adicionaPaciente(paciente);

  form.reset();
});

function adicionaPaciente(paciente){
  var tr = montaTr(paciente);
  var tbody = document.querySelector('#tabela-pacientes');
  tbody.appendChild(tr);
}

function validaCampo(valor){
    if(valor.length <= 0){
    return false;
  } else {
    return true;
  }
}

function validaForm(form){
  var erros = [];
  if(!validaCampo(form.nome.value)){
   erros.push('Campo nome é obrigatório');
  }
  if(!validaCampo(form.peso.value, 1000, 0)){
    erros.push('Campo peso é obrigatório');
   }
  if(!validaCampo(form.altura.value)){
    erros.push('Campo altura é obrigatório');
   }
   if(!validaAltura(form.altura.value)){
    erros.push('Valor da altura é inválida');
   }
   if(!validaCampo(form.gordura.value)){
    erros.push('Campo gordura é obrigatório');
   }
  return erros;
}

function montaMensagemErro(msg){
  var li = document.createElement('li');
  li.classList.add('mensagem-erro');
  li.textContent = msg;
  return li;
}

  function obtemPaciente(form){
    var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(parseFloat(form.peso.value), parseFloat(form.altura.value))
    }
    return paciente;
  }

  function montaTr(paciente){
    var tr = document.createElement('tr');
    tr.classList.add('paciente');

    tr.appendChild(montaTd(paciente.nome, "info-nome"));
    tr.appendChild(montaTd(paciente.peso, "info-peso"));
    tr.appendChild(montaTd(paciente.altura, "info-altura"));
    tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    tr.appendChild(montaTd(paciente.imc.toFixed(2), "info-imc"));

    return tr
  }
  
  function montaTd(valor, classe){
    var td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = valor;
    return td;
  }