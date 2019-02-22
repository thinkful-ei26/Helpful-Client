import React, { useState, useEffect } from "react";

export function GeoLocation(props) {
    // initial state
    const [location, setLocation] = useState(null);

    // fetch state
    const fetchLocation = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let results = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                setLocation(results);
            });
        }
    };

    useEffect(() => {
        fetchLocation();
    });

    if (location === null) {
        return "Loading...";
    }

    return (
        <section className='location'>
            {location.latitude}
            <br />
            {location.longitude}
        </section>
    );
}

export default GeoLocation;
