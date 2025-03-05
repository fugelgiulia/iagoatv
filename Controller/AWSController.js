const AWSService = require('../Service/AWSService'); 


class AWSController { 

        async buscarImagem(req, res) {  

        try {
            
            const { referencia } = req.body;
            
            if (!referencia) { 
                return res.status(400).json({ error: "A referência da imagem é obrigatória." });
            }
            
            const resultado = await AWSService.buscarImagem(referencia); 

            
            return res.json(resultado);

        } catch (error) {
         
            return res.status(500).json({ error: error.message || "Erro ao buscar a imagem." });   
        }
    }

    async uploadImagem(req, res) { 
        try {

            if (!req.file) {  
                return res.status(400).json({ error: "Nenhum arquivo enviado." });
            }
            
            const resultado = await AWSService.uploadImagem(req.file);  
            
           
            return res.json(resultado); 
        } catch (error) {
        
            return res.status(500).json({ error: error.message || "Erro ao fazer upload da imagem." });       
         }
    }

    
    async downloadImagem(req, res) { 
        try {
           
            const { referencia } = req.body;  
            
            
            if (!referencia) { 
                return res.status(400).json({ error: "A referência da imagem é obrigatória." });
            }
            
            const filePath = await AWSService.downloadImagem(referencia);  

            
            return res.download(filePath, (err) => {   
                if (err) {
                    console.error("Erro ao enviar o arquivo:", err);
                    return res.status(500).json({ error: "Erro ao enviar o arquivo." });
                }
                console.log(`Arquivo enviado com sucesso: ${filePath}`);
            });
        } catch (error) {
            return res.status(500).json({ error: error.message || "Erro ao baixar a imagem." }); 

        }
    }
}

module.exports = new AWSController(); 
