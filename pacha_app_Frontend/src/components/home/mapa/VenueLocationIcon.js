import L from 'leaflet';
import Icono from './Icono.png';

export const VenueLocationIcon = L.icon({
  iconUrl: Icono,
  iconRetinaUrl: Icono,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
});
