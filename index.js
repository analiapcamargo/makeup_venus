import express from "express";
import { listUsers, createUser } from "./services/user.js";
const app = express();

//pra pegar o css e js dos outros arquivos
app.use("/views", express.static("views"));

app.use(express.json());

//para usar o body parser com o próprio express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/signup", async function (req, res) {
  res.render("signup");
});

app.get("/home", function (req, res) {
  res.render("index");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/add", async function (req, res) {
  const { name, sname, email, password } = req.body;

  await createUser(name, sname, email, password);
  res.status(201).send("user created");
});

app.get("/", async function (req, res) {
  const userList = await listUsers();
  res.send(userList);
});

app.get("/status", async function (req, res) {
  return res.status(200).json({ status: "online" });
});

app.listen(3000, function () {
  console.log("Server is running");
});
