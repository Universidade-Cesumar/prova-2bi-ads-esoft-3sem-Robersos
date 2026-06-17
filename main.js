const URL_API = "https://6a29e985f59cb8f65f1dc4af.mockapi.io/almx/item";
const nomeItemInput = document.getElementById('input-nome');

const qtdItemInput = document.getElementById('input-quantidade');

const btnCadastro = document.getElementById('btn-cadastrar');

const listaEstoque = document.getElementById('lista-materiais');

btnCadastro.addEventListener('click', function () {
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

function validarRetirada(estoqueAtual, quantidadeRetirada) {

    if (isNaN(quantidadeRetirada) || quantidadeRetirada <= 0) {
        return {
            valido: false,
            mensagem: "Por favor, digite uma quantidade válida para retirada."
        };
    }

    if (estoqueAtual < quantidadeRetirada) {
        return {
            valido: false,
            mensagem: `Quantidade insuficiente! Estoque atual: ${estoqueAtual} unidades.`
        };
    }


    return {
        valido: true,
        novoEstoque: estoqueAtual - quantidadeRetirada
    };
}

function renderizarItens() {
    fetch(URL_API)
        .then(resposta => resposta.json())
        .then(itensDaAPI => {

            listaEstoque.innerHTML = "";


            itensDaAPI.forEach(item => {
                const novaLinha = document.createElement('li');


                novaLinha.innerText = `Item: ${item.nome} || Quantidade: ${item.quantidade}`;


                const inputBaixa = document.createElement('input');
                inputBaixa.className = 'input-retirada'


                const baixaBotao = document.createElement('button');

                baixaBotao.className = 'btn-baixar'
                baixaBotao.textContent = 'Baixa';



                baixaBotao.addEventListener('click', () => {
                    const qtdBaixa = parseInt(inputBaixa.value);


                    const validacao = validarRetirada(item.quantidade, qtdBaixa);


                    if (!validacao.valido) {
                        alert(validacao.mensagem);
                        return;
                    }
                    const dadoAtualizado = {
                        quantidade: validacao.novoEstoque
                    };


                    fetch(`${URL_API}/${item.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(dadoAtualizado)
                    })
                        .then(res => res.json())
                        .then(() => {
                            console.log("Estoque atualizado!");
                            renderizarItens();
                        })
                        .catch(err => console.error("Erro no PUT:", err));
                });


                const aporteBotao = document.createElement('button');

                aporteBotao.className = 'btn-aporte'
                aporteBotao.textContent = 'Aporte';



                aporteBotao.addEventListener('click', () => {
                    const qtdBaixa = parseInt(inputBaixa.value);


                    

                    if (isNaN(qtdBaixa) || qtdBaixa <= 0) {
                        
                          alert("Por favor, digite uma quantidade válida para aporte.");
                          return;
                        
                    }

                    const dadoAtualizado = {
                        quantidade: item.quantidade + qtdBaixa
                    };


                    fetch(`${URL_API}/${item.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(dadoAtualizado)
                    })
                        .then(res => res.json())
                        .then(() => {
                            console.log("Estoque atualizado!");
                            renderizarItens();
                        })
                        .catch(err => console.error("Erro no PUT:", err));
                });





                novaLinha.appendChild(inputBaixa);
                novaLinha.appendChild(baixaBotao);
                novaLinha.appendChild(aporteBotao);
                listaEstoque.appendChild(novaLinha);
            });
        })
        .catch(erro => {
            console.error("Erro ao buscar os dados da API:", erro);
        });
}
renderizarItens();