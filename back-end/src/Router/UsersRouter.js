const express = require("express");
const router = express.Router();

router.post("/cadastro", (req, res) => {
  const { nome, email, senha } = req.body;

  //inserir no banco de dados.
});

module.exports = router;
