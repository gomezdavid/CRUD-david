import express from "express";
import { User } from "../types";

const app = express();
const port = 3000;

app.use(express.json());

const users: Array<User> = [];

app.get("/", (req, res) => {
  res.json({ users });
});

app.post("/", (req, res) => {
  users.push(req.body);
  res.json({ users });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
