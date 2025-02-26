const AWSService = require('../Service/AWSService'); // importa o serviço AWSService, que contém funções para trabalhar com imagens na AWS


class AWSController { // cria a classe AWSController para lidar com requisições a imagem

        async buscarImagem(req, res) {     // método que buscar por uma imagem na AWS

        try {
            
            const { referencia } = req.body;// tem a referência da imagem do corpo da requisição
            
            if (!referencia) { // verifica se a referência foi informada
                return res.status(400).json({ error: "A referência da imagem é obrigatória." });
            }
            
            const resultado = await AWSService.buscarImagem(referencia); // chama o serviço para buscar a imagem

            
            return res.json(resultado);// retorna o resultado da busca

        } catch (error) {
         
            return res.status(500).json({ error: error.message || "Erro ao buscar a imagem." });   // retorna erro caso algo dê errado
        }
    }

    async uploadImagem(req, res) { // fazer upload de uma imagem na AWS
        try {

            if (!req.file) {  // verifica se um arquivo foi enviado
                return res.status(400).json({ error: "Nenhum arquivo enviado." });
            }
            
            const resultado = await AWSService.uploadImagem(req.file);  //  fazer o upload da imagem
            
           
            return res.json(resultado);  // retorna o resultado do upload
        } catch (error) {
        
            return res.status(500).json({ error: error.message || "Erro ao fazer upload da imagem." }); // retorna erro caso algo dê errado       
         }
    }

    
    async downloadImagem(req, res) { //  fazer download de uma imagem da AWS
        try {
           
            const { referencia } = req.body;  //  tem a referência da imagem do corpo da requisição
            
            
            if (!referencia) { // verifica se a referência foi informada
                return res.status(400).json({ error: "A referência da imagem é obrigatória." });
            }
            
            const filePath = await AWSService.downloadImagem(referencia);  // chama o serviço para baixar a imagem e retorna o caminho do arquivo

            
            return res.download(filePath, (err) => {   // envia o arquivo para o usuário
                if (err) {
                    console.error("Erro ao enviar o arquivo:", err);
                    return res.status(500).json({ error: "Erro ao enviar o arquivo." });
                }
                console.log(`Arquivo enviado com sucesso: ${filePath}`);
            });
        } catch (error) {
            return res.status(500).json({ error: error.message || "Erro ao baixar a imagem." }); // retorna erro caso algo dê errado

        }
    }
}

module.exports = new AWSController(); //permite que essa classe possa ser usada para outras classes

