// importa o serviço ImagemService, que contém funções para manipular imagens
const ImagemService = require('../Service/ImagemService');

// cria uma classe
class ImagemController {
    
    // método para criar uma nova imagem
    async novaImagem(req, res) {
        try {
            //referência e o título da imagem do corpo da requisição
            const { referencia, titulo } = req.body;
            
            // verifica se a referência e o título foram informados
            if (!referencia || !titulo) {
                return res.status(400).json({ error: "Referência e título são obrigatórios." });
            }
            
            // chama o serviço para criar a nova imagem
            const resultado = await ImagemService.criarNovaImagem(referencia, titulo);
            
            // retorna o resultado da criação
            return res.json(resultado);
        } catch (error) {
            // retorna erro caso algo dê errado
            return res.status(500).json({ error: error.message || "Erro ao criar nova imagem." });
        }
    }

    // listar todas as imagens
    async listarImagem(req, res) {
        try {
            // chama o serviço para listar as imagens
            const resultado = await ImagemService.listarImagem();
            
            // retorna a lista de imagens
            return res.json(resultado);
        } catch (error) {
            // retorna erro caso algo dê errado
            return res.status(500).json({ error: error.message || "Erro ao listar imagens." });
        }
    }

    // buscar uma imagem específica usando o ID
    async buscarImagem(req, res) {
        try {
            //  ID da imagem da URL (parâmetro de rota)
            const { id } = req.params;
            
            // verifica se o ID foi informado
            if (!id) {
                return res.status(400).json({ error: "ID da imagem é obrigatório." });
            }
            
            // chama o serviço para buscar a imagem pelo ID
            const resultado = await ImagemService.buscarImagem(id);
            
            // retorna a imagem encontrada
            return res.json(resultado);
        } catch (error) {
            // retorna erro caso algo dê errado
            return res.status(500).json({ error: error.message || "Erro ao buscar a imagem." });
        }
    }
    
    // método para atualizar uma imagem existente
    async atualizarImagem(req, res) {
        try {
            // ID da imagem e os novos dados do corpo da requisição
            const { id } = req.params;
            const { referencia, titulo } = req.body;
            
            // verifica se o ID, referência e título foram informados
            if (!id || !referencia || !titulo) {
                return res.status(400).json({ error: "ID, referência e título são obrigatórios." });
            }
            
            // chama o serviço para atualizar a imagem com os novos dados
            const resultado = await ImagemService.atualizarImagem(id, referencia, titulo);
            
            // retorna o resultado da atualização
            return res.json(resultado);
        } catch (error) {
            // retorna erro caso algo dê errado
            return res.status(500).json({ error: error.message || "Erro ao atualizar a imagem." });
        }
    }

    // método para remover uma imagem
    async removerImagem(req, res) {
        try {
            //  ID da imagem a ser removida da URL
            const { id } = req.params;
            
            // verifica se o ID foi informado
            if (!id) {
                return res.status(400).json({ error: "ID da imagem é obrigatório." });
            }
            
            // chama o serviço para remover a imagem pelo ID
            const resultado = await ImagemService.removerImagem(id);
            
            // retorna o resultado da remoção
            return res.json(resultado);
        } catch (error) {
            // retorna erro caso algo dê errado
            return res.status(500).json({ error: error.message || "Erro ao remover a imagem." });
        }
    }
}

module.exports = new ImagemController(); //permite que essa classe possa ser usada para outras classes

