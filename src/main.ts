import express from "express";
import { User } from "../types";

const app = express();
const port = 3000;

app.use(express.json());

const users: Array<User> = [{name:'david',age:14,description:'as',role:'as'},{name:'carlos',age:17,description:'as',role:'as'}];

app.get("/", (req, res) => {
  res.json({ users });
});

app.post("/", (req, res) => {
  users.push(req.body);
  res.json({ users });
});

app.patch("/:name", (req, res) => {
  const { name } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data:body,
    name,
  })
});

app.delete("/:name", (req, res) => {
  const { name } = req.params;
  res.json({
    message: 'deleted',
    name,
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
