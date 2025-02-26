const UsuarioService = require('../Service/UsuarioService');// importa o serviço UsuarioService, que contém funções para manipular usuários

class UsuarioController { //cria uma classe

   
    async criarUsuario(req, res) {  // criar um novo usuário
        try { 
            const { nome } = req.body; // tem o nome do usuário do corpo da requisição
            
           
            if (!nome) {  // verifica se o nome foi informado
                return res.status(400).json({ error: "O nome do usuário é obrigatório." });
            }

            const usuario = await UsuarioService.criarUsuario(nome); // chama o serviço para criar o usuário

        
            return res.status(201).json(usuario); // retorna o usuário criado com status 201 (Criado)
        } catch (error) {
            
            return res.status(500).json({ error: "Erro ao criar usuário." }); // retorna erro caso algo dê errado
        }
    }

    
    async obterUsuarios(req, res) { // obter todos os usuários
        try {
            
            const usuarios = await UsuarioService.obterUsuarios(); // chama o serviço para obter todos os usuários

            return res.json(usuarios);// retorna a lista de usuários
        } catch (error) {
            return res.status(500).json({ error: "Erro ao obter usuários." }); // retorna erro caso algo dê errado
        }
    }

    // obter um usuário específico pelo ID
    async obterUsuarioPorId(req, res) {
        try {
            // ID do usuário da URL (parâmetro de rota)
            const { id } = req.params;

            // verifica se o ID foi informado
            if (!id) {
                return res.status(400).json({ error: "O ID do usuário é obrigatório." });
            }

            // chama o serviço para obter o usuário pelo ID
            const usuario = await UsuarioService.obterUsuarioPorId(id);

            //  usuário não encontrado, retorna erro 404
            if (!usuario) {
                return res.status(404).json({ error: "Usuário não encontrado." });
            }

            // retorna o usuário encontrado
            return res.json(usuario);
        } catch (error) {
            // retorna erro caso algo dê errado
            return res.status(500).json({ error: "Erro ao buscar usuário." });
        }
    }

    // atualizar um usuário existente
    async atualizarUsuario(req, res) {
        try {
            // ID do usuário e o nome do corpo da requisição
            const { id } = req.params;
            const { nome } = req.body;

            // verifica se o ID e o nome foram informados
            if (!id || !nome) {
                return res.status(400).json({ error: "ID e nome são obrigatórios." });
            }

            // chama o serviço para atualizar o usuário com os novos dados
            const usuarioAtualizado = await UsuarioService.atualizarUsuario(id, nome);

            // retorna o usuário atualizado
            return res.json(usuarioAtualizado);
        } catch (error) {
            // retorna erro caso algo dê errado
            return res.status(500).json({ error: "Erro ao atualizar usuário." });
        }
    }

    
    async excluirUsuario(req, res) { // excluir um usuário
        try {//  o ID do usuário a ser excluído da URL
        
            const { id } = req.params;

            
            if (!id) { // verifica se o ID foi informado
                return res.status(400).json({ error: "O ID do usuário é obrigatório." });
            }

        
            await UsuarioService.excluirUsuario(id);// chama o serviço para excluir o usuário pelo ID

            
            return res.status(204).send(); // retorna status 204 (Sem conteúdo) 
        } catch (error) {
            
            return res.status(500).json({ error: "Erro ao excluir usuário." });// retorna erro caso algo dê errado
        }
    }
}

module.exports = new UsuarioController(); // permite que essa classe possa ser usada para outras classes

