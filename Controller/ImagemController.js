const ImagemService = require('../Service/ImagemService');

class ImagemController {
    
    async novaImagem(req, res) {
        try {
            const { referencia, titulo } = req.body;
            
            if (!referencia || !titulo) {
                return res.status(400).json({ error: "Referência e título são obrigatórios." });
            }
            
            const resultado = await ImagemService.criarNovaImagem(referencia, titulo);
            
            return res.json(resultado);
        } catch (error) {
            return res.status(500).json({ error: error.message || "Erro ao criar nova imagem." });
        }
    }

    async listarImagem(req, res) {
        try {
            const resultado = await ImagemService.listarImagem();
            
            return res.json(resultado);
        } catch (error) {
            return res.status(500).json({ error: error.message || "Erro ao listar imagens." });
        }
    }

    async buscarImagem(req, res) {
        try {
            const { id } = req.params;
            
            if (!id) {
                return res.status(400).json({ error: "ID da imagem é obrigatório." });
            }
            
            const resultado = await ImagemService.buscarImagem(id);
            
            return res.json(resultado);
        } catch (error) {
            return res.status(500).json({ error: error.message || "Erro ao buscar a imagem." });
        }
    }
    
    async atualizarImagem(req, res) {
        try {
            const { id } = req.params;
            const { referencia, titulo } = req.body;
            
            if (!id || !referencia || !titulo) {
                return res.status(400).json({ error: "ID, referência e título são obrigatórios." });
            }
            
            const resultado = await ImagemService.atualizarImagem(id, referencia, titulo);
            
            return res.json(resultado);
        } catch (error) {
            return res.status(500).json({ error: error.message || "Erro ao atualizar a imagem." });
        }
    }

    async removerImagem(req, res) {
        try {
            const { id } = req.params;
            
            if (!id) {
                return res.status(400).json({ error: "ID da imagem é obrigatório." });
            }
            
            const resultado = await ImagemService.removerImagem(id);
            
            return res.json(resultado);
        } catch (error) {
            return res.status(500).json({ error: error.message || "Erro ao remover a imagem." });
        }
    }
}

module.exports = new ImagemController(); 

