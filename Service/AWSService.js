const AWSRepository = require('../Repository/AWSRepository');// importa o repositório AWSRepository

// importa módulos para manipulação de caminhos e arquivos
const path = require('path');
const fs = require('fs');


class AWSService { //cria uma classe

  // buscar uma imagem na AWS pelo identificador (referência)
    async buscarImagem(referencia) {
        return await AWSRepository.buscarImagem(referencia);
    }

    async uploadImagem(file) { //para fazer upload de uma imagem para a AWS
        return await AWSRepository.uploadImagem(file);
    }

  
    async downloadImagem(referencia) { // fazer o download de uma imagem da AWS
        //  dados do arquivo do AWSRepository
        const fileData = await AWSRepository.downloadImagem(referencia);

        // define o diretório de downloads do usuário
        const downloadsPath = path.join(require('os').homedir(), 'Downloads');

        // cria o caminho completo do arquivo a ser salvo
        const filePath = path.join(downloadsPath, referencia);

        // escreve os dados do arquivo no caminho especificado
        fs.writeFileSync(filePath, fileData);

        // retorna o caminho onde o arquivo foi salvo
        return filePath;
    }
}

module.exports = new AWSService();// permite que essa classe possa ser usada para outras classes
