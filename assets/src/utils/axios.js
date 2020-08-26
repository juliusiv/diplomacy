import axios from "axios";
import { Redirect } from "react-router-dom";

const extractCsrfTokenFromDocument = () =>
  document.getElementsByName("csrf-token")[0].content;

let csrfToken;
if (csrfToken === undefined) csrfToken = extractCsrfTokenFromDocument();

const Axios = axios.create({
  headers: { "X-Csrf-Token": csrfToken },
});
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) return <Redirect to="/login" />;

    return Promise.reject(error);
  }
);

export default Axios;
