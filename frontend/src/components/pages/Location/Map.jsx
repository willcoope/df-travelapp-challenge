import { useRef } from 'react';
import { useEffect, useState } from 'react';

import tt from '@tomtom-international/web-sdk-maps';
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const Map = ({long, lat}) => {
    
const mapElement = useRef();
    const mapZoom = 10;
    const [map, setMap] = useState({});

    useEffect(() => {
        let map = tt.map({
            key: "7sznGTTXY7tOlu2WIeAj0HlByQsnGpen",
            container: mapElement.current,
            center: [long, lat],
            zoom: mapZoom,
        });
        setMap(map);
        return () => map.remove();
    }, [long,lat]);

    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh', marginTop:'20vh', marginBottom:'25vh' }}>
            <div
                ref={mapElement}
                style={{ height: "70vh", width:"70vw" }}
            />
            </div>
        </>
    );
}

export default Map;