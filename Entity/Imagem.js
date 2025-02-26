class Imagem { // cria uma classe
    constructor(referencia, titulo) { // construtor é um objeto criado apartir da classe
        this.referencia = referencia; // cria dentro do objeto um lugar para armazenar a referencia 
        this.titulo = titulo; // para armazenar o titulo de uma imagem escolhida 
        
        const date = new Date(); // cria um objeto onde possui data e hora atuais da descrição a imagem
        this.data_criacao = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;;//
                        // retorna o dia do mes 
                        // retorna o mes  com 0 sendo janeiro e 11 sendo dezembro
                        // retorna o plano completo 
   
    }
}

module.exports = Imagem; // permite que essa classe possa ser usada para outras classes