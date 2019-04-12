import React from "react";
import { InitialMap } from "./map";
import { Link } from "react-router-dom";

export default function SearchEvent(props) {
    if (props.events) {
        const listNames = props.events.map((event, index) => {
            const linkUrl = `/event/${event.id}`;
            return (
                <Link key={index} to={linkUrl}>
                    <div className='card'>
                        <img className='search-img' alt='' src={event.imgUrl} />
                        <div className='search-column'>
                            <div>
                                <span className='search-title'>
                                    {event.name}
                                </span>
                                <p className='search-description'>
                                    {event.description}
                                </p>
                            </div>
                            <div className='customHr' />
                            <div className='search-info'>
                                <span>
                                    <span>When:</span> {event.date}
                                </span>
                                <span>
                                    <span>Where:</span> {event.location}
                                </span>
                                <span>
                                    <span>Contact us:</span> {event.contact}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        });
        return (
            <div>
                <InitialMap
                    location={props.location}
                    markers={props.events}
                    isMarkerShown
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <h3>{listNames}</h3>
            </div>
        );
    } else {
        return (
            <div>
                <h2> Loading Events...</h2>
            </div>
        );
    }
}
