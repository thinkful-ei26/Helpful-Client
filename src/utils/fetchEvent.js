import { API_BASE_URL } from "../config";
import axios from "axios";

const getOrgEvents = async id =>
    await axios({
        method: "get",
        url: `${API_BASE_URL}/event/org/${id}`,
        data: {},
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(localStorage.getItem("jwtToken")),
        },
    });

export default getOrgEvents;
