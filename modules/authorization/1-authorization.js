import "dotenv/config";

const base_url = "https://accounts.spotify.com/authorize";
const client_id = process.env.client_id;
const callback_url = "https://gtfs-md0x.onrender.com/callback";
const scope = "user-read-playback-state%20user-read-currently-playing";

console.log(
  `${base_url}?client_id=${client_id}&response_type=code&redirect_uri=${callback_url}&scope=${scope}`,
);
