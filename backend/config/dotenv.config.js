import dotenv from "dotenv";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const countriesList = process.env.COUNTRIESLIST;
export const borderCountries = process.env.BORDERCOUNTRIES;
export const countriesPopulation = process.env.COUNTRIESPOPULATION;
export const countriesFlag = process.env.COUNTRIESFLAG;
