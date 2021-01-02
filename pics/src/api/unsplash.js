import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID gqq9HZole9ZmJmb1IFHp3utZXDsHT0K6nyLDPnv8XA8",
  },
});
