import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

export { userRoutes };