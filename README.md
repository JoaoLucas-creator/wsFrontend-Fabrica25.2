# PokeAPI

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/) 
[![Next.js](https://img.shields.io/badge/Next.js-13.5.2-black?logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Um projeto web feito com **Next.js** que lista os 151 primeiros Pokémons, permitindo busca, visualização detalhada e favoritos. A aplicação consome dados da [PokeAPI](https://pokeapi.co).
---
## Hospedagem na Vercel
https://ws-frontend-fabrica25-2-mu.vercel.app/
---

## Funcionalidades

- Lista os 151 primeiros Pokémons com:
  - Nome
  - ID da Pokédex
  - Imagem
- Barra de pesquisa para buscar Pokémons por nome ou ID
- Alternar visual entre **grid** e **lista**
- Visualizar apenas Pokémons favoritos
- Header e Footer estilizados
- Página de detalhes do Pokémon (opcional)
- Responsivo para diferentes tamanhos de tela

---

## Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- Javascript
- CSS
- [PokeAPI](https://pokeapi.co) para os dados dos Pokémons

---

## Estrutura do projeto

pokeapp-nextjs/
├─ pages/
│ ├─ index.js # Página inicial
│ ├─ favoritos.js # Página de favoritos
│ └─ detalhes/[id].js # Página de detalhes de cada Pokémon
├─ src/components/
│ ├─ Header.js # Cabeçalho
│ └─ Footer.js # Rodapé
├─ src/utils/
│ └─ fetchPokemons.js # Função para buscar Pokémons da API
├─ styles/
│ └─ global.css # CSS global do projeto
├─ package.json
└─ package-lock.json

## Instalação

1. Clone o projeto:

```bash
git clone <seu-repositório>
Acesse a pasta do projeto: https://github.com/JoaoLucas-creator/wsFrontend-Fabrica25.2

bash
Copiar código
cd pokeapp-nextjs
Instale as dependências:

bash
Copiar código
npm install
Rode a aplicação em modo de desenvolvimento:

bash
Copiar código
npm run dev
Abra o navegador em:

arduino
Copiar código
http://localhost:3000
