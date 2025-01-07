import express from "express";
import RouterCountries from "./routes/countries.routes.js";
import routeNotFound from "./middleware/routeNotFound.js";

const app = express();
const port = process.env.PORT || 5000;

app.use("/countries", RouterCountries);

app.use("*", routeNotFound);

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});

app.on("error", (error) => {
  console.log(`Error in Server: ${error}`);
});
