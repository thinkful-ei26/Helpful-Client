import React, { useState, useEffect } from "react";
import "../stylesheets/org-card.css";
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
        <Link to={link}>
            <div
            // route to org page and passes org data in state
            >
                <div className='card'>
                    <div className='card-image small'>
                        <img
                            src={props.org.imgUrl}
                            alt={props.org.description}
                        />
                    </div>
                    <div className='card-content'>
                        <p className='flow-text'>{props.org.description}</p>
                        <p className='flow-text'>{props.org.name}</p>
                    </div>
                    <div className='card-action'>
                        <div className='flow-text truncate'>
                            <p> Where: {props.org.location}</p>
                            <p> Contact: {props.org.contact}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
