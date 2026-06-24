const URL_API = "https://6a29e985f59cb8f65f1dc4af.mockapi.io/almx/item";
const nomeItemInput = document.getElementById('input-nome');

const qtdItemInput = document.getElementById('input-quantidade');

const btnCadastro = document.getElementById('btn-cadastrar');

const listaEstoque = document.getElementById('lista-materiais');

const inputMovimentacao = document.getElementById('input-retirada');

function validarRetirada(estoqueAtual, quantidadeRetirada) {
    if (isNaN(quantidadeRetirada) || quantidadeRetirada <= 0) {
        return false;
    }

    if (quantidadeRetirada > estoqueAtual) {
        return false;
    }

    return true;
}

btnCadastro.addEventListener('click', async function () {
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


   try {
        const resposta = await fetch(URL_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoProduto)
        });

        if (!resposta.ok) {
            throw new Error("Não foi possível salvar o produto.");
        }

    
        qtdItemInput.value = "";
        nomeItemInput.value = "";
        renderizarItens();

    } catch (erro) {
        
        console.error("Erro ao cadastrar:", erro);
        alert("Erro ao conectar com o servidor. Tente novamente mais tarde.");
    }
});



function renderizarItens() {
    fetch(URL_API)
        .then(resposta => resposta.json())
        .then(itensDaAPI => {

            listaEstoque.innerHTML = "";

            const totalItensElemento = document.getElementById('total-itens');

            if (totalItensElemento) {
                totalItensElemento.textContent = itensDaAPI.length;
            }


            itensDaAPI.forEach(item => {
                const novaLinha = document.createElement('li');


                novaLinha.innerText = `Item: ${item.nome} || Quantidade: ${item.quantidade}`;

                if (item.quantidade < 10) {
                    novaLinha.classList.add('estoque-critico');
                }




                const baixaBotao = document.createElement('button');
                baixaBotao.className = 'btn-baixar';
                baixaBotao.textContent = 'Baixa';

                baixaBotao.addEventListener('click', () => {
                    const qtdBaixa = parseInt(inputMovimentacao.value);

                    if (!validarRetirada(item.quantidade, qtdBaixa)) {
                        alert("Quantidade inválida ou insuficiente para retirada!");
                        return;
                    }

                    const dadoAtualizado = { quantidade: item.quantidade - qtdBaixa };

                    fetch(`${URL_API}/${item.id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(dadoAtualizado)
                    })
                        .then(res => res.json())
                        .then(() => {
                            inputMovimentacao.value = "";
                            renderizarItens();
                        });
                });

                const aporteBotao = document.createElement('button');
                aporteBotao.className = 'btn-aporte';
                aporteBotao.textContent = 'Aporte';

                aporteBotao.addEventListener('click', () => {
                    const qtdAporte = parseInt(inputMovimentacao.value);

                    if (isNaN(qtdAporte) || qtdAporte <= 0) {
                        alert("Digite uma quantidade válida para o aporte!");
                        return;
                    }

                    const dadoAtualizado = { quantidade: item.quantidade + qtdAporte };

                    fetch(`${URL_API}/${item.id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(dadoAtualizado)
                    })
                        .then(res => res.json())
                        .then(() => {
                            inputMovimentacao.value = "";
                            renderizarItens();
                        });
                });


                const botaoExcluir = document.createElement('button');
                botaoExcluir.textContent = "Excluir";
                botaoExcluir.className = "btn-excluir";
                botaoExcluir.addEventListener('click', () => {



                    fetch(`${URL_API}/${item.id}`, {
                        method: 'DELETE'
                    })
                        .then(resposta => {
                            if (resposta.ok) {
                                console.log("Item deletado com sucesso!");
                                renderizarItens();
                            }
                        })
                        .catch(erro => console.error("Erro ao deletar:", erro));


                });


                const botoesContainer = document.createElement('div');
                botoesContainer.className = 'controles-container';


                botoesContainer.appendChild(baixaBotao);
                botoesContainer.appendChild(aporteBotao);
                botoesContainer.appendChild(botaoExcluir);
                novaLinha.appendChild(botoesContainer);
                listaEstoque.appendChild(novaLinha);
            });
        })
        .catch(erro => {
            console.error("Erro ao buscar os dados da API:", erro);
        });
}

if (typeof document !== 'undefined') {
    const inputBusca = document.getElementById('input-busca');

    if (inputBusca) {
        inputBusca.addEventListener('input', () => {

            const termoBusca = inputBusca.value.toLowerCase();


            const linhasMateriais = document.querySelectorAll('#lista-materiais li');

            linhasMateriais.forEach(linha => {

                const textoLinha = linha.innerText.toLowerCase();


                if (textoLinha.includes(termoBusca)) {
                    linha.style.display = 'flex';
                } else {
                    linha.style.display = 'none';
                }
            });
        });
    }
}

window.onload = function () {
    renderizarItens();
};