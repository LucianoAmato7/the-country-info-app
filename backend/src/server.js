import express from "express";
import RouterCountries from "./routes/countries.routes.js";
import routeNotFound from "./middleware/routeNotFound.js";
import apiKeyMiddleware from "./middleware/apiKeyMiddleware.js";

const app = express();

const args = process.argv.slice(2); 
const port = args[0] || 5000;

app.use(apiKeyMiddleware);
app.use("/api", RouterCountries);
app.use("*", routeNotFound);

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});

app.on("error", (error) => {
  console.log(`Error in Server: ${error}`);
});
