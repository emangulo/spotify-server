import "dotenv/config";

const url = "https://accounts.spotify.com/api/token";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `grant_type=client_credentials&client_id=${process.env.client_id}&client_secret=${process.env.client_secret}`,
};

const getAccessToken = async () => {
  try {
    let response = await fetch(url, options);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getAccessToken();
