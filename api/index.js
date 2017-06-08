import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({data: []});
});

router.get("/lol", (req, res) => {
  res.send("HAHAHAHAHAHAHAHA\n");
});

export default router;