import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../config";
import axios from "axios";

const RenderUserRole = () => {
    const [role, setRole] = useState("Member");
    const fetchRole = async () => {
        await axios(`${API_BASE_URL}/role/user`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        }).then(res => {
            setRole(res.data[0].role);
        });
    };
    useEffect(() => {
        fetchRole();
    }, []);

    return (
        <div>
            <p>{role}</p>
        </div>
    );
};

export default RenderUserRole;
