const UsuarioRepository = require('../Repository/UsuarioRepository');// importa o repositório UsuarioRepository
const Usuario = require('../Entity/Usuario');// importa módulos para manipulação de caminhos e arquivos

class UsuarioService { //cria uma classe

    async criarNovaUsuario(nome) { // criar um novo usuário
        const novaUsuario = new Usuario(nome); //objeto do tipo Usuario com o nome fornecido

        // repositório para salvar o novo usuário no banco de dados
        return await UsuarioRepository.criarUsuario(novaUsuario);
    }

    //a listar todos os usuários cadastrados
    async listarUsuario() {
        return await UsuarioRepository.listarUsuario();
    }

    //  buscar um usuário pelo ID
    async buscarUsuario(id) {
        return await UsuarioRepository.buscarUsuario(id);
    }

    // atualizar o nome de um usuário pelo ID
    async atualizarUsuario(id, nome) {
        // Cria um objeto com os dados atualizados (apenas o nome)
        const dadosAtualizados = { nome };

        // Chama o repositório para atualizar os dados do usuário no banco
        return await UsuarioRepository.atualizarUsuario(id, dadosAtualizados);
    }
}

module.exports = new UsuarioService(); // permite que essa classe possa ser usada para outras classes
