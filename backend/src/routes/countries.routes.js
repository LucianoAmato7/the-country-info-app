import { Router } from "express";
import {
  getAvailableCountriesController,
  getCountryInfoController,
} from "../controllers/countries.controller.js";

const router = Router();

router.get("/", getAvailableCountriesController);
router.get("/:countryCode", getCountryInfoController);

export default router;
