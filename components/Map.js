import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from '../mapStyle'
import { GoLocation } from "react-icons/go";
import { RiWalkLine } from "react-icons/ri"
import DrawerFilter from '../components/DrawerFilter'
import { events } from '../dataFestas'
import CardImage from './CardImage/index'
import CardEventDetails from './CardEventDetails'
import { Form, Button} from 'react-bootstrap'


const Map = ({ latitude, longuitude }) => {

    const AnyReactComponent = ({ text, rei, event }) => (
        <div>
            {event && 
                <GoLocation size={30} color="green" onClick={() => { setSeletedEvent(event)} }/>
            }
            {!event && 
                <RiWalkLine size={30} color="blue" />
            }
            <div>{text}</div>
            <div>{rei}</div>
        </div>
    );
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    const [open, setOpen] = useState(false)
    const [allEvents, setAllEvents] = useState(events)
    const [allEventsBackup, setAllEventsBackup] = useState(events)
    const [seletedEvent, setSeletedEvent] = useState(null)
    const [query, setQuery] = useState('')
    useEffect(() => {
        setLat(latitude)
    }, [latitude!= null]);

    useEffect(() => {
        setLong(longuitude)
    }, [longuitude != null]);

    function checkRightCard(codigo){
        if (seletedEvent !=null){
            const validate = seletedEvent.codigo == codigo ? true : false

            return validate;
        }else{
            return false;
        }
    }

    useEffect(() => {
        const newData = allEventsBackup.filter(function (cards, aa) {
            const itemData = cards.title ? cards.title.toUpperCase() : ''.toUpperCase();
            const textData = query.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        setAllEvents(newData)
    }, [query]);

        return (
            // Important! Always set the container height explicitly  
             <div style={{ minHeight: '100vh', display: "flex", position:"relative"}} >
                <div style={{ width: '20%', height:'100%'}}>
                <h1 style={{ textAlign: 'center'}}>Event Details</h1>
                    {seletedEvent &&
                        <CardEventDetails image={seletedEvent ? seletedEvent.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'} eventSelected={seletedEvent} title={seletedEvent ? seletedEvent.title : 'undefined Title'}/> 
                    }
                    <Form style={{ padding: '10px',justifyContent: 'center', display: 'flex', backgroundColor: '#f73859', borderTopLeftRadius: '15px', borderTopRightRadius: '15px',margin:'5%' }}>
                        <Form.Group>
                            <Form.Control
                                type="search"
                                placeholder={'Search by name'}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <Button  onClick={() => setOpen(true)}>Filter</Button>
                        </Form.Group>
                        
                    </Form>
                    <div style={{
                        height: '50vh',
                        overflow: 'auto',
                        border: '1px',
                        borderColor: 'red'
                          }}>
                    {allEvents.map((event) =>
                        <CardImage
                            title={event.title}
                            description={'Descreption'}
                            image={event.image}
                            onClick={() => setSeletedEvent(event)}
                            active={checkRightCard(event.codigo)}
                        />
                    )
                    }

                </div>
                    {open &&
                        <DrawerFilter onClose={() => setOpen(false)} title={"joao"} />
                    }
                </div>
                <div style={{ width: '80%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: `${process.env.NEXT_PUBLIC_GOOGLE_ID}`}}
                        defaultCenter={{
                            lat: 40.2115,
                            lng: -8.4292
                        }}
                        defaultZoom={8}
                        options={{ styles: mapStyles }}
                    >
                        {lat != null && long != null &&
                        <AnyReactComponent
                            lat={lat}
                            lng={long}
                            text="tu"
                            rei="rei"
                            icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}
                        />
                        }
                        {allEvents.map((event) =>
                            <AnyReactComponent
                                lat={event.latitude}
                                lng={event.longitude}
                                event={event}
                                icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}
                            />
                        )
                        }
                    </GoogleMapReact>
                </div>
            </div>
        );
    }


export default Map;