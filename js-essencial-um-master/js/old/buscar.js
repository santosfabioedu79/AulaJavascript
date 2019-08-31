var btn = document.querySelector('#buscar-pacientes');

btn.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'templates/pacientes.json');   
    xhr.addEventListener('load', function(){
        var pacientes = JSON.parse(xhr.responseText);
        pacientes.forEach(function(paciente){
            adicionaPaciente(paciente);                        
        });
    })
    xhr.send();
})

