import axios from "axios";
import {
  countriesList,
  borderCountries,
  countriesPopulation,
  countriesFlag,
} from "../../config/dotenv.config.js";

export const getAvailableCountries = async () => {
  try {
    const response = await axios.get(countriesList);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const getCountryInfo = async (countryCode) => {
  try {
    const countryInfoResponse = await axios.get(
      `${borderCountries}/${countryCode}`
    );
    const countryInfo = countryInfoResponse.data;

    const populationResponse = await axios.post(countriesPopulation, {
      country: countryInfo.commonName,
    });
    const populationData = populationResponse.data.data;

    const flagResponse = await axios.post(countriesFlag, {
      country: countryInfo.commonName,
    });
    const flagUrl = flagResponse.data.data.flag;

    return {
      countryName: countryInfo.commonName,
      borderCountries: countryInfo.borders,
      populationData: populationData.populationCounts,
      flagUrl: flagUrl,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
