import express from "express";
import RouterCountries from "./routes/countries.routes.js";
import routeNotFound from "./middleware/routeNotFound.js";
import apiKeyMiddleware from "./middleware/apiKeyMiddleware.js";

const app = express();

const port = 5000;

app.use(apiKeyMiddleware);
app.use("/api", RouterCountries);
app.use("*", routeNotFound);

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});

app.on("error", (error) => {
  console.log(`Error in Server: ${error}`);
});
