import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function RouteMap(props) {
    const trips = props.trips;

    const [ bounds, setBounds ] = useState({ latMin: 0, latMax: 0, lngMin: 0, lngMax: 0 })

    useEffect(() => {
        let latMin = 90, latMax = -90, lngMin = 180, lngMax = -180;
        for (const trip of trips) {
            for (const loc of trip) {
                latMin = Math.min(latMin, loc.lat);
                latMax = Math.max(latMax, loc.lat);
                lngMin = Math.min(lngMin, loc.lng);
                lngMax = Math.max(lngMax, loc.lng);
            }
        }
        setBounds({ latMin, latMax, lngMin, lngMax });
    }, [trips]);

    const calcCenter = (bounds) => {
        console.log({
            lat: (bounds.latMin + bounds.latMax) / 2,
            lng: (bounds.lngMin + bounds.lngMax) / 2,
        });
        return {
            lat: (bounds.latMin + bounds.latMax) / 2,
            lng: (bounds.lngMin + bounds.lngMax) / 2,
        }
    }

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={{
                    width: "30em",
                    height: "20em",
                }}
                center={calcCenter(bounds)}
                zoom={10}
            >
                <></>
            </GoogleMap>
        </LoadScript>
    );
}