Markdown


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/B74p-HKt)

# Almoxarifado de Enfermagem

Projeto prático de um sistema de controle de estoque e suprimentos hospitalares, desenvolvido para a disciplina de **Programação Front-End**. A aplicação realiza o gerenciamento de insumos médicos em tempo real, integrando uma interface web a uma API de testes.

---

## 🚀 Link do Projeto no Ar
* **Link da Aplicação:** [https://universidade-cesumar.github.io/prova-2bi-ads-esoft-3sem-Robersos/]

---

## Descrição do Projeto

Este sistema foi desenvolvido com o objetivo de aplicar conceitos fundamentais de desenvolvimento Front-End moderno, focando na manipulação dinâmica do DOM (Document Object Model) e no consumo de APIs assíncronas.

O projeto simula o dia a dia de um almoxarifado hospitalar, permitindo o cadastro de novos materiais, listagem automatizada, filtros em tempo real, movimentações de estoque (Baixa e Aporte) e exclusão de itens.

### Conceitos e Métodos Aplicados
* **Operações Assíncronas (CRUD Completo):** Uso do método `fetch()` combinado com a sintaxe moderna `async/await` para realizar requisições do tipo `GET` (leitura), `POST` (criação), `PUT` (atualização) e `DELETE` (exclusão) de dados.
* **Tratamento de Erros Robustos:** Implementação de blocos estruturados de `try/catch` em todas as requisições para evitar travamentos na aplicação em caso de falhas de rede.
* **Filtros e Regras de Negócio:** Sistema automatizado de pesquisa em tempo real por palavras-chave e validações rígidas de movimentação de estoque por meio de funções de testes isoladas.
* **Alertas Visuais de Dashboard:** Identificação visual automática (através da classe `.estoque-critico`) para qualquer item com estoque inferior a 10 unidades e um contador dinâmico com o total acumulado do almoxarifado.
* **Manipulação Dinâmica de Elementos:** Criação e renderização de elementos HTML direto pelo JavaScript através dos métodos `document.createElement` e `appendChild`.
* **Organização de Layout com Flexbox:** Estilização estruturada com CSS moderno, garantindo alinhamento centralizado, responsividade e uma identidade visual limpa baseada na área da saúde.

---

## Ferramentas & Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

| Tecnologia / Ferramenta | Função no Projeto |
| :--- | :--- |
| **HTML5** | Estruturação semântica do formulário de cadastro, área de pesquisa e lista de suprimentos. |
| **CSS3** | Estilização personalizada, aplicação de Flexbox, regras de acessibilidade e efeitos visuais responsivos (como alertas de estoque crítico). |
| **JavaScript (ES6+)** | Lógica de programação, validação de segurança, manipulação dinâmica do DOM e escopo protegido para testes automatizados. |
| **MockAPI** | Integração completa com serviço REST externo para persistência de dados em nuvem em tempo real. |
| **Jest / Node.js** | Ferramentas utilizadas no ambiente de testes automatizados para validação das regras de negócio do sistema. |

---