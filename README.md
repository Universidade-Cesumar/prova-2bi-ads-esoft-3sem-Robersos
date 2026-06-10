[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/B74p-HKt)

#  Almoxarifado de Enfermagem

Projeto prático de um sistema de controle de estoque e suprimentos hospitalares, desenvolvido para a disciplina de **Programação Front-End**. A aplicação realiza o gerenciamento de insumos médicos em tempo real, integrando uma interface web a uma API de testes.

---

## Descrição do Projeto

Este sistema foi desenvolvido com o objetivo de aplicar conceitos fundamentais de desenvolvimento Front-End moderno, focando na manipulação dinâmica do DOM (Document Object Model) e no consumo de APIs assíncronas.

O projeto simula o dia a dia de um almoxarifado hospitalar, permitindo o cadastro de novos materiais e a listagem automatizada dos itens já armazenados.

### Conceitos e Métodos Aplicados
* **Operações Assíncronas (CRUD):** Uso do método `fetch()` do JavaScript para realizar requisições do tipo `GET` (leitura) e `POST` (criação) de dados.
* **Consumo de API Externa:** Integração completa com o serviço **MockAPI** para simular a persistência de dados em um banco de dados em nuvem.
* **Manipulação Dinâmica de Elementos:** Criação e renderização de elementos HTML (`<li>`) direto pelo JavaScript através dos métodos `document.createElement` e `appendChild`.
* **Organização de Layout com Flexbox:** Estilização estruturada com CSS moderno, garantindo alinhamento centralizado, responsividade e uma identidade visual limpa baseada na área da saúde.

---

## Ferramentas & Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

| Tecnologia / Ferramenta | Função no Projeto |
| :--- | :--- |
| **HTML5** | Estruturação semântica do formulário de cadastro e da lista de suprimentos. |
| **CSS3** | Estilização personalizada, aplicação de Flexbox e efeitos visuais como `:hover` e `:focus`. |
| **JavaScript (ES6+)** | Lógica de programação, validação de campos, uso de *Arrow Functions* e controle