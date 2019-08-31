import tabelaPacientesController from '../controllers/TabelaPacientesController.js';
import Paciente from '../models/Pacientes.js';

class BuscaPacientesService{
    constructor(){

    }

    busca(){
        let pacientes = [];
        fetch('templates/pacientes.json')
            .then(response => response.json())
            .then(result => result)
            .then(lista => lista.forEach( paciente => {
                let p = new Paciente(paciente.nome, paciente.peso, paciente.altura, paciente.gordura);
                tabelaPacientesController.adiciona(p);
        }))
        console.log(pacientes);
    }
}

const buscaPacientesService = new BuscaPacientesService();

export default buscaPacientesService