import axios from "axios";

const URL = "http://localhost:5001";

/* https://portfolio-bk-flame.vercel.app */
/* http://localhost:5000 */
export default axios.create({
  baseURL: URL,
});
