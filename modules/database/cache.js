import { refreshToken } from "../authorization/3-refresh-token.js";
import { getUserData } from "./supabase.js";

export let localCache = {};

export let getAccessToken = async (user_id) => {
  let now = Date.now();

  if (!localCache[user_id] || now > localCache[user_id].expires) {
    let user_data = await getUserData(user_id);
    let refresh_token = user_data.refresh_token;

    let response = await refreshToken(refresh_token);
    localCache[user_id] = {
      updated: now,
      expires: now + response.expires_in * 1000,
      refresh_token: refresh_token,
      data: response,
    };
  }

  return localCache[user_id].data.access_token;
};
