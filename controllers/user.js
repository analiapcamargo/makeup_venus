import { Router } from "express";
import express from "express";
import { checkUser, createUser } from "../services/user.js";

const router = Router();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.get("/teste", (req, res) => {
  return res.status(200).send("ok");
});

router.get("/signup", async function (req, res) {
  res.render("signup");
});

router.get("/home", function (req, res) {
  res.render("index");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/add", async function (req, res) {
  const { name, sname, email, password } = req.body;

  if(await createUser(name, sname, email, password)){
    res.render('login')
  }else{
    res.render('signup')
  }

});

router.post("/check", async function (req, res) {
  const { email, password } = req.body;
  if(await checkUser(email, password)){
    res.render('index')
  }else{
    res.render('login')
  }
  
});


router.get("/user", async function (req, res) {
  const userList = await listUsers();
  res.send(userList);
});

router.get("/status", async function (req, res) {
  return res.status(200).json({ status: "online" });
});

export default router;
