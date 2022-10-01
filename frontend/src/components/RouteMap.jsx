import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

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

    const calcZoom = (bounds) => {
        const latZoomFactor = 180 / (bounds.latMax - bounds.latMin);
        const lngZoomFactor = 360 / (bounds.lngMax - bounds.lngMin);
        console.log(latZoomFactor);
        console.log(lngZoomFactor);
        return Math.ceil(Math.log2(Math.max(latZoomFactor, lngZoomFactor)));
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
                zoom={calcZoom(bounds)}
                options={{
                    disableDefaultUI: true,
                    draggable: false
                }}
            >
                <></>
            </GoogleMap>
        </LoadScript>
    );
}