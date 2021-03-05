import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function ShowLocation({ location }) {

    const { country, region, city, lat, lng, postalCode, timezone, geonameId } = location;

    console.log(country)
    return (
        <div style={{ height: "100px", margin: "1em" }}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}


export default ShowLocation

