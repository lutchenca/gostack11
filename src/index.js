const express = require("express");

const app = express();

app.use(express.json()); //precisa vir sempre antes das rotas

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

app.delete("/projects/:id", (req, res) => {
  return res.json(["Projetct One", "Project Two"]);
});

app.listen(3333, () => {
  console.log("Backend started!");
});
