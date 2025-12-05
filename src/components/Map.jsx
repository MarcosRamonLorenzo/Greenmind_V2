import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css"

export const Map = () => {
  return (
    <MapContainer center={{ lat: "38.3704348", lng: "-0.4993632" }} zoom={10}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
    </MapContainer>
  );
};
