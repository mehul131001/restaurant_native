import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 16IIuSaIW_V52Mphu_y4IcUbzlsLZLupHkeo3Yvid_2ukPdWxxB0bqbB01uLcyXaejnUw9CC7nGP2OlVWxDYZIgo7A_m5U2jUvoDuRlT4peqJb_j1myMV5U3SFpAY3Yx",
  },
});
