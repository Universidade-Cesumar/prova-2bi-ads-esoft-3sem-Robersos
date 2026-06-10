const URL_API = "https://6a29e985f59cb8f65f1dc4af.mockapi.io/almx/item";
const nomeItemInput = document.getElementById('input-nome');

const qtdItemInput = document.getElementById('input-quantidade');

const btnCadastro = document.getElementById('btn-cadastrar');

const listaEstoque = document.getElementById('lista-materiais');

btnCadastro.addEventListener('click', function() {
    const nomeItem = nomeItemInput.value;
    const qtdItem = parseInt(qtdItemInput.value);

    
    if (!nomeItem || isNaN(qtdItem)) {
        alert("Preencha todos os campos");
        return;
    }

    const novoProduto = {
        nome: nomeItem,
        quantidade: qtdItem
    };

  
    fetch(URL_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
    })
    .then(resposta => resposta.json())
    .then(dadosSalvos => {
        
        
        
        qtdItemInput.value = "";
        nomeItemInput.value = "";

        renderizarItens();
    })
    .catch(erro => console.error("Erro ao cadastrar:", erro));
});

function renderizarItens() {
    fetch(URL_API)
        .then(resposta => resposta.json())
        .then(itensDaAPI => {
          
            listaEstoque.innerHTML = "";

           
            itensDaAPI.forEach(item => {
                const novaLinha = document.createElement('li');
                
              
                novaLinha.innerText = `Item: ${item.nome} || Quantidade: ${item.quantidade}`;
               
                listaEstoque.appendChild(novaLinha);
            });
        })
        .catch(erro => {
            console.error("Erro ao buscar os dados da API:", erro);
        });
}
renderizarItens();