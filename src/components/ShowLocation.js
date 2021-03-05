import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, SVGOverlay } from 'react-leaflet';



function ShowLocation({ location }) {

    const { country, region, city, lat, lng, postalCode, timezone, geonameId } = location;

    console.log(country)
    return (
        <div className="map" style={{}}>
            <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]}>
                    <Popup clasName="popup">
                        {postalCode}, {city} <br /> {region}/{country} <br />  timezone is: {timezone}

                    </Popup>
                </Marker>
                {/* <SVGOverlay attributes={{ stroke: 'white' }} bounds={[[lat-0.01, lng],[lat, lng-0.02]]}>
                    <rect x="0" y="0" width="100%" height="100%" fill="gray" />
                     <circle r="5" cx="10" cy="10" fill="white" /> 
                    <text x="10%" y="30%" stroke="white">
                        {country}, {region}, {city}
                    </text>
                </SVGOverlay> */}
            </MapContainer>
        </div>
    )
}


export default ShowLocation

