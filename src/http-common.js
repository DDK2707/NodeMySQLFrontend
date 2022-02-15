import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:9970/tutorials",
    headers: {
        "Content-type": "application/json"
    }
});