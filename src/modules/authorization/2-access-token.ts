//@ts-nocheck
import "dotenv/config";

const authCode =
  "AQCYzOYvn_kA6I9xJzsi9Y1JzD611v9lOKu-bCkDPONdyXk0rNmBV3GM4TaWugvTWq0fTLWzXg4P1MMF3O3xIhnCPhgvxoXBHTV5x8BVsRImRhNgaLpwYql-Z91CxvJ4jR7PbUpvt4YMdTKL3Tkg_aLx63ryUCP20iqg6-WKtxDbcJ8O7IM4A0LDlj2znFt2ui5xER54gzxdcqqbA-k-LeOo-q5whYSN5M1--h8ETFw7Mq5dMFyI0Q1Rt-NU9OueKww";
const redirect_uri = "https://gtfs-md0x.onrender.com/callback";

const url = "https://accounts.spotify.com/api/token";
const options = {
  method: "POST",
  headers: {
    Authorization: `Basic ${new Buffer.from(process.env.client_id + ":" + process.env.client_secret).toString("base64")}`,
    "content-type": "application/x-www-form-urlencoded",
  },
  body: `grant_type=authorization_code&code=${authCode}&redirect_uri=${redirect_uri}`,
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

// getAccessToken();
