import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./LeafletMap.css"
import { Link } from "react-router-dom";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

const LeafletMap = ({ destinations }) => {
    const paris = [48.86314634052172, 2.2941632958970226];
    return (
        <div className="map-div">
            <MapContainer center={paris} zoom={2} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {destinations && destinations.map((des) => {
                    return (
                        <div key={des.id}>
                            <Marker position={des.coordination}>
                                <Popup>
                                    <Link to={`/destinations/${des.id}`}>{des.city}</Link>
                                </Popup>
                            </Marker>
                        </div>
                    )
                })}
            </MapContainer>
        </div>
    );
}

export default LeafletMap;