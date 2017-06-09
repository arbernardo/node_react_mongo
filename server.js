import express from "express";
import config from "./config";

import router from "./api";

const server = express();

server.listen(config.port, () => {
  console.log("Server started on port ", config.port);
});

server.set("view engine", "ejs");

server.use(express.static("public"));
server.use("/api", router);

server.get("/", (req, res) => {
  res.render("index", {
    content: "hahaha",
    contentUlit: "<b>LOL</b>"
  });
});