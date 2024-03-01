import { Router } from "express";
import { getAllPlants } from "../controllers/plants.js";

const router = Router()

router.get('/plants', getAllPlants)

export default router