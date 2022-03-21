import { response } from "express";
import express, { json } from "express";
import { uuid } from 'uuidv4';

const app = express();

app.use(json()); //precisa vir sempre antes das rotas

const projects = [];

app.get("/projects", (req, res) => {
  const { title, owner } = req.query;
  console.log(title);
  console.log(owner);
  return res.json(["Projetct One", "Project Two"]);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  const project = { id:uuid(), title, owner };

  projects.push(project);

  return res.json(project);
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
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
