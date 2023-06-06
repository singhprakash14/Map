import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";

const Map = () => {
  return (
    <div>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; OpenStreetMap contributors"
        />
      </MapContainer>
    </div>
  );
};

export default Map;
