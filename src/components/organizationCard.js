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
        <div className='column is-one-third'>
            <Link to={link}>
                <div className='card'>
                    <div className='card-image'>
                        <figure className='image is-square'>
                            <img src={props.org.imgUrl} alt={props.org.name} />
                        </figure>
                    </div>
                    <div className='card-content'>
                        <div className='media'>
                            <div className='media-content'>
                                <p className='title is-4'>{props.org.name}</p>
                                <p className='subtitle is-6'>
                                    {props.org.contact}
                                </p>
                            </div>
                        </div>

                        <div className='content'>
                            {props.org.description}
                            <br />
                            <time dateTime={props.org.date}>
                                {props.org.date}
                            </time>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
