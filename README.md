# Mobile Challenge 🏅 2023 - Dictionary

> This is a challenge by Coodesh

## Introdução

Este é um desafio para que possamos ver as suas habilidades como Mobile Developer.
Nesse desafio você deverá desenvolver um aplicativo para listar palavras em inglês, utilizando como base a API Free Dictionary API. O projeto a ser desenvolvido por você tem como objetivo exibir termos em inglês e gerenciar as palavras visualizadas, conforme indicado nos casos de uso que estão logo abaixo.

## Tecnologías:

### Front-End:

- Framework: React Native
- Estilização: Native Base
- Gestão de Dados: Redux & Redux Context
- Requisões: Axios
- Caché: React Native Async Storage

### Back-End:

- Firebase Javacript SDK

### Testes Unitários

- Jest
- React Native Testing Library

## Requisitos do Aplicativo

**Obrigatório 1** - Você deverá atender aos seguintes casos de uso:

Como usuário, devo ser capaz de visualizar uma lista de palavras com rolagem infinita
Como usuário, devo ser capaz de visualizar uma palavra, significados e a fonética
Como usuário, devo ser capaz de salvar a palavra como favorito
Como usuário, devo ser capaz de remover a palavra como favorito
Como usuário, devo ser capaz de visitar uma lista com as palavras que já vi anteriormente

A API não possui endpoint com a lista de palavras. Essa lista pode ser carregada em memória ou ser salva em banco de dados local ou remoto (por exemplo, com Firebase). Será necessário usar o arquivo existente dentro do projeto no Github.

**Obrigatório 2** - Salvar em cache o resultado das requisições, para agilizar a resposta em caso de buscas com parâmetros repetidos.

**Obrigatório 3** - Seguir o wireframe para a página de listagem dos dados. Pode-se alterar a posição dos itens, mantendo as funcionalidades solicitadas.

## Processo

Esta seção se refere ao processo mental que eu fiz para poder criar o aplicativo. Em geral poderia se dizer que é um padrão próprio que acabei utilizando para a maioria dos projetos.

### Pesquisa Prévia:

- **Designs para a parte de login/registro:** em pinterest, isto me leva a https://www.behance.net/gallery/164556805/UI-Design-Money-App só preciso o design de login e dai vou ir adaptando segundo as minhas próprias necessidades.

- **Designs para a parte interna do app:** sobre como se veria uma app de dicionário. Não consigo algo que atenda aos meus requisitos e gostos pessoais, existe algo mas não é 100% do meu gosto, posso me inspirar de aqui https://dribbble.com/shots/5313362-Unilever-Ecommerce-Mobile-App-Concept-AXD/attachments/1152533 mas decido ir por conta propria.

- **Fontes:** Preciso de uma fonte e cores que sejam agradáveis visualmente. Sei que usar variações de azul com branco e tons suaves com fontes Sans Serif são ideais para este fim, escolho Urbanist. É simples e serve ao meu propósito.

- **Logo:** Para esta parte faço uso de um serviço gratuito de https://smashinglogo.com/ que da ideias sobre logos usando icones e tipografia gratuita. Isto gera um arquivo SVG que pode ser usado como logotipo do app.

### Início do projeto e adição de pacotes

- Início criando o projeto com o template do expo com typescript, adiciono as fontes, redux, e native-base como gestor de estilos, para ele adiciono um arquivo de temas que vai servir para colocar as cores primárias, secundárias, tons de cinza, etc.

- Também vai ser necessário react-navigation, axios, e vou usar stack e bottom tabs para dar um melhor estilo ao wireframe

- Ao fim, para manter os dados em caché vou usar AsyncStorage e para manter o código limpo, uso esw (ESLint Watch) e TSC (Typescript Compiler) com algumas regras que eu aprendi que são necessárias ja que me ajudam a escreever menos erros no código.

### Estrutura do projeto

Muitos dos meus projetos seguem um padrão fixo, para este projeto vai ser o seguinte:

```
coodesh-dictionary/
├── src/
│   ├── index.d.ts
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Text.tsx
│   │   │   └── TextInput.tsx
│   │   │
│   │   ├── auth/
│   │   └── account
│   │
│   ├── config/
│   │   ├── firebase.ts
│   │   └── theme.ts
│   │
│   ├── data/
│   │   └── wordlist.json
│   │
│   ├── hooks/
│   │   ├── index.ts
│   │   ├── storage.ts
│   │   └── redux.ts
│   │
│   ├── navigators/
│   │   ├── AppStack.tsx
│   │   ├── AuthStack.tsx
│   │   └── AccountTab.tsx
│   │
│   ├── redux/
│   │   ├── index.ts
│   │   ├── actions/
│   │   └── slices/
│   │       ├── authSlice.ts
│   │       └── accountSlice.tsx
│   │
│   ├── screens/
│   │   ├── Auth/
│   │   │   ├── LogIn.tsx
│   │   │   └── Register.tsx
│   │   ├── Account/
│   │   │   ├── Favorites.tsx
│   │   │   ├── History.tsx
│   │   │   └── WordList.tsx
│   │   └── Details/
│   │       └── WordDetails.tsx
│   │
│   ├── services/
│   │   └── index.ts
│   │
│   └── types/
│       ├── index.ts
│       ├── components.ts
│       ├── store.ts
│       └── navigators.ts
│
└── App.tsx

```
