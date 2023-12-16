import { Router } from "express";
import { register, login } from "../controllers/User.js";

const route = Router();

route.post("/register", register);

route.post("/login", login);

export default route;
