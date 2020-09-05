const express = require("express"),
  router = express.Router();

router.get("/", (request, response) => {
  response.send({ teste: "funciona!" });
});

module.exports = router;
