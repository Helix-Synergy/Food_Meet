

// const tileOptions = {
//   "OpenStreetMap": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//   "Topographic": "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
//   "Humanitarian": "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
//   "Carto Light": "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
//   "Carto Dark": "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
//   "Stamen Watercolor": "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
//   "Stamen Toner": "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
// };

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({ iconUrl, shadowUrl: iconShadow });
L.Marker.prototype.options.icon = DefaultIcon;

const tileOptions = {
  "OpenStreetMap": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  "Topographic": "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  "Humanitarian": "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  "Carto Light": "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  "Carto Dark": "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  "Stamen Watercolor": "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
  "Stamen Toner": "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
};

const VenueMap = () => {
  const [tileURL, setTileURL] = useState(tileOptions["Carto Light"]);
  const position = [39.4554, -0.3516]; // Example: Valencia
  const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png',
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="max-w-5xl mx-auto px-4 z-0">

      {/* <div className="flex justify-center mb-4">
        <select
          className="border border-gray-300 rounded px-4 py-2 shadow text-[15px] font-normal"
          onChange={(e) => setTileURL(tileOptions[e.target.value])}
        >
          {Object.keys(tileOptions).map((key) => (
            <option key={key} value={key} className='text-[15px] font-normal'>{key}</option>
          ))}
        </select>
      </div> */}

      <div className="rounded-xl overflow-hidden shadow-lg h-[50vh] w-[500px]">
        <MapContainer center={position} zoom={15} scrollWheelZoom={true} className="h-full w-full">
          <TileLayer url={tileURL} attribution="&copy; CartoDB contributors" />
          <Marker position={position} icon={greenIcon}>
            <Popup>Mediclave 2025 Venue</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default VenueMap;
