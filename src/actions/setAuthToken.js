import axios from "axios";

const setAuthToken = token => {
  token
    ? (axios.defaults.heads.common["Authorization"] = token)
    : delete axios.defaults.headers.common["Authorization"];
};

export default setAuthToken;
