import React from "react";
import "../stylesheets/markerDetails.css";
import {
    withGoogleMap,
    GoogleMap,
    InfoWindow,
    Marker,
} from "react-google-maps";

export const InitialMap = withGoogleMap(props => {
    const dots = props.markers.map((marker, index) => {
        return (
            <React.Fragment key={index}>
                <Marker position={marker.geoLocation} />
                <InfoWindow
                    className='info-panel'
                    position={marker.geoLocation}>
                    <div className='marker-detail'>
                        <span>{marker.name}</span>
                        <p>{marker.description}</p>
                    </div>
                </InfoWindow>
            </React.Fragment>
        );
    });

    return (
        <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={14}
            defaultCenter={props.location}>
            <Marker position={props.location} />
            <InfoWindow className='info-panel' position={props.location}>
                <div className='marker-detail'>
                    <span>Home</span>
                </div>
            </InfoWindow>

            {dots}
        </GoogleMap>
    );
});

export const PointMap = withGoogleMap(props => {
    return (
        <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={14}
            defaultCenter={props.marker.geoLocation}>
            <Marker position={props.marker.geoLocation} />
            <InfoWindow
                className='info-panel'
                position={props.marker.geoLocation}>
                <div className='marker-detail'>
                    <span>{props.marker.name}</span>
                    <p>{props.marker.description}</p>
                </div>
            </InfoWindow>
        </GoogleMap>
    );
});

export const LoadingMap = withGoogleMap(props => {
    return (
        <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={14}
            defaultCenter={props.location}
        />
    );
});
