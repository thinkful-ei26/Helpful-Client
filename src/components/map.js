import React from 'react';
import '../stylesheets/marker-details.css';
import {
    withGoogleMap,
    GoogleMap,
    InfoWindow,
    Marker
} from 'react-google-maps';

export const InitialMap = withGoogleMap(props => {

    const dots = props.markers.map(marker => {
        return <React.Fragment><Marker
            position={marker.geoLocation}
        />
            <InfoWindow className='info-panel' position={{
                "lat": 40.5473,
                "lng": -105.1076
            }} >
                <div className='marker-detail' >
                    <span>{marker.name}</span>
                    <p>{marker.description}</p>
                </div>
            </InfoWindow>
        </React.Fragment>
    })

    return (
        <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={14}
            defaultCenter={{
                "lat": 40.5473,
                "lng": -105.1076
            }}
        >
            <Marker
                position={{
                    "lat": 40.5473,
                    "lng": -105.1076
                }}
            />

            {dots}
        </GoogleMap >
    )
})