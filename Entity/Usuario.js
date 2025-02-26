class Usuario { // cria uma classe
    constructor(nome) {  // define um atributo 'nome' e atribui o valor passado como parâmetro
        this.nome = nome;
        this.nome = nome;
        
        const date = new Date(); // cria um objeto Date para obter a data atual
        this.data_criacao = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;;
                            // formata a data de criação no formato dia,mês e ano
                            // getMonth() retorna os meses de 0 a 11, 0 sendo janeiro e 11 sendo dezembro  
    
    }
}

module.exports = Usuario;// permite que essa classe possa ser usada para outras classes
