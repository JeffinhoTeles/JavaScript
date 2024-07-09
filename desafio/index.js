// Define a classe Produto que será usada para criar objetos de produtos
class Produto {
  // O construtor é chamado quando uma nova instância da classe é criada
  constructor(nome, preco, categoria) {
    // Define as propriedades nome, preco e categoria do produto
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  // Método que retorna uma string com os detalhes do produto
  exibirDetalhes() {
    // Retorna uma string que inclui o nome, preço e categoria do produto
    return `${this.nome} custa ${this.preco} e pertence à categoria ${this.categoria}`;
  }
}

// Cria uma nova instância da classe Produto com o nome "Caneta", preço 1.5 e categoria "Material Escolar"
const produto1 = new Produto("Caneta", 1.5, "Material Escolar");

// Exibe um alerta na tela com os detalhes do produto usando o método exibirDetalhes()
alert(produto1.exibirDetalhes());
