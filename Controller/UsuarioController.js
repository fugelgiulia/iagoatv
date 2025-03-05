const UsuarioService = require('../Service/UsuarioService');

class UsuarioController { 

   
    async criarUsuario(req, res) {  
        try { 
            const { nome } = req.body; 
            
           
            if (!nome) {  
                return res.status(400).json({ error: "O nome do usuário é obrigatório." });
            }

            const usuario = await UsuarioService.criarUsuario(nome); 

        
            return res.status(201).json(usuario); 
        } catch (error) {
            
            return res.status(500).json({ error: "Erro ao criar usuário." }); 
        }
    }

    
    async obterUsuarios(req, res) { 
        try {
            
            const usuarios = await UsuarioService.obterUsuarios(); 

            return res.json(usuarios);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao obter usuários." }); 
        }
    }

    async obterUsuarioPorId(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ error: "O ID do usuário é obrigatório." });
            }

            const usuario = await UsuarioService.obterUsuarioPorId(id);

            if (!usuario) {
                return res.status(404).json({ error: "Usuário não encontrado." });
            }

            return res.json(usuario);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar usuário." });
        }
    }

    async atualizarUsuario(req, res) {
        try {
            const { id } = req.params;
            const { nome } = req.body;

            if (!id || !nome) {
                return res.status(400).json({ error: "ID e nome são obrigatórios." });
            }

            
            const usuarioAtualizado = await UsuarioService.atualizarUsuario(id, nome);

          
            return res.json(usuarioAtualizado);
        } catch (error) {
            
            return res.status(500).json({ error: "Erro ao atualizar usuário." });
        }
    }

    
    async excluirUsuario(req, res) { 
        try {
        
            const { id } = req.params;

            
            if (!id) { 
                return res.status(400).json({ error: "O ID do usuário é obrigatório." });
            }

        
            await UsuarioService.excluirUsuario(id);

            
            return res.status(204).send(); 
        } catch (error) {
            
            return res.status(500).json({ error: "Erro ao excluir usuário." });
        }
    }
}

module.exports = new UsuarioController(); 

