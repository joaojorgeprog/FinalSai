import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from '../mapStyle'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    

    render() {
        return (
            // Important! Always set the container height explicitly  
             <div style={{ height: '100vh', display: "flex"}} >
                <div style={{ width: '20%'}}>
                <h1>asdasda</h1>
                </div>
                <div style={{ width: '80%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: `${process.env.NEXT_PUBLIC_GOOGLE_ID}`}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        options={{ styles: mapStyles }}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="Estou aqui"
                            icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}

export default Map;