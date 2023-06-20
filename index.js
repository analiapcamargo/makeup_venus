import express from "express";
import userController from './controllers/user.js'
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

//chamando controller
app.use('/', userController)


app.listen(3000, function () {
  console.log("Server is running");
});
