import { api_Key } from "../../config/dotenv.config.js";

function apiKeyMiddleware(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({ error: "API key is required" });
  }

  if (apiKey !== api_Key) {
    return res.status(403).json({ error: "Invalid API key" });
  }

  next();
}

export default apiKeyMiddleware;
