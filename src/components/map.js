import React from 'react';
import {
    withGoogleMap,
    GoogleMap,
    InfoWindow,
    Marker
} from 'react-google-maps';

export const InitialMap = withGoogleMap(props => {
    return (
        <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={14}
            defaultCenter={{ lat: 40.6944, lng: -73.9213 }}
        >
            {/* <Marker
                key={props.index}
                position={Marker.position}
                onClick={() => props.onMarkClick(marker)}

            /> */}
        </GoogleMap>
    )
})