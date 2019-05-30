const express = require("express");
const morgan = require("morgan");
const dbConnection = require("./connection");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined"));

app.get("/api/v1/phish/members", (req, res) => {
  dbConnection("member")
    .select("*")
    .then(members => res.status(200).json(members))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }));
});

app.get("/api/v1/phish/members/:id", (req, res) => {
  dbConnection("member")
    .select("*")
    .limit(1)
    .where({ id: req.params.id })
    .then(members => res.status(200).json(members))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }));
});

app.listen(PORT, () => console.log(`Example app running!`));
