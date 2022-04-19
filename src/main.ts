import express from "express";
import { User, Role } from "../types";

const app = express();
const port = 3000;

app.use(express.json());

const users: Array<User> = [{name:'david',age:14,description:'as',role: Role.Admin},{name:'carlos',age:17,description:'as',role: Role.User}];

app.get("/", (req, res) => {
  res.json({ message: "Get all", data: users });
});

app.post("/", (req, res) => {
  users.push(req.body);
  res.json({ message: "Added", data: users });
});

app.get("/:name", (req, res) => {
  const { name } = req.params;
  const userFinded = users.find((user, i) => {
    return user.name === name
  })
  if(!userFinded) {
    res.json({
      message: 'Error: User no exist',
      data: { name },
    })
    return
  }
  res.json({
    message: 'Get one',
    data: { user: userFinded },
  })
});


app.patch("/:name", (req, res) => {
  const { name } = req.params;
  const body = req.body;
  let indexUser: number | undefined
  const userFinded = users.find((user, i) => {
    if(user.name === name) {
      indexUser = i
      return true
    }
    return false
  })
  if(!userFinded || !indexUser) {
    res.json({
      message: 'Error: User no exist',
      data: { name },
    })
    return
  }
  users[indexUser] = { ...userFinded, ...body }
  res.json({
    message: 'updated',
    data: users[indexUser],
  })
});

app.delete("/:name", (req, res) => {
  const { name } = req.params;
  const indexUser = users.findIndex((user, i) => {
    return user.name === name
  })
  if(!indexUser) {
    res.json({
      message: 'Error: User no exist',
      data: { name },
    })
    return
  }
  users.splice(indexUser, 1);
  res.json({
    message: 'deleted',
    data: { name },
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
