import { Router } from "express";
import {
  getAvailableCountriesController,
  getCountryInfoController,
} from "../controllers/countries.controller.js";

const router = Router();

router.get("/countries", getAvailableCountriesController);
router.get("/country/:countryCode", getCountryInfoController);

export default router;
