import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  PolylineF,
} from "@react-google-maps/api";

export default function RouteMap({ trips }) {
  const [bounds, setBounds] = useState({
    latMin: 0,
    latMax: 0,
    lngMin: 0,
    lngMax: 0,
  });

  useEffect(() => {
    let latMin = 90,
      latMax = -90,
      lngMin = 180,
      lngMax = -180;
    for (const trip of trips) {
      for (const loc of trip.coords) {
        latMin = Math.min(latMin, loc.lat);
        latMax = Math.max(latMax, loc.lat);
        lngMin = Math.min(lngMin, loc.lng);
        lngMax = Math.max(lngMax, loc.lng);
      }
    }
    setBounds({ latMin, latMax, lngMin, lngMax });
  }, [trips]);

  const calcCenter = (bounds) => {
    return {
      lat: (bounds.latMin + bounds.latMax) / 2,
      lng: (bounds.lngMin + bounds.lngMax) / 2,
    };
  };

  const calcZoom = (bounds) => {
    const latZoomFactor = 180 / ((bounds.latMax - bounds.latMin) * 2 / 3);
    const lngZoomFactor = 360 / (bounds.lngMax - bounds.lngMin);
    return Math.floor(Math.log2(Math.min(latZoomFactor, lngZoomFactor)));
  };

  const tripPolyline = (trip) => {
    let color = "black";
    if (trip.type === "biking" || trip.type === "walking") color = "green";
    else if (trip.type === "transit") color = "yellow";
    else if (trip.type === "driving") color = "red";

    return (
      <PolylineF
        options={{
          strokeColor: color,
        }}
        path={trip.coords.map(({ lat, lng }) => ({ lat, lng }))}
      />
    );
  };

  return (
    <div
      style={{ margin: "auto", textAlign: "center" }}
    >
      <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{
            width: "30em",
            height: "20em",
          }}
          center={calcCenter(bounds)}
          zoom={calcZoom(bounds)}
          options={{
            disableDefaultUI: true,
            gestureHandling: "none",
            zoomControl: false,
            panControl: false,
            clickableIcons: false,
          }}
        >
          {trips.map((trip) => tripPolyline(trip))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
