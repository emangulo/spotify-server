import "dotenv/config";

const base_url = "https://api.spotify.com/v1/artists/";
const options = {
  headers: {
    Authorization: `Bearer ${process.env.access_token}`,
  },
};

const getArtistInfo = async (artistID: string) => {
  try {
    let response = await fetch(base_url + artistID, options);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getArtistInfo("57dN52uHvrHOxijzpIgu3E"); //Ratatat
