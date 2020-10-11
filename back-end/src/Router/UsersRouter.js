const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.send("e aí");
});

router.post("/register", (req, res) => {
  res.send(req.body);

  //inserir no banco de dados.
});

router.post("/login", (req, res) => {
  //verificar se o login é válido
});

module.exports = router;
