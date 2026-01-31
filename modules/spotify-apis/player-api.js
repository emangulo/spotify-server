import "dotenv/config";
import { getAccessToken } from "../database/cache.js";

const url = "https://api.spotify.com/v1/me/player";

export const playerState = async (user_id = 1) => {
  let access_token = await getAccessToken(user_id);
  try {
    let response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const playerAction = async (action, user_id = 1) => {
  let access_token = await getAccessToken(user_id);

  try {
    let response = await fetch(`${url}/${action}`, {
      method: action === "next" ? "POST" : "PUT",
      headers: { Authorization: `Bearer ${access_token}` },
    });
  } catch (error) {
    console.error(error);
  }
};
