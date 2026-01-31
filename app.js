import "dotenv/config";
import express from "express";

import { playerRouter } from "./modules/routes/player-routes.js";
import { localCache } from "./modules/database/cache.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/player", playerRouter);

app.get("/cache", (req, res) => [res.send(localCache)]);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
