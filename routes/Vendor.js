import { Router } from "express";
import { getList } from "../controllers/Vendor.js";

const route = Router();

route.get("/list/:category", getList);

export default route;
