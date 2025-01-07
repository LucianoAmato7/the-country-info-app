import dotenv from "dotenv";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const countriesList = process.env.COUNTRIES_LIST;
export const borderCountries = process.env.BORDER_COUNTRIES;
export const countriesPopulation = process.env.COUNTRIES_POPULATION;
export const countriesFlag = process.env.COUNTRIES_FLAG;
export const api_Key = process.env.API_KEY;
