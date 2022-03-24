const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express(); //converteu o corpo da requisicao de json pra um obj que se consegue entender na aplicacao

app.use(express.json()); //precisa vir sempre antes das rotas

const projects = [];

function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next(); // proximo middleware
}

app.use(logRequests); // log da requisicao e como nao se tinha o proximo middleware, tudo que vinha dps nao era mais executado 

app.get("/projects", (req, res) => {
  const { title, owner } = req.query;

  const results = title
  ? projects.filter(project => project.title.includes(title))
  : projects;
  return res.json(results);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  const project = { id:uuid(), title, owner };

  projects.push(project);

  return res.json(project);
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;
  
  const projectIndex = projects.findIndex(project => project.id === id); // percorre o array e retorna o index em que o projeto estah

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'project not found'})
  }

  const project = {
    id, 
    title,
    owner,
  };

  projects[projectIndex] = project;

  return res.json(project);
});

app.delete("/projects/:id", (req, res) => {
  return res.json(["Projetct One", "Project Two"]);
});

app.listen(3333, () => {
  console.log("Backend started!");
});
