import express from "express";
let router = express.Router();

import { playerAction, playerState } from "../spotify-apis/player-api.js";

router.get("/state", async (req, res) => {
  let now = new Date().toLocaleString();
  console.log(`${req.route.path} ${now}`);
  try {
    let player = await playerState();

    if (player.error || req.query.raw) {
      console.error(player);
      res.send(player);
      return;
    }

    let details = {
      is_playing: player.is_playing,
      song: player.item.name,
      artist: player.item.artists[0].name,
      album: player.item.album.name,
      album_image: player.item.album.images[0].url,
      updated: new Date().toISOString(),
    };
    res.send(details);
  } catch (error) {
    console.error(error);
  }
});

router.get("/:action", async (req, res) => {
  let now = new Date().toLocaleString();
  let action = req.params.action;
  console.log(`/${action} ${now}`);
  try {
    await playerAction(action);
  } catch (error) {
    console.error(error);
  }
  res.send(`${action} done!`);
});

export { router as playerRouter };
