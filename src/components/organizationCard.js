import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function OrganizationCard(props) {
    const [link, setLink] = useState(`/organization/${props.org.id}`);

    const checkAdmin = () => {
        if (props.admin) {
            setLink(`/orgdashboard/${props.org.id}`);
        }
    };

    useEffect(() => {
        checkAdmin();
    }, []);

    if (!props.org) {
        return "Loading...";
    }

    return (
        <div className='org-card'>
            <Link to={link}>
                <h3>{props.org.name}</h3>
            </Link>
            <div className='org-card-content'>
                <img src={props.org.imgUrl} alt={props.org.name} />
                <p className='card-details'>Details:</p>
                <p>{props.org.description}</p>
                <p>
                    <i className='material-icons'>location_on</i>
                    {props.org.location}
                </p>
                <p>
                    <i className='material-icons'>person</i>
                    {props.org.contact}
                </p>
            </div>
        </div>
    );
}
