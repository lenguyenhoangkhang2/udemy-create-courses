import axios from "axios";

const KEY = "AIzaSyAqrMB5ZZcvYOQknU__J8Wxqiun0G3YOn0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
