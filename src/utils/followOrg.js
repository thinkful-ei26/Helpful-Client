import axios from "axios";
import { API_BASE_URL } from "../config";

const followOrg = async orgId => {
    await axios({
        method: "post",
        url: `${API_BASE_URL}/follow`,
        data: { orgId },
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(localStorage.getItem("jwtToken")),
        },
    });
};

const unFollowOrg = async followData => {
    await axios({
        method: "delete",
        url: `${API_BASE_URL}/follow`,
        data: {
            followId: followData.id,
        },
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(localStorage.getItem("jwtToken")),
        },
    });
};

const fetchFollow = async orgId => {
    return await axios(`${API_BASE_URL}/follow/following/${orgId}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(localStorage.getItem("jwtToken")),
        },
    });
};

export { followOrg, unFollowOrg, fetchFollow };
