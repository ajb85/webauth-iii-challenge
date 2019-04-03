const express = require("express");
const helmet = require("helmet");
const cores = require("cors");

const authRoutes = require("./auth/routes.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRoutes);

server.get("/", (req, res) => {
  res.status(200).send("Still alive");
});

module.exports = server;
