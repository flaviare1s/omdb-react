# Consumo da API OMDb - Atividade do curso de Full Stack da +PraTi

## Visão Geral

Esta é uma aplicação em React que consome a API do OMDb (Open Movie Database). Ela permite que os usuários busquem filmes, visualizem os detalhes completos de cada um e gerenciem uma lista de favoritos que é persistida localmente.

## Funcionalidades

1.  **Página de Busca:** Um campo de texto para buscar filmes, com a exibição de resultados em formato de card, mostrando pôster, título e ano. Cada card é clicável e leva à página de detalhes.
2.  **Paginação:** Permite a navegação entre as páginas de resultados da busca.
3.  **Página de Detalhes:** Exibe informações completas sobre um filme específico, como diretor, elenco, sinopse, e avaliação.
4.  **Lista de Favoritos:** Funcionalidade de adicionar ou remover filmes de uma lista de favoritos, com os dados persistidos no `localStorage` do navegador.
5.  **Tratamento de Erros & Loading:** Exibe um indicador de carregamento enquanto aguarda a resposta da API e mensagens de erro quando a busca falha.

## Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto em sua máquina local.

1. Clonar o projeto
````bash
git clone https://github.com/flaviare1s/omdb-react.git
````

2. Instalar as Dependências
Na pasta do projeto, instale as dependências:

```bash
npm install
```

3. Obtenha sua chave gratuita no site oficial do OMDb: 
- [OMDb](https://www.omdbapi.com/apikey.aspx)

4. Renomeie o arquivo .env.example para .env e adicione sua chave de api do OMDB

5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

6. A aplicação estará disponível em seu navegador, geralmente em http://localhost:5173.
