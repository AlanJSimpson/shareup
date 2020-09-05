const express = require("express"),
  router = express.Router();

router.get("/", (request, response) =>
  response.send({ teste: "testando Registro" })
);

module.exports = router;
