import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  PolylineF,
} from "@react-google-maps/api";

export default function RouteMap({ trips }) {
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    if (trips.length === 0) {
      return;
    }
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
    if (bounds === null)
      return {lat: 42.3736, lng: -71.1097}
    return {
      lat: (bounds.latMin + bounds.latMax) / 2,
      lng: (bounds.lngMin + bounds.lngMax) / 2,
    };
  };

  const calcZoom = (bounds) => {
    if (bounds == null)
      return 12;
    const latZoomFactor = 180 / (bounds.latMax - bounds.latMin);
    const lngZoomFactor = 360 / (bounds.lngMax - bounds.lngMin);
    return Math.min(Math.floor(Math.log2(Math.min(latZoomFactor, lngZoomFactor))), 17);
  };

  const tripPolyline = (trip) => {
    let color = "black";
    if (trip.type === "biking" || trip.type === "walking") color = "blue";
    else if (trip.type === "transit") color = "green";
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
      id="home"
      style={{ margin: "auto", textAlign: "center" }}
    >
      <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "70vh",
          }}
          center={calcCenter(bounds)}
          zoom={calcZoom(bounds)}
          options={{
            disableDefaultUI: true,
            gestureHandling: "none",
            zoomControl: false,
            panControl: false,
            clickableIcons: false,
            keyboardShortcuts: false,
          }}
        >
          {trips.map((trip) => tripPolyline(trip)) ?? <></>}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
