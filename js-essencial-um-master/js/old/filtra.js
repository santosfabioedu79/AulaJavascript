var filtra = document.querySelector('#filtrar-tabela');

filtra.addEventListener('input', function(){
    /*console.log(this.value);*/
    var pacientes = document.querySelectorAll('.paciente');  
    var regex = new RegExp(filtra.value, 'i');
    if(filtra.value != 0){
        pacientes.forEach(function(paciente){
            var nome = paciente.querySelector('.info-nome').textContent;
            if(regex.test(nome)){
                paciente.classList.remove('invisivel');
            }else{
                paciente.classList.add('invisivel');
            }
        })
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove('invisivel');
        })
    }
})
