import axios from "axios";
import { API_BASE_URL } from "../config";

const getOrgs = async id =>
    await axios({
        method: "get",
        url: `${API_BASE_URL}/org/${id}`,
        data: {},
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(localStorage.getItem("jwtToken")),
        },
    });

export default getOrgs;
