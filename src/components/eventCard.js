import React from "react";
import { Link } from "react-router-dom";

export default function EventCard(props) {
    const linkUrl = `/event/${props.event.id}`;

    if (!props.event) {
        return null;
    }

    return (
        // <Link to={linkUrl}>
        //     <div className='dashboard-event-card'>
        //         <h3>{props.event.name}</h3>
        //         <div className='event-card-content'>
        //             <p>{props.event.date}</p>
        //             <img src={props.event.imgUrl} alt={props.event.name} />
        //             <p className='card-details'>Details:</p>
        //             <p>{props.event.description}</p>
        //         </div>
        //     </div>
        // </Link>
        <div className='column is-one-third'>
            <Link to={linkUrl}>
                <div className='card'>
                    <div className='card-image'>
                        <figure className='image is-square'>
                            <img
                                src={props.event.imgUrl}
                                alt={props.event.name}
                            />
                        </figure>
                    </div>
                    <div className='card-content'>
                        <div className='media'>
                            <div className='media-content'>
                                <p className='title is-4'>{props.event.name}</p>
                                <p className='subtitle is-6'>
                                    {props.event.contact}
                                </p>
                            </div>
                        </div>

                        <div className='content'>
                            <p>{props.event.description}</p>
                            <time dateTime={props.event.date}>
                                {props.event.date}
                            </time>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
