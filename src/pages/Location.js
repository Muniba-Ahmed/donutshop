import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Location() {
  const [center, setCenter] = useState({ lat: 33.8532109, lng: -117.5635115 });
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <MapContainer
        center={center}
        zoom={18}
        style={{ width: "100%", height: "600px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[33.8532109, -117.5635115]}>
          <Popup>
            Part of Santana Regional Park (44486238)
            <br />
            Changeset #91253409
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Location;
