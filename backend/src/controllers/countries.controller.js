import {
  getAvailableCountries,
  getCountryInfo,
} from "../services/countries.services.js";

export const getAvailableCountriesController = async (req, res) => {
  try {
    const countries = await getAvailableCountries();
    res.json(countries);
  } catch (error) {
    console.log(`Error in getAvailableCountriesController: ${error}`);
    res.status(500).json({ error });
  }
};

export const getCountryInfoController = async (req, res) => {
  try {
    const countryCode = req.params.countryCode;
    const countryInfo = await getCountryInfo(countryCode);
    res.json(countryInfo);
  } catch (error) {
    console.log(`Error in getCountryInfoController: ${error}`);
    res.status(500).json({ error: error.message });
  }
};
