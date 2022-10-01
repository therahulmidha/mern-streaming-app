import axios from "axios";

// TODO: Settings file to have envs pre loaded with default values
export default axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL!
})