const URL_API = "https://6a29e985f59cb8f65f1dc4af.mockapi.io/almx/item";
const nomeItemInput = document.getElementById('input-nome');

const qtdItemInput = document.getElementById('input-quantidade');

const btnCadastro = document.getElementById('btn-cadastrar');

const listaEstoque = document.getElementById('lista-estoque');

btnCadastro.addEventListener('click', function() {
    const nomeItem = nomeItemInput.value;
    const qtdItem = parseInt(qtdItemInput.value);

    
    if (!nomeItem || isNaN(qtdItem)) {
        alert("Preencha todos os campos corretamente!");
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
        console.log("Item cadastrado com sucesso:", dadosSalvos);
        
        
        qtdItemInput.value = "";
        nomeItemInput.value = "";

        atualizarTelaAlmoxarifado();
    })
    .catch(erro => console.error("Erro ao cadastrar:", erro));
});