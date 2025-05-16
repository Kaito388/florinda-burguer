const produtos = [
  { id: 1, nome: "Tucano Burger", preco: 20.00, imagem: "imagens/tucano_burger.jpg" },
  { id: 2, nome: "Combo Tucano + Fritas", preco: 25.00, imagem: "imagens/tucano_combo1.jpg" },
  { id: 3, nome: "Batata Crocante", preco: 10.00, imagem: "imagens/batata1.jpg" },
  { id: 4, nome: "tuca Dog", preco: 15.00, imagem: "imagens/florinda_dog.jpg" },
  { id: 5, nome: "Super Combo ", preco: 28.00, imagem: "imagens/supercombo.jpg" },
  { id: 6, nome: "Mini Nuggets", preco: 12.00, imagem: "imagens/mininugets.jpg" },
  { id: 7, nome: "Batata com Cheddar", preco: 14.00, imagem: "imagens/bata2.jpg" },
  { id: 8, nome: "Florinda Chicken", preco: 17.00, imagem: "imagens/frango.jpg" },
  { id: 9, nome: "Tucano Supreme", preco: 30.00, imagem: "imagens/Supreme.jpg" },
  { id: 10, nome: "Casquinha de Sorvete", preco: 3.50, imagem: "imagens/sorvete.jpg" },
  { id: 11, nome: "Milkshake Morango", preco: 12.00, imagem: "imagens/milk.jpg" },
  {id: 12, nome: "tubino kids", preco: 25.50, imagem: "imagens/infantilkids.jpg"}

];

function mostrarProdutos() {
  const container = document.getElementById("produtos");
  produtos.forEach(produto => {
    const card = document.createElement("div");
    card.className = "produto";
    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h2>${produto.nome}</h2>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
    `;
    container.appendChild(card);
  });
}

mostrarProdutos();
