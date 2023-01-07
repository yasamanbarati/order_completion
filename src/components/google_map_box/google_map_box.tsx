import {
  MapContainer, TileLayer
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
interface Props {
  position: Number[] | any
}
export const GoogleMapBox = ({ position }: Props) => {

  return (
    <MapContainer style={{ width: "100%", height: "100%" }}
      center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}
