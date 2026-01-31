import "dotenv/config";

const url = "https://accounts.spotify.com/api/token";

export const refreshToken = async (refresh_token) => {
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${new Buffer.from(process.env.client_id + ":" + process.env.client_secret).toString("base64")}`,
        "content-type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=refresh_token&refresh_token=${refresh_token}&client_id=${process.env.client_id}`,
    });

    let data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
