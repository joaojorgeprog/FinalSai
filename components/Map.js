import Head from 'next/head'
import React, {useEffect} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from  'react-google-maps'

useEffect(() => {
    console.log(`olar https://maps.googleapis.com/maps/api/js?v=3.esp&libraries=geometry,drawing,playes&key=${process.env.NEXTGOOGLE_SECRET}`);

}, []);

function Maps({ latitude, longitude}) {
    return (
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Maps))

const Map = () => {
    return (
        <div style={{ width: '100vw', height: '100vh'}}>
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.esp&libraries=geometry,drawing,playes&key=${process.env.NEXTGOOGLE_SECRET}`}
                loadingElement={<div style={{ height: "100%" }}/>}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    )
}

Map.defaultProps = {
    title: 'WebDev Newz',
    keyword: 'web development, programing',
    description: 'Get the atest news in web dev',
}

export default Map