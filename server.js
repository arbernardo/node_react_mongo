import express from "express";
import config from "./config";

import router from "./api";

const server = express();

server.listen(config.port, () => {
  console.log("Server started on port ", config.port);
  console.log("changed...");
});

server.use(express.static("public"));
server.use("/api", router);

// server.get("/about.html", (req, res) => {
//   res.send("about.html");
// });