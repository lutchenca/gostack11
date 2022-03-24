# Criando o Projeto

- 1 - Criar o repositorio e dar um `yarn init` no terminal 

OBS: package.json - armazena as informacoes de dependencias do projeto e algumas informacoes sobre ele (nome, versao, etc)

- 2 - Abre o projeto e cria a pasta `src`  (source, codigo fonte)

- 3 - Dentro de src, cria o arquivo `index.js`

- 4 - Instala o Express (framework do node): `yarn add express`

OBS: uma das principais funcionalidades de adicionar o express eh poder adicionar rotas na aplicacao, para poder ter retornos diferentes e gerencia isso e o middleware

- 5 - Dentro do `index.js` o codigo inicial criador sera para poder rodar a sua aplicacao no localhost

```tsx
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send({ message: "Hello World"});
});

app.listen(3333);
```

Nao usou o request pq ele eh o que guarda as requisições que o usuário guarda, ex: qual a rota que ele esta acessando, os parâmetros que ele envia pra rota, etc. 

- 6 - roda o programa: `node src/index.js`

- 7 - Instala o nodemon - ferramenta que mantem a aplicacao rodando sempre sem precisar reinicializar `yarn add nodemon -D` e depois inicializa ele passando o nome do arquivo `yarn nodemon src/index.js` ou altera o package.json pra conter o script 

```tsx
"scripts": {
    "dev": "nodemon"
  },
```

- 8 - Para facilitar, acrescenta uma mensagem na rota pro usuario saber se o programa ta rodando corretamente

```tsx
app.listen(3333, () => {
  console.log("Backend started!");
});
```

9 - Insere todas as rotas (get, put, push, del)

```tsx

app.get("/projects", (req, res) => {
  return res.json(["Projetct One", "Project Two"]);
});

app.post("/projects", (req, res) => {
  return res.json(["Project Three"]);
});

app.put("/projects/:id", (req, res) => {
  return res.json(["Project Four"]);
});

app.delete("/projects/:id", (req, res) => {
  return res.json(["Projetct One", "Project Two"]);
});
```

- 10 - Instala a insomnia para poder testar e visualizar as rotas e tambem cria os ambientes de desenvolvimento: dev e producao

- 11 - Criar os parametros da aplicacao

```tsx
app.get("/projects", (req, res) => {
  const { title, owner } = req.query;
  console.log(title);
  console.log(owner);
  return res.json(["Projetct One", "Project Two"]);
});

app.post("/projects", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json(["Project Three"]);
});

app.put("/projects/:id", (req, res) => {
  const params = req.params;
  console.log(params);
  return res.json(["Project Four"]);
});
```

No insomnia

```tsx
localhost:3333/projects?title=Angular&owner=Lut
```

- 12 - roda o projeto com o express - `node index.js` nesse caso ([https://expressjs.com/pt-br/starter/hello-world.html](https://expressjs.com/pt-br/starter/hello-world.html))

```tsx
app.use(express.json()); //precisa vir sempre antes das rotas
```

- 13 - agora cria-se uma aplicacao funcional, por meio da criacao de uma variavel com um array vazio, porque ainda nao se sabe muito sobre conceito de banco de dados. isso funciona como uma memoria dentro da aplicacao, enquanto ela estiver sendo executada as informacoes contida na variavel vao estar disponiveis em todo o projeto - isso jamais deve ser utilizado em producao

```tsx
const projects = [];
```

14 - Instala biblioteca `yarn add uuidv4`

15 - Aplicacao dos middlewares nas requisicoes