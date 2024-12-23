import React, { useEffect } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import L from 'leaflet';

type MapViewProps = {
  latitude: number;
  longitude: number;
}

const MapView: React.FC<MapViewProps> = ({ latitude, longitude }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Get the map container element by its ID
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.error('Map container not found');
      return;
    }

    // Initialize the map with the given coordinates
    const map = L.map(mapContainer).setView([latitude, longitude], 13);

    // Load OpenStreetMap layers and add them to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker at the given latitude and longitude
    L.marker([latitude, longitude]).addTo(map);

    // Clean up the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, []);

  return (
    <Box
      id="map"
      sx={{
        width: '100%',
        height: isMobile ? 200 : 400,
        marginTop: '20px',
      }}
    ></Box>
  );
};

export default MapView;
