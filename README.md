<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/grochavieira/chat-app?color=%2304D361&style=flat">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/grochavieira/chat-app?style=flat">
  
  <a href="https://github.com/grochavieira/chat-app/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/grochavieira/chat-app?style=flat">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat">
  
 
</p>
<h1 align="center">
    Chat App
</h1>

<h4 align="center"> 
	🚧  Aplicação Finalizada 🚧
</h4>

## 🏁 Tópicos

<p>
 👉<a href="#-sobre-o-projeto" style="text-decoration: none; "> Sobre</a> <br/>
👉<a href="#-funcionalidades" style="text-decoration: none; "> Funcionalidades</a> <br/>
👉<a href="#-layout" style="text-decoration: none"> Layout</a> <br/>
👉<a href="#-como-executar-o-projeto" style="text-decoration: none"> Como executar</a> <br/>
👉<a href="#-tecnologias" style="text-decoration: none"> Tecnologias</a> <br/>
👉<a href="#-autor" style="text-decoration: none"> Autor</a> <br/>
👉<a href="#user-content--licença" style="text-decoration: none"> Licença</a>

</p>

## 💻 Sobre o projeto

⚡ Um simples chat com Socket.io, Node.js e React, com o objetivo de aprender como funciona o Socket.io e que foi desenvolvido seguindo um tutorial no YouTube: https://youtu.be/ZwFA3YMfkoc

---

<a name="-funcionalidades"></a>

## ⚙️ Funcionalidades

- [x] Usuário iniciar um chat ao inserir um nome de usuário e da sala que quer participar;
- [x] Uma mensagem de bem-vindo é mostrada na primeira vez que o usuário acessa;
- [x] Quando outros usuário entram na sala é possível mostrado uma mensagem;
- [x] As mensagens de outros usuários são mostradas imediatamente;
- [x] Quando um usuário sai da sala é mostrado uma mensagem da sua saída.

---

## 🎨 Layout

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:

1. Backend (pasta server)
2. Frontend (pasta client)

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/en/docs/install).d
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/grochavieira/chat-app.git

# Acesse a pasta do projeto no terminal/cmd
$ cd chat-app

# Vá para a pasta server
$ cd server

# Instale as dependências com npm
$ npm install

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/grochavieira/chat-app.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd chat-app

# Vá para a pasta client
$ cd client

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[Socket.io Client](https://socket.io/docs/client-api/)**
- **[React Emoji](https://www.npmjs.com/package/react-emoji)**
- **[React Scroll To Bottom](npmjs.com/package/react-scroll-to-bottom)**

> Veja o arquivo [package.json](https://github.com/grochavieira/chat-app/blob/master/client/package.json)

#### **Server** ([NodeJS](https://nodejs.org/en/))

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[Nodemon](https://nodemon.io/)**
- **[Socket.io](https://socket.io/)**

> Veja o arquivo [package.json](https://github.com/grochavieira/chat-app/blob/master/server/package.json)

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**

---

<a name="-autor"></a>

## 🦸‍♂️ **Autor**

<p>
 <img src="https://avatars.githubusercontent.com/u/48029638?s=460&u=40540691957b5aabf04e2e1d4cddf8d3633cb1be&v=4" width="150px;" alt="grochavieira"/>
 <br />
 <sub><strong>🌟 Guilherme Rocha Vieira 🌟</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/-linkedin-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/grochavieira/)](https://www.linkedin.com/in/grochavieira/)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com :satisfied: por Guilherme Rocha Vieira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/grochavieira/)

---
