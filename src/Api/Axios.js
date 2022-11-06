import axios from "axios";
import baseUrl from "./BaseUrl";

export default axios.create({
  baseURL: baseUrl,
});
