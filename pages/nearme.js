import Meta from '../components/Meta'
import React, {useState, useEffect} from 'react'
import Map from '../components/Map'

function NearMe() {
    const [error, setError] = useState(null)
    const [latitude, setlatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    useEffect(() => {
        console.log(process.env.NEXTAUTH_URL);
        // Update the document title using the browser API
        navigator.geolocation.getCurrentPosition(
            function (position) {
                setlatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                console.log(`coordes: ${position.coords.longitude}`)
            },
            function (error) {
                setError(`Error Code =  ${error.code}  - ${error.message}`);
            }
        );
    }, []);


    return (
        <div>
            <Meta title='Near Me'/>
            <Map latitude={latitude} longuitude={longitude}/>
        </div>
    )
}

export default NearMe