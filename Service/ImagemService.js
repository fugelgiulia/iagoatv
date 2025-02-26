const ImagemRepository = require('../Repository/ImagemRepository'); // importa o repositório ImagemRepository
const Imagem = require('../Entity/Imagem'); // importa módulos para manipulação de caminhos e arquivos

class ImagemService { //cria uma classe
    async criarNovaImagem(referencia, titulo) {
        const novaImagem = new Imagem(referencia, titulo);
        return await ImagemRepository.criarImagem(novaImagem);
    }

    async listarImagem() {
        return await ImagemRepository.listarImagem();
    }

    async buscarImagem(id) {
        return await ImagemRepository.buscarImagem(id);
    }

    async atualizarImagem(id, referencia, titulo) {
        const dadosAtualizados = { referencia, titulo };
        return await ImagemRepository.atualizarImagem(id, dadosAtualizados);
    }

}

module.exports = new ImagemService(); // permite que essa classe possa ser usada para outras classes

