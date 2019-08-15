import axios from "axios";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDRA6dw4qaOe5UxcX4J8NQ3fv_WhYpTrCg"
    }
});